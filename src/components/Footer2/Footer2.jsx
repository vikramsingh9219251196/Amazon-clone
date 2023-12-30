import React from 'react'
import './Footer2.css'
import {GrLanguage, GrWheelchairActive} from 'react-icons/gr'
import logo from '../Home/assets/logo.png'
const Footer2 = () => {
    const handleTop=()=>{
        window.scrollTo(0,0);
    }
    return (
        <div className='footer2'>
            <div className='footer2_container'>
                <h3 onClick={handleTop} style={{cursor:"pointer"}}>Back to top</h3>
                <div className='services_container'>
                    <div className='services_content'>
                        <div id ="service1"className='services1'>
                            <h4 className='sh1'>Get to Know Us</h4>
                            <ul>
                                <li><a className='know_us' href="#">Careers</a></li>
                                <li><a className='know_us' href="#">Blog</a></li>
                                <li><a className='know_us' href="#">About Amazon</a></li>
                                <li><a className='know_us' href="#">Investor Relations</a></li>
                                <li><a className='know_us' href="#">Amazon Devices</a></li>
                                <li><a className='know_us' href="#">Amazon Science</a></li>
                            </ul>
                        </div>
                        <div className='services1'>
                            <h4 className='sh1'>Make Money with Us</h4>
                            <ul>
                                <li><a className='know_us' href="#">Sell products on Amazon</a></li>
                                <li><a className='know_us' href="#">Sell on Amazon Business</a></li>
                                <li><a className='know_us' href="#">Sell apps on Amazon</a></li>
                                <li><a className='know_us' href="#">Become an Affiliate</a></li>
                                <li><a className='know_us' href="#">Self-Publish with Us</a></li>
                                <li><a className='know_us' href="#">Host an Amazon Hub</a></li>
                                <li><a className='know_us' href="#">See More Make Money with Us</a></li>
                            </ul>
                        </div>

                        <div className='services3'>
                            <h4 className='sh1'>Amazon Payment Products</h4>
                            <ul>
                                <li><a className='know_us' href="#">Amazon Business Card</a></li>
                                <li><a className='know_us' href="#">Shop with Points</a></li>
                                <li><a className='know_us' href="#">Reload Your Balance</a></li>
                                <li><a className='know_us' href="#">Investor Relations</a></li>
                                <li><a className='know_us' href="#">Amazon Currency Converter</a></li>

                            </ul>
                        </div>
                        <div className='services1'>
                            <h4 className='sh1'>Let Us Help You</h4>
                            <ul>
                                <li><a className='know_us' href="#">Amazon and COVID-19</a></li>
                                <li><a className='know_us' href="#">Your Account</a></li>
                                <li><a className='know_us' href="#">Your Orders</a></li>
                                <li><a className='know_us' href="#">Shipping Rates & Policies</a></li>
                                <li><a className='know_us' href="#">Returns & Replacements</a></li>
                                <li><a className='know_us' href="#">Manage Your Content and Devices</a></li>
                                <li><a className='know_us' href="#">Amazon Assistant</a></li>
                                <li><a className='know_us' href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>

{/* <hr className='line'/> */}
                </div>
                <div className='button'>
                    <img src={logo}
                        alt="logo"/>
                    <button className='sbtn1'><GrLanguage className='web'/>English</button>
                    <button className='sbtn2'>$USD-U.S.Dollar</button>
                    <button className='sbtn3'>United States</button>
                </div>

            </div>
        </div>
    )
}

export default Footer2
