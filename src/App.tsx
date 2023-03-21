import { ReactElement, useState } from 'react'
import './App.css'
import stats from '../data.json'

function App() {  

const myArrMadeFromForEach: Array<ReactElement> = []; // we create a new array which will evaluate to a value when we inject it into a JSX expression

stats.forEach((item) => myArrMadeFromForEach.push(
<div className={"summary-item"} id={item.category} key={item.category}><span><img src={item.icon} alt="" />{item.category}</span> <span className='summary-item-score'>{item.score} <span> / 100</span> </span> </div>
)); 

// we push a JSX element containing a value to our 'myArrMadeFromForEach' because `.forEach()` does not return any value, nor does it mutate the array on which it is called

/*
const myList = (
  <div>{myArrMadeFromForEach}</div> // `myArrMadeFromForEach` will evaluate to an array of `<li>` elements
)
*/

  let summaryAndResults = <div className="wrapper">
  <div className="results">
    <h3>Your Result</h3>
    <div className="results-total">
      <p>76</p> 
      <p>of 100</p>
    </div>
    <div className='results-bottom'>
    <h5>Great</h5>
    <p>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  </div>

  <div className="summary">
    <h3 className="summary-item">Summary</h3>
    

    {myArrMadeFromForEach}



    <div className="summary-item btn"><button >Continue</button></div>
    
  </div>
</div>



  return summaryAndResults
}

export default App


      {/* <div className="summary-item">
        Reaction
        80 / 100
      </div>
      <div className="summary-item">
        Memory
        92 / 100
      </div>
      <div className="summary-item">
        Verbal
        61 / 100
      </div>
      <div className="summary-item">
        Visual
        72 / 100
      </div> */}