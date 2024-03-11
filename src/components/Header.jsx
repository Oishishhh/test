import './Header.css';
import { PiShoppingCartSimpleBold } from "react-icons/pi";


function Header () {
    return(
        <div className='Container'>
            <h1>ToyStore</h1>
            <ul>
                <li>Catalog</li>
                <li>Delivery</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='head'>
                <p><b>Cart</b></p>
        <PiShoppingCartSimpleBold className='icon' />
            </div>
        </div>
    );
}

export default Header;