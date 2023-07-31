import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagDash } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import './Header.css'



const Header = () => {
    return (
        <><div className='free'>
            <div className='icons'>
                <FaTruckMoving />
            </div>
            <p>Free Shipping When shopping upto $1000</p>
        </div>
            { /*-----Header-------------------------*/}
            <div className='main'>
                <div className='container'>
                    <div className='logo'>
                        <img src='./img/logo.svg'></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value='' placeholder='Enter The Product Name...' autoComplete='off' ></input>
                        <button>Search</button>
                    </div>
                    <div className='icon'>
                        <div className='account'>
                            <div user_icons>
                                <BiUser />
                            </div>
                            <p>Hello, User</p>
                        </div>
                        <AiOutlineHeart />
                        <BsBagDash />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header