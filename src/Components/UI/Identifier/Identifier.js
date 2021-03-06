import React from 'react'

import './Identifier.css'

const Identifier = (props => {
  return (
    <div className="Identifier">
      <img className="Identifier__picture" alt="identirfier pic" src={props.creatorsPicture}/>
      <img className="Identifier__name" alt="name pic" src={props.creatorsName}/>
    </div>
  )
})

export default Identifier