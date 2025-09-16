import CartIcon from "../../assets/NavBarImages/shopping-cart.png";
import {Link} from "react-router-dom";

function CartButton(){
    return(
        <Link to="/Cart" className="icon-btn" aria-label="cart">
            <img src={CartIcon} alt="shop-cart" />
        </Link>
    );
}

export default CartButton;