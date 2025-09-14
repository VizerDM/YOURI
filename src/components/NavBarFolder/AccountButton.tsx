import UserIcon from "../../assets/NavBarImages/circle-user.png";

function AccountButton(){
    return(
        <button className="icon-btn" aria-label="cart">
            <img src={UserIcon} alt="setting icon" />
        </button>
    );
}
export default AccountButton;