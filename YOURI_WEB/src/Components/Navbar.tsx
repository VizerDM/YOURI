

function Navbar(){
    return(
        <header className="nav" role="banner">
            <div className="nav-inner">
                <div className="logo">SHOP.CO</div>

                <nav className="nav-links" aria-label="main navigation">
                    <a href="#">Shop</a>
                    <a href="#">On Sale</a>
                    <a href="#">New Arrivals</a>
                    <a href="#">Brands</a>
                </nav>

                <div className="search-cart">
                    <div className="search" role="search">
                        <input aria-label="Search" placeholder="Search for products..." />
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Navbar;