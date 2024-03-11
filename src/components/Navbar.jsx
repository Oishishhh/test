import './Navbar.css';
import  Button  from './Button';

function Navbar () {
    return(
        <div className="Navbar">
            <div className='box'>
                <h3>Lorem, ipsum dolor.</h3>
                <h1 className='word'>Free Ecommerce</h1>
                <h1 className='word2'>Template for Webflow</h1>
                <Button className="box2"/>
            </div>
        </div>
    );
}


export default Navbar;