import React from 'react'

import './Identifier.css'

const Identifier = (props => {
  let name = null
  let picture = null

  switch(props.creatorsName) {
    case('Guest'):
      name = ''
      picture = ''
    break
    case('Dawid'):
      name = ''
      picture = ''
    break
    case('Karolina'):
      name = ''
      picture = ''
    break
    case('Mariola'):
      name = ''
      picture = ''
    break
    case('Magda i Maciej'):
      name = ''
      picture = ''
    break
    case('Seba i Beata'):
      name = ''
      picture = ''
    break
    default:
      name = ''
      picture = ''
  }

  return (
    <div className="Identifier">
      <img className="Identifier__picture" alt="identirfier pic" src={name}/>
      <img className="Identifier__name" alt="name pic" src={picture}/>
    </div>
  )
})

export default Identifier
