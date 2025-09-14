import { useState } from "react";

function NavLinks(){

    const [isOpen , setIsopen] = useState(false);

    return(
        <nav className="nav-links" aria-label="main navigation">
           
           <div className="dropdown" onMouseEnter={()=>setIsopen(true)}
           onMouseLeave={()=>setIsopen(false)}>

            <a href="#" className="link">Shop ▾</a>

            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                    <a href="#">Accessor</a>
                </div>
            )}


           </div>



            <a href="#" className="link">On Sale</a>
            <a href="#" className="link">New Arrivals</a>
            <a href="#" className="link">Brands</a>
        </nav>
    );
}

export default NavLinks;