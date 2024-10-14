import React, { useContext } from "react";
import ReactDOM from "react-dom";
import './CartModal.css';
import CartContext from "../../store/cart-context";

function CartModal({ onClose }) {
  const ctx = useContext(CartContext);

  const addItemHandler=(item)=>{
      ctx.addItem({
        id:item.id,
        dishName:item.dishName,
        price:item.price,
        quantity:1
      })
  }

  const removeItemHandler=(id)=>{
    ctx.removeItem(id)
  }

  if (!ctx.items || ctx.items.length === 0) {
    return ReactDOM.createPortal(
      <div>
        <div className="modalstyle" onClick={onClose}></div>
        <div className="modalContentStyles">
          <center><p style={{ top: "50%" }}>No Item In The Cart. Add Item In The Cart.</p></center>
          <div className="button-container" style={{ marginBottom: '2px', marginRight: '10px' }}>
            <button className="action-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return ReactDOM.createPortal(
    <div>
      <div className="modalstyle" onClick={onClose}></div>
      <div className="modalContentStyles">
        {ctx.items.map((item) => (
          <div key={item.id} className="container-cartitem">
            <div className="cartitem-list">
              <p style={{ fontWeight: "bold", color: "blueviolet" }}>{item.dishName}</p>
              <p style={{ fontStyle: "italic", color: "brown" }}>
                ${item.price}
                <span style={{ float: "right", color: "black" }}>x{item.quantity}</span>
              </p>
            </div>
            <div className="qyantity-button">
              <button
                className="action-qyantity-button"
                onClick={() => removeItemHandler(item.id)}>-</button>
              <button
                className="action-qyantity-button"
                onClick={() => addItemHandler(item)}>+</button>
              
            </div>
          </div>
        ))}

        <h4>Total Amount <span style={{ float: 'right' }}>${ctx.totalAmount.toFixed(2)}</span></h4>
        <div className="button-container">
          <button className="action-button" onClick={onClose}>Close</button>
          <button className="action-button">Order</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CartModal;
