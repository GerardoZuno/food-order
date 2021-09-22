import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = ({showCartHandler}) => {
      return  <div className={classes.backdrop} onClick={showCartHandler}> </div>
      
}
const ModalOverlay = props => {
      return <div className={classes.modal} >
                <div className={classes.content}>
                    {props.children}
                </div>
           </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {


    return (
        <>
        {ReactDOM.createPortal(<Backdrop showCartHandler={props.showCartHandler}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, portalElement)}


            
        </>
    )
}

export default Modal
