import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './Toolbar.scss'
import checkMark from '../../../assets/pictures/check-mark.png'
import denied from '../../../assets/pictures/access-denied.png'

import Aux from '../../../hoc/Aux'
import NavigationItems from '../NavigationItems/NavigationItems'
import * as actionTypes from '../../../store/actions'

const Toolbar = (props) => {

  const [showInput, setShowInput] = useState(false)
  const [password, setPassword] = useState('')
  const [showWarning, setShowWarning] = useState(false)

  const inputChangedHandler = (event) => {
    let updatedFormElement = event.target.value

    setPassword(updatedFormElement)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if(password !== 'gandzialf1') {
      setShowInput(false)
      setShowWarning(true)

      setTimeout(() => {
        setShowWarning(false)
      }, 1500)
    } else {
      setShowWarning(false)
      setShowInput(false)
      props.onCorrectPassword(password)
      props.history.push('/dawid')
    }
  }

  const goToHomepage = () => {
    setShowInput(!showInput)
  }

  let input = null
  let warning = null
  
  if(showInput) {
    input = 
    <div className="Input__password">
      <form onSubmit={submitHandler} style={{display: 'inline-block'}}>
        <input className='InputElement' style={{width: '60%', borderRadius: '0px', display: 'inline-block'}} type="password" onChange={(event) => inputChangedHandler(event)} required name="password" placeholder="Password"/>
        <button style={{width: '10%', padding: '12px 30px 3px 8px', margin: '12px 0px', float: 'none', borderRadius: '0px'}} className='AddFormSubmit' type='submit' value='submit'><img style={{width: '12px', height: '12px', marginLeft: '6px',}} alt="checkmark" src={checkMark}/></button>
      </form>
    </div>
  }

  if(showWarning) {
    warning = 
      <div className="Warning">
        <img alt="denied" src={denied}/>
      </div>
  } else {
    warning = null
  }

  return (
    <Aux>
      <div className='Toolbar'>
        <div className='Ricipici' onClick={goToHomepage}></div>
        {input}
        {warning}
        <NavigationItems />
        <div className='Menu' onClick={props.clicked}>MENU</div>
      </div>
      <div className='ToolbarBottom'></div>
    </Aux>
  )
}

const mapStateToProps = state => {
  return {
    pass: state.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCorrectPassword: (password) => dispatch({type: actionTypes.SET_PASSWORD, password: password}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Toolbar))
