import React from "react";
import cart from '../images/shopping-cart.svg'
import apple from '../images/apple.png'

import { Outlet,Link} from "react-router-dom";
import { useState } from "react";

function Navbar() {

  

    const [active,setActive] = useState('links')
    const navToggle = ()=>{
        active === 'links'? setActive("links show-links"): setActive('links')
    }

    return ( 
        <>
            <nav>
                <div className="nav-center">
                    {/* <!-- nav header --> */}
                    
                    <div className="nav-header">
                        
                        <img src={apple} alt="icon" className="icon"/>
                        <div className="cart">

                            <img src={cart} alt="cart" style={{ width: '26px', marginLeft: '3rem' }} />

                            <h5>3</h5>
                        </div>
                        <button type="button" onClick={navToggle} className="btn nav-toggle">
                            <i className= "fas fa-bars"> </i>
                        </button>
                        
                    </div>
                    {/* <!-- links --> */}
                    <ul className={active}>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        
                        <li>
                            <Link to="/login">Log in</Link>

                        </li>
                        <li>
                            <Link to="/sigin">sign in</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                        
                    </ul>
                    {/* <!-- social media --> */}
                    <ul className="social-icons">
                        
                        <li>
                            <Link href="https://www.twitter.com">
                                <i className="fab fa-facebook"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.twitter.com">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.twitter.com">
                                <i className="fab fa-behance"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.twitter.com">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.twitter.com">
                                <i className="fab fa-sketch"></i>
                            </Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
            <Outlet/>
            
            </>
     );
}

export default Navbar;