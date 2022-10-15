/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React from "react";

export default function Questions(props) {
    const containerStyles = {
     display: props.gameStarted?'':'none'
    }
const [answersArr, setAnswersArr] = React.useState([])

React.useEffect(() => {
if (props.incorrectAnswersArr.length > 1) {
setAnswersArr([

    {
    answer: props.incorrectAnswersArr[0].replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g,"\""),
    isCorrect: false,
    isHeld: false
},
    {
    answer: props.incorrectAnswersArr[1].replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g,"\""),
    isCorrect: false,
    isHeld: false
},
    {
    answer: props.incorrectAnswersArr[2].replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g,"\'"),
    isCorrect: false,
    isHeld: false
},
    {
    answer: props.correctAnswer,
    isCorrect: true,
    isHeld: false
}])} else {
    setAnswersArr([

        {
        answer: props.incorrectAnswersArr[0],
        isCorrect: false,
        isHeld: false
    },
        {
        answer: props.correctAnswer,
        isCorrect: true,
        isHeld: false
        }
    ])
}},[props.correctAnswer])

function hold(item, i) {
    let canHold = true
    answersArr.map(answer => {
        if(answer.isHeld === true) {
        canHold = false
    }})
    if(item.isHeld) {
    const newArr = [...answersArr]
    newArr[i].isHeld = !newArr[i].isHeld
    setAnswersArr(newArr)    
    }
    if(canHold) { 
    const newArr = [...answersArr]
    newArr[i].isHeld = !newArr[i].isHeld
    setAnswersArr(newArr)
    }
    } 



React.useEffect(() =>{
    const array = [...answersArr]
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    setAnswersArr(array);
}, [])

React.useEffect(() =>{
    answersArr.map(answer => {
        if(answer.isCorrect && answer.isHeld) {
            props.answerCorrect()
        }
    })
},[props.isSubmitted])

let answersMap = answersArr.map((item, i) => {
    const styles = {
        background: (props.isSubmitted && item.isCorrect)
         ? 'green' : ((props.isSubmitted && item.isHeld && !item.isCorrect) || (props.isSubmitted && !item.isCorrect)) 
         ? 'red': (item.isHeld) 
         ? 'rgb(255, 168, 7)' : '',
         color : (props.isSubmitted) ? 'white' : 'black' 
    }
    return (
        <div
        key = {i} 
        id={item.isTrue} 
        onClick={() => hold(item ,i)} 
        className='answer'
        style={styles}>{item.answer}</div> 
    )
})
    return (
        <main>
            <div style={containerStyles} className = 'question'>
                <h2>{props.question.replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g,"\"")}</h2>
                <div className ='answers'>
                    {answersMap}
                </div>
            </div>
        </main>
    )
}

