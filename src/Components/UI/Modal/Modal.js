import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
import {Animated} from "react-animated-css";
import Input from '../Form/Form'
import './Modal.css'

class Modal extends Component {

//   shouldComponentUpdate (nextProps, nextState) {
//     return  nextProps.show !== this.props.show
//   }

render () {
    return (
      <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <Animated className='Modal' style={{ paddingTop: '0px', paddingBottom: '0px'}} animationIn="zoomInUp" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
        <div className='Modal'>
          <h4>Just before you go</h4>
          <form>
            <Input inputtype='select_time' id="time" onChange={this.props.timeChangeHandler}  type="text" name="time" placeholder="How long"></Input>
            <Input inputtype='select_keto' id="keto" onChange={this.props.ketoChangeHandler} type="text" name="keto" placeholder="Keto friendly?"/>
            <Input inputtype='select_difficulty' id="difficulty" onChange={this.props.difficultyChangeHandler} type="text" name="difficulty" placeholder="How difficult"/>
          </form>
          <div style={{paddingTop: '20px'}}></div>
          <button className='AddFormSubmit' onClick={this.props.clicked} value='Submit'>   Submit a recipe!</button>
        </div>
      </Animated>
      </Aux>
    )
  }
}

export default Modal