import React from 'react'
import PropTypes from 'prop-types'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="total-container">
        <div className='card-container'>
            <p id='title'>Project Name: {props.title}</p>
            <p id= "sub-title">Project Brief:</p>
            <p id="body">{props.body}</p>

            <button>Team Chisel</button>

            <p id="lead">Team Lead: {props.lead}</p>
        </div>
    </div>
    
  )
}

export default Card
