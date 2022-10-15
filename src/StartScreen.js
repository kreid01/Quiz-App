import React from 'react'

export default function StartScreen(props) {
    const styles = {
        display: props.gameStarted ? 'none' : ''
   }
    return (
        <main>
            <div className='start--screen' style={styles} >
                <h1>Quizical</h1>
                <p>Answer Quessions</p>
                <form>
                    <div className='form--containr'>
                        <label aria-label='number of questions'>Number of Questions:</label>
                        <input 
                        max='50'
                        name='numberOfQuestions'
                        value={props.formData.numberOfQuestions}
                        onChange={(e) => props.handleChange(e)}
                        type='number'></input>
                    </div>
                    <div className='form--container'>
                        <label aria-label='select category'>Select Category:</label>
                        <select 
                        name='category'
                        onChange={(e) =>props.handleChange(e)}>
                            <option value='1'>Any Category</option>
                            <option value='9'>General Knowledge</option>
                            <option value='10'>Entertainment: Books</option>
                            <option value='11'>Entertainment: Film</option>
                            <option value='12'>Entertainment: Music</option>
                            <option value='13'>Entertainment: Musicals & Theatres</option>
                            <option value='14'>Entertainment: Television</option>
                            <option value='15'>Entertainment: Video Games</option>
                            <option value='16'>Entertainment: Board Games</option>
                            <option value='17'>Science & Nature</option>
                            <option value='18'>Science: Computers</option>
                            <option value='29'>Science: Mathematics</option>
                            <option value='20'>Mythology</option>
                            <option value='21'>Sports</option>
                            <option value='22'>Geography</option>
                            <option value='23'>History</option>
                            <option value='24'>Politics</option>
                            <option value='25'>Art</option>
                            <option value='26'>Celebirities</option>
                            <option value='27'>Animals</option>
                        </select>
                    </div>
                    <div className='form--container'>
                        <label aria-label='select difficults'>Select Difficults:</label>
                        <select 
                        name='difficulty'
                        value = {props.formData.difficulty}
                        onChange={(e) =>props.handleChange(e)}>
                            <option value='1'>Any Difficults</option>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </div>
                    <div className='form--container'>
                        <label aria-label='select type'>Select Type:</label>
                        <select 
                        name='type'
                        value = {props.formData.type}
                        onChange={(e) =>props.handleChange(e)}>
                            <option value='1'>Any Type</option>
                            <option value='easy'>Multiple Choice</option>
                            <option value='medium'>True or False</option>
                        </select>
                    </div>
                </form>
                <button className='start--button' onClick={props.startGame}>Start Quiz</button> 
            </div>
        </main>
    )
}
