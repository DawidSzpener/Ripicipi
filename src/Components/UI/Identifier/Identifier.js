import React from 'react'

import './Identifier.scss'

const Identifier = (props) => {
  let name = null
  let picture = null

  switch(props.creatorsName) {
    case('Guest'):
      name = "https://i.imgur.com/XeQeCul.png"
      picture = "https://i.imgur.com/ZRv5rvN.jpg"
    break
    case('Dawid'):
      name = "https://i.imgur.com/XeQeCul.png"
      picture = "https://i.imgur.com/ZRv5rvN.jpg"
    break
    case('Karolina'):
      name = ''
      picture = ''
    break
    case('Mariola'):
      name = ''
      picture = ''
    break
    case('Magda-i-Maciej'):
      name = ''
      picture = ''
    break
    case('Seba-i-Beata'):
      name = ''
      picture = ''
    break
    default:
      name = "https://i.imgur.com/XeQeCul.png"
      picture = "https://i.imgur.com/ZRv5rvN.jpg"
  }

  return (
    <div className="Identifier">
      <img className="Identifier__picture" alt="identirfier pic" src={picture}/>
      <img className="Identifier__name" alt="name pic" src={name}/>
    </div>
  )
}

export default Identifier
