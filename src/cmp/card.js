import React , {useState , useEffect} from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/index'
import { addQuantity } from '../redux';
import Popup from "./Popup";
import Api from "../Api";


function Card(props) {
    const [popupState, setPopupState] = useState(false);
    const [messageGreenState, setMessageGreenState] = useState("");
    const userData = useSelector(state => state.product.product)
    const dispatch = useDispatch()
    var cart = (id) => {
        setPopupState(true);
        setMessageGreenState("Successfully add to cart");
        let cartBlank=true;
        userData.forEach((product) => {
            if(product.ID === id){
                cartBlank=false;
                let data={
                    QUANTITY: product.QUANTITY + 1,
                    PRODUCT_ID:id
                }
                Api.postQuantity(data).then(() => {
                    dispatch(addQuantity(id))    
                })    
            }
        })
        if(cartBlank){
            const data = {
                QUANTITY: 1,
                PRODUCT_ID: id
            };
            Api.postCart(data).then((response) => {
                dispatch(fetchProduct(id)) 
            }); 
        }
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
            {popupState?<Popup color="success" message={messageGreenState} />:null}
        </div>
    )
}
                   
export default Card
