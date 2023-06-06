import React from 'react'
import '../styles/App.css'

function Textslider(props) {

    

  return (
    <div className='position-relative d-flex text-white w-100' style={{overflow:'hidden'}}>
      <div className='scroll text1 bg-white'>
        <div>
          {props.text} <span>{props.text2}</span> {props.text} <span>{props.text2}</span> {props.text} <span>{props.text2}</span> {props.text} <span>{props.text2}</span>
        </div>
        <div>
          {props.text} <span>{props.text2}</span> {props.text} <span>{props.text2}</span> {props.text} <span>{props.text2}</span> {props.text} <span>{props.text2}</span>
        </div>
      </div>
    </div>
  )

}

export default Textslider;