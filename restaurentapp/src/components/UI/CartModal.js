
import React, { useState } from "react";
import ReactDOM from "react-dom";
import './CartModal.css'

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div>
    <div className="modalstyle" onClick={onClose}></div>
      <div className="modalContentStyles">
        <p>Sushi</p>
        <h4>Total Amount <spam style={{float:'right'}} >$33.56</spam></h4>
        <div className="button-container">
           <button className="action-button" onClick={onClose}>Close</button>
           <button className="action-button">Order</button>    
        </div>
        </div>
    </div>,
    document.getElementById("modal-root") 
  );
}

function CartModal() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () =>{
    setIsModalOpen(false)
  } 
  return (
    <div >
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default CartModal;
