import './Top.css';
import { CiTwitter } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";



function Top () {
    return(
        <div className='Container2'>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <div className='icons'>
            <CiTwitter  className='icons2'/>
            <FaFacebookSquare className='icons2'/>
            <CiInstagram className='icons2'/>
            <FaYoutube className='icons2' />
            </div>
        </div>
    );
}


export default Top;