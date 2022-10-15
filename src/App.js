import Questions from './Questions.js'
import StartScreen from './StartScreen.js'
import React from 'react'


export default function App() {
  const [gameStarted, setGameStarted] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [answeredCorrectly, setAnsweredCorrectly] = React.useState(0)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    numberOfQuestions: 5,
    category: '',
    difficulty: '',
    type: ''
  })
  
  function changeGameState() {
      setGameStarted(prevState => !prevState)
      setIsSubmitted(false)
      newGame()
  }
  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${formData.numberOfQuestions}&category=${formData.category}&difficulty=${formData.difficulty}&type=${formData.type}`)
    .then(res => res.json())
    .then(data => setQuestions(data.results))
  setIsSubmitted(false)
  setAnsweredCorrectly(0)
  }, [])

    function newGame() {
      fetch(`https://opentdb.com/api.php?amount=${formData.numberOfQuestions}&category=${formData.category}&difficulty=${formData.difficulty}&type=${formData.type}`)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
    setIsSubmitted(false)
    setAnsweredCorrectly(0)
    }

    function submitAnswers() {
      setIsSubmitted(prevState => !prevState)
   }

   function answerCorrect() {
      setAnsweredCorrectly(prevState => prevState + 1)
   }


   function handleChange(e) {
    setFormData(prevObj => (
       { ...prevObj,
        [e.target.name]: e.target.value
        }
    ))
   }

  const questionData = questions.map(data => {
        return (
       <Questions
       answerCorrect={answerCorrect}
       isSubmitted={isSubmitted}
        question={data.question}
        gameStarted={gameStarted}
        correctAnswer={data.correct_answer}
        incorrectAnswersArr={data.incorrect_answers}
       /> 
        )
      })

  return (
      <>
      <StartScreen 
      formData={formData}
      handleChange={handleChange}
      startGame={changeGameState} gameStarted={gameStarted} />
      {gameStarted && <button onClick={changeGameState} className='homeScreen'>Go To Home Screen</button>}
      <div>{questionData}</div>
      {gameStarted && !isSubmitted && <button  className='submit--btn' onClick={submitAnswers}>Submit</button>}
      {isSubmitted && <button className='new--game--btn' onClick={newGame}>New Games</button>}
      {isSubmitted && <h2 className='number--correct'>You answered {answeredCorrectly} correctly!</h2>}
      </>
  )
}
