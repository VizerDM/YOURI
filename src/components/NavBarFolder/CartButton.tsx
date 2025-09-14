import CartIcon from "../../assets/NavBarImages/shopping-cart.png";

function CartButton(){
    return(
        <button className="icon-btn" aria-label="cart">
            <img src={CartIcon} alt="shop-cart" />
        </button>
    );
}

export default CartButton;