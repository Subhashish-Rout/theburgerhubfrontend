import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"sgsdjsa 12-345ss dfj"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Subhashis"}
                </p>
                <p>
                    <b>Phone</b>
                    {"783473929"}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"23-02-2013"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"26-02-2013"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    #{"kjdsfsdklj"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"26-02-2013"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹{2134}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    ₹{24}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{21}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{2134+24+21}
                </p>
                
            </div>

            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Chesse Burger</h4>
                    <div>
                        <span>{12}</span> x <span>₹{320}</span>
                    </div>
                </div>
                <div>
                    <h4>Veg Chesse Burger</h4>
                    <div>
                        <span>{22}</span> x <span>₹{120}</span>
                    </div>
                </div>
                <div>
                    <h4>Burger Fries</h4>
                    <div>
                        <span>{20}</span> x <span>₹{420}</span>
                    </div>
                </div>
                <div>
                    <h4 style={{
                        fontWeight:800,
                    }}>Sub Total</h4>
                    <div>
                    <b> ₹{2132}</b>
                    </div>
                </div>
            </article>
        </main>
    </section>
  )
}

export default OrderDetails