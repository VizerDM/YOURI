import UserIcon from "../../assets/NavBarImages/circle-user.png";
import {Link} from "react-router-dom";

function AccountButton(){
    return(
        <Link to="/Profile"className="icon-btn" aria-label="cart">
            <img src={UserIcon} alt="setting icon" />
        </Link>
    );
}
export default AccountButton;