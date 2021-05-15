import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/index'
import { useHistory } from "react-router-dom";
import { addQuantity } from '../redux';
import { snackbarUIOpen } from '../redux';
import { snackbarUIClose } from '../redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function Card(props) {

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        dispatch(snackbarUIClose())        
      };
    
    const userData = useSelector(state => state.product.product)
    const snackbarDataOpen = useSelector(state => state.snackbar.open)
    const dispatch = useDispatch()
    var cart = (id) => {
           dispatch(snackbarUIOpen())
            userData.some(product => product.productId === id) ?
                dispatch(addQuantity(id)) : dispatch(fetchProduct(id))
        
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        // history.push({
        //     pathname: '/cart',
        // });
    }
    return (
        <div className="cards">
            <div className="card_image" style={{ backgroundImage: `url('${props.product.IMAGE}')` }}>
            </div>
            <div className="card_detail ">
                <h6 className="card_detail_size ">
                    <b>{props.product.NAME}</b>
                </h6>
                <h5 className="card_detail_size color ">
                    <b>{props.product.DESCRIPTION}</b>
                </h5>
                <h6 className=" card_detail_size">
                    Original Price{"  "}
                    <b className="decoration ">
                        {props.product.ORIGINAL_PRICE}
                    </b>
                </h6>
                <h6 className="card_detail_size ">
                    Discount Price {props.product.DISCOUNT_PRICE}
                </h6>
            </div>
            <div className="cardButton">
                <Link
                    className="grey_button"
                    to={{
                        pathname: '/cardview',
                        state: { productID: props.product.ID }
                    }}>
                    Viewss
                    </Link>
                <Link
                    className="greenButton"
                    onClick={() => cart(props.product.ID)}
                >
                    Buy
                    </Link>
            </div>
            <Snackbar open={snackbarDataOpen} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully add to cart
        </Alert>
      </Snackbar>
        </div>
    )
}
                   
export default Card
