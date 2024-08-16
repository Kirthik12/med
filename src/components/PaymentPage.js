import React from 'react';
import './PaymentPage.css';
import UserNavbar from './UserNavbar';
const PaymentPage = ({ cart = [] }) => {
  // Calculate total amount from the cart
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing logic here
    console.log('Payment submitted');
  };

  return (

    <div className="payment-page">
        <UserNavbar/>
       <div>
      <div className="payment-container">
        <h1>Payment Details</h1>
        <form onSubmit={handleSubmit}>
          {/* Payment Information Section */}
          <div className="form-section">
            <h2>Payment Information</h2>
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
           
           
          </div>

          {/* Personal Details Section */}
          <div className="form-section">
            <h2>Personal Details</h2>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="+1234567890"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your delivery address"
                required
              ></textarea>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="form-section">
            <h2>Payment Method</h2>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  defaultChecked
                />
                Credit/Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                />
                Cash On Delivery
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="netBanking"
                />
                Net Banking
              </label>
            </div>
          </div>

          <button type="submit" className="payment-button">Order Now</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PaymentPage;
