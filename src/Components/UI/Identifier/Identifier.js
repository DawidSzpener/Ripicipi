import React from 'react'

import './Identifier.css'

const Identifier = (props => {
  console.log(props.creatorsPicture)
  return (
    <div className="Identifier">
      <img className="Identifier__picture" alt="identirfier pic" src={props.creatorsPicture}/>
      <img className="Identifier__name" alt="name pic" src={props.creatorsName}/>
    </div>
  )
})

export default Identifier