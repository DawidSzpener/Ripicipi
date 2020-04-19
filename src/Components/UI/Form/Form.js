import React from 'react'
import classes from './Form.css'
import Aux from '../../../hoc/Aux'

const form = (props) => {
  let inputElement = null

  switch (props.inputtype) {
    case('input'):
      inputElement = <input className={classes.InputElement} {...props}/>
      break
    case('textarea'):
      inputElement = <textarea className={classes.InputElement} {...props}/>
      break
    case('select'):
      inputElement = 
      <Aux>
        <p>Category</p>
        <select className={classes.InputElement} {...props}>
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
    default:
      inputElement = <input className={classes.InputElement} {...props}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default form