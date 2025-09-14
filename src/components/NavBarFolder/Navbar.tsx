import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./searchBar";
import CartButton from "./CartButton";
import AccountButton from "./AccountButton";

function Navbar(){
    return(
        <header className="nav" role="banner">
            <div className="nav-inner">
                <Logo />
                <NavLinks />
                <div className="search-cart">
                    <SearchBar />
                    <CartButton />
                    <AccountButton />
                </div>
            </div>
        </header>
    );
}

export default Navbar;