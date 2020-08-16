import React from 'react'
import './Form.css'
import Aux from '../../../hoc/Aux'

const form = (props) => {
  let inputElement = null

  switch (props.inputtype) {
    case('input'):
      inputElement = <input className='InputElement' {...props}/>
      break
    case('textarea'):
      inputElement = <textarea className='InputElement' {...props}/>
      break
    case('select'):
      inputElement = 
      <Aux>
        <select {...props}>
          <option key='Breakfast' value='Breakfast'>Breakfast</option>
          <option key='Dinner' value='Dinner'>Dinner</option>
          <option key='Desserts' value='Desserts'>Desserts</option>
          <option key='Baking' value='Baking'>Baking</option>
          <option key='Sauce' value='Sauce'>Sauce</option>
          <option key='Salad' value='Salad'>Salad</option>
          <option key='Pizza' value='Pizza'>Pizza</option>
          <option key='Snacks' value='Snacks'>Snacks</option>
          <option key='Liquids' value='Liquids'>Liquids</option>
        </select>
      </Aux>
      break
    case('select_time'):
			inputElement = 
				<Aux>
					<label>How long?</label>
					<div style={{paddingTop: '5px'}}></div>
					<select className='InputElement' name='select_time' {...props}>
						<option key='15' value='15 minutes'>15 minutes</option>
						<option key='30' value='30 Minutes'>30 Minutes</option>
						<option key='60' value='60 minutes'>60 minutes</option>
					</select>
				</Aux>
			break 
    case('select_difficulty'):
    inputElement = 
        <Aux>
            <label>How hard?</label>
            <div style={{paddingTop: '5px'}}></div>
            <select className='InputElement' {...props}>  
                <option key='easy' value='easy'>easy</option>
                <option key='moderate' value='moderate'>moderate</option>
                <option key='hard' value='hard'>hard</option>
            </select>
        </Aux>
    break 
    case('select_keto'):
    inputElement = 
        <Aux>
            <label>Keto friendly?</label>
            <div style={{paddingTop: '5px'}}></div>
            <select className='InputElement' {...props}>  
                <option key='yes' value='yes'>Yes</option>
                <option key='no' value='no'>No</option>
            </select>
        </Aux>
    break 
    default:
      inputElement = <input className='InputElement' {...props}/>
  }

  return (
    <div className='Input'>
      <label className='Label'>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default form