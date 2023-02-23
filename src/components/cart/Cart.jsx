import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assests/burger1.png";
import burger2 from "../../assests/burger2.png";
import burger3 from "../../assests/burger3.png";

const CartItem = ({ value, title, img, increment, decrement}) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  
  const[count1,setcount1] = useState(0);
  const[count2,setcount2] = useState(0);
  const[count3,setcount3] = useState(0);
  const[subTotal,setsubTotal] = useState(0);
  const[tax,setTax] = useState(0);
  const[shippingCh,setshippingCh] = useState(0);
  const[totalAmt,setTotalAmt] = useState(0);
  
  const increment = () => {
    setcount1(count1+1)
    setsubTotal(subTotal+200)
    setTax(subTotal*0.18)
    setshippingCh(subTotal*0.1)
    setTotalAmt(subTotal+tax+shippingCh)
  };

  const decrement = () => {
    if(count1!==0){
      setcount1(count1-1)
      setsubTotal(subTotal-200)
      setTax(subTotal*0.18)
      setshippingCh(subTotal*0.1)
      setTotalAmt(subTotal+tax+shippingCh)
    }
    
    
  };
  const increment2 = () => {
    setcount2(count2+1)
    setsubTotal(subTotal+500)
    setTax(subTotal*0.18)
    setshippingCh(subTotal*0.1)
    setTotalAmt(subTotal+tax+shippingCh)
  };

  const decrement2 = () => {
    if(count2 !== 0){
      setcount2(count2-1)
      setsubTotal(subTotal-500)
      setTax(subTotal*0.18)
      setshippingCh(subTotal*0.1)
      setTotalAmt(subTotal+tax+shippingCh)
    }
    
  };
  const increment3 = () => {
    setsubTotal(subTotal+1800)
    setcount3(count3+1)
    setTax(subTotal*0.18)
    setshippingCh(subTotal*0.1)
    setTotalAmt(subTotal+tax+shippingCh)
  };

  const decrement3 = () => {
    
    if(count3 !== 0) {
      setcount3(count3-1)
      setsubTotal(subTotal-1800)
      setTax(subTotal*0.18)
      setshippingCh(subTotal*0.1)
      setTotalAmt(subTotal+tax+shippingCh)
    }
    
  };

  return (
    <section className="cart">
      <main>
      <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={count1}
          increment={() => increment()}
          decrement={() => decrement()}
          

        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={count2}
          increment={() => increment2()}
          decrement={() => decrement2()}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={count3}
          increment={() => increment3()}
          decrement={() => decrement3()}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            {/* {subTotal = count1*200+count2*500+count3*1800 } */}
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            {/* {setTax(subTotal*0.18)} */}
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCh}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{totalAmt}</p>
          </div> 
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;