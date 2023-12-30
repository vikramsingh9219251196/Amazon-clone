import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import logo from '../Header/header_img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RoomIcon from '@mui/icons-material/Room';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import { auth } from '../../components/firebase';
const Header = () => {
    const [{basket,user}]=useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <>
            <nav className='Header'>
                <div className='headerTop'>
                    <div className='nav_left'>
                        <MenuIcon className=' border menu_bar'/>
                    </div>
                    <Link to="/"
                        style={
                            {
                                marginLeft: "1rem",
                                marginTop: "1rem",
                                marginRight: "1rem"
                            }
                    }>
                        <img className="border logo"
                            src={logo}
                            alt="logo"/>
                    </Link>

                    <div className='search_box border1'>
                        <select id="category">
                            <option value="All" selected>All
                            </option>
                            <option value="Home & Kitchen">Home & Kitchen</option>
                            <option value="Computers">Computers</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Books">Books</option>
                            <option value="Sports">Sports</option>
                        </select>
                        <input type="search" className='input'/>
                        <SearchIcon className='search_icon'/>
                    </div>
                    <div className='nav_right'>
                        <Link to={!user && '/login'} className='boxes border'>
                            <div onClick={handleAuthentication} className='header_options'>
                                <span className='option_one'>Hello {!user?"User":user.email}</span>
                                <span  className='option_second'>{user?'Sign Out':'Sign In'}</span>
                            </div>
                        </Link>
                       
                        <Link to="/orders" className='boxes border'>
                            <div className='header_options'>
                                <span  className='option_one'>Return</span>
                                <span className='option_second'>&Orders</span>
                            </div>
                        </Link>
                        <Link to="https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011" className='boxes border'>
                            <div className='header_options'>
                                <span className='option_one'>Try</span>
                                <span className='option_second'>Prime</span>
                            </div>
                        </Link>
                        <Link to="https://www.linkedin.com/in/vikram-singh-508b08250/" className='boxes border'>
                            <div className='header_options'>
                                <span className='option_one'>Linkedin</span>
                                <span className='option_second'>Profile</span>
                            </div>
                        </Link>
                        <Link to="/checkout" className='boxes border'>
                            <div className='basket'>
                                <ShoppingBasketIcon className='basket'/>
                                <span className='basket_count'>{basket?.length}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='headerBottom'>
                    <RoomIcon className='map border'/>
                    <div className='location border'
                        style={
                            {cursor: "pointer"}
                    }>
                        <span className='option_one'>Deliver to</span>
                        <span className='option_second'>india</span>
                    </div>
                    <div className='options'>
                        <span>
                            <Link to="">
                                <span className='option_one border'>All Products</span>
                            </Link>
                        </span>
                        <span>
                            <Link to="">
                                <span className='option_one border'>Books</span>
                            </Link>
                        </span>
                        <span>
                            <Link to="">
                                <span className='option_one border'>Mobiles</span>
                            </Link>
                        </span>
                        <span>
                            <Link to="">
                                <span className='option_one border'>Electronics</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
