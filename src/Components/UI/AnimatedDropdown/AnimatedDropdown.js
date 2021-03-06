import React, { useState } from 'react'
import { withRouter } from "react-router-dom";

import './AnimatedDropdown.scss'

const AnimatedDropdown = (props) => {
  const [list, setList] = useState(props.list)
  const [selectedItem, setSelectedItem] = useState(null)

  function selectItem(item) {
    setSelectedItem(item)
    props.history.push(`/categories/${item.value}`)
    window.location.reload()
  }

  let theme = "black"
  if(props.theme) {
    theme = props.theme
  }

  let classes = ["AnimatedDropdown"]
  if(props.shape){classes.push(`AnimatedDropdown--${props.shape}`)}
  if(props.theme){classes.push(`AnimatedDropdown--${theme}`)}

  let shape = ""
  if(props.shape === 'rectangle'){
    shape = "AnimatedDropdown__header--rectangle"
  } else {
    shape = "AnimatedDropdown__header--circle"
  }

  let header = null

  if(props.shape === 'circle') {
    header = 
    <div className="AnimatedDropdown__header">
      <img className={shape + "--title"} src={props.picture} alt="foto"/>
    </div>
  } else {
    header =
    <div className="AnimatedDropdown__header">
      <div className={shape + "--title"} >{props.title}</div>
    </div>
  }

  let headerPosition = ''
  if(props.headerPosition === "right") {
    headerPosition = '--right'
  }

  return (
    <li className={classes.join(' ')}>
      {header}
      <div
        className={props.shape === "circle" ? 'AnimatedDropdown__list AnimatedDropdown__list--circle' : 'AnimatedDropdown__list AnimatedDropdown__list--rectangle'+ headerPosition}
        >
        {list.map(item => (
          <div className={"AnimatedDropdown__item AnimatedDropdown__item--" + theme} key={item.id} onClick={() => selectItem(item)}>
            <div style={{paddingTop: "12px"}}>{item.value[0].toUpperCase() + item.value.slice(1)}</div>
          </div>
        ))}
      </div>
    </li>
  )
}

export default withRouter(AnimatedDropdown)
