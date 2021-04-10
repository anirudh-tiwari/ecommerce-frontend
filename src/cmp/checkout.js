import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

const Checkout = () => {
  return (
    <div className="container checkout_card_border">
      <h5>Checkout form</h5>
      <div class="row">
        <div className="col-sm-8">
          <h6>Biling Address</h6>
          <div>
            <label for="firstname">First name</label> <br />
            <input type="text" id="firstname" />
          </div>
          <div className="checkout_lastname">
            <label for="lastname">Last name</label> <br />
            <input type="text" id="lastname" />
          </div>
          <div className="checkout_username ">
            <label for="username">Username</label> <br />
            <input type="text" id="username" className="input_text_expand" />
          </div>
          <div className="checkout_username">
            <label for="email">E-mail</label> <br />
            <input type="text" id="email" className="input_text_expand" />
          </div>
          <div className="checkout_username">
            <label for="address">Address</label> <br />
            <input type="text" id="address" className="input_text_expand" />
          </div>
          <div className="checkout_username">
            <label for="address">Address</label> <br />
            <input type="text" id="address" className="input_text_expand" />
          </div>
          <div className="checkout_username">
            <label for="country">Country </label>
            <br />
            <select class="select">
              <option value="india">INDIA</option>
              <option value="usa">USA</option>
              <option value="africa">AFRICA</option>
              <option value="japan">JAPAN</option>
            </select>
          </div>
          <div className="checkout_username checkout_state">
            <label for="state">State </label>
            <br />
            <select class="select">
              <option value="delhi">DELHI</option>
              <option value="mumbai">MUMBAI</option>
              <option value="punjab">PUNJAB</option>
              <option value="up">UP</option>
            </select>
          </div>
          <div className="zipcode">
            <label for="zipcode">Zipcode</label> <br />
            <input type="text" id="zipcode" />
          </div>
          <div className="checkout_pyment">
            <h6>Payment</h6>
            <input type="radio" id="cod" />
            <label for="cod">Cash on delievery</label>
            <br />
            <input type="radio" id="debit" />
            <label for="debit">Debit Card</label>
            <br />
            <input type="radio" id="paytm" />
            <label for="paytm">Paytm</label>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block checkout_button"
          >
            Place Order
            </button>
        </div>
        <div className="col-sm-4 ">
          <h6>Your Order</h6>
          <div class="row container">
            <div class="col-sm-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhr3ufbveAtb-YupDZuDSI_dh3mDLt_wUNNA&usqp=CAU"
                alt="Avatar"
                className="checkout_card_image checkout_card_padding"
              />
            </div>
            <div class="col-sm-7 checkout_card_padding">
              <div class="checkout_card_padding">
                <p className="color">
                  <b>Simply printed T-shirt</b>
                </p>
                <h6>
                  <b>Mens</b>
                </h6>
              </div>
            </div>
            <div class="col-sm-2 checkout_card_padding">
              <div class=" checkout_card_padding">
                <h6>
                  <b>250Rs</b>
                </h6>
              </div>
            </div>
          </div>
          <div className="checkout_card_line"></div>
          <div className="checkout_card_total">
            <h5>Total</h5>
          </div>
          <div className="checkout_card_total_price">
            <h5>250.00 Rs</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

{/* <div className="checkout_card_border">
  <img
    className="checkout_card_image"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhr3ufbveAtb-YupDZuDSI_dh3mDLt_wUNNA&usqp=CAU"
    alt="Avatar"
  />
  <div className="checkout_card_description">
    <h6 className="color">
      <b>Simply printed T-shirt</b>
    </h6>
    <h6>
      <b>Mens</b>
    </h6>
  </div>
  <div className="checkout_card_price">
    <h6>
      <b>250Rs</b>
    </h6>
  </div>
</div>; */}
