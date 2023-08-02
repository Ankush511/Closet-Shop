import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Navbar.scss" ;

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className='item'>
                        <img src="/img/en.png" alt="" />
                        <ArrowDropDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <ArrowDropDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Kids</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/4">Accessories</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className='link' to='/'>CLOSET-SHOP</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className='link' to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
