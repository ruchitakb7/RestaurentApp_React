import React, { useContext } from "react";
import ReactDOM from "react-dom";
import './CartModal.css';
import CartContext from "../../store/cart-context";

function CartModal({ onClose }) {
  const ctx = useContext(CartContext);

  return ReactDOM.createPortal(
    <div>
    
      <div className="modalstyle" onClick={onClose}></div>
      <div className="modalContentStyles">
      
        {ctx.items.length > 0 ? (
          <>
          
            {ctx.items.map((item) => (
              <div key={item.id}>
                <p>{item.dishName} <span style={{ float: "right" }}>x{item.quantity}</span></p>
              </div>
            ))}

  
            <h4>Total Amount <span style={{ float: 'right' }}>${ctx.totalAmount.toFixed(2)}</span></h4>

            <div className="button-container">
              <button className="action-button" onClick={onClose}>Close</button>
              <button className="action-button">Order</button>
            </div>
          </>
        ) : (
          <>
            <center><p style={{top:"50%"}}>No Item In The Cart. Add Item In The Cart. </p></center>
            <div className="button-container" style={{marginBottom:'2px',marginRight:'10px'}}>
              <button className="action-button"  onClick={onClose}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CartModal;
