import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';

function Nav({search ,setSearch, searchProduct}) {

     const { loginWithRedirect , logout, user, isAuthenticated} = useAuth0();
  return (
    <NavSection>
    <div className="header">
            <div className="top_header">
            <div className="icon">
            <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="info">
                <p>Free  Shipping when shoping upto $10000</p>
            </div>
        </div>
        <div className="mid_header">
              <div className="logo">
                <img src="./public/logoimg.jpg" alt="logo" />
            </div>
            <div className="search_box">
                <input type="text" value={search} placeholder='search' onChange={(e)=> setSearch(e.target.value)}/>
                <button onClick={searchProduct} ><i class="fa-solid fa-magnifying-glass"></i> </button>
            </div>
        
             {
               isAuthenticated ? 
            //    logout btn
               <div className="user">
                <div className="icon">
                <i class="fa-solid fa-right-to-bracket"></i>
                </div>
                <div className="btn">
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
            :
            //    login btn
       <div className="user">
            <div className="icon">
            <i class="fa-solid fa-right-to-bracket"></i>
            </div>
            <div className="btn">
                <button onClick={() => loginWithRedirect()}> Login </button>
            </div>
        </div>
             }  
        </div>

        <div className="last_header">
            <div className="user_profile">
                {
                    // user profile show here
                    isAuthenticated ?  
                    <>
                    <div className="icon">
                    <i class="fa-solid fa-user"></i>
                    </div>
                    <div className="info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    </div>
                    </>
                    :
                    <>
                    <div className="icon">
                    <i class="fa-solid fa-user"></i>
                    </div>
                    <div className="info">
                        <p>please login</p>
                    </div>
                    </>
                }
            </div>

            <div className="nav">
                <ul>
                        <li><NavLink to="" className="link">Home</NavLink></li>
                        <li><NavLink to="/shop" className="link">Shop</NavLink></li>
                        <li><NavLink to="/cart" className="link">Collection</NavLink></li>
                        <li><NavLink to="/shop" className="link">About</NavLink></li>
                        <li><NavLink to="/contact" className="link">Contact</NavLink></li>
                </ul>
            </div>
            <div className="offer">
                <p>flat 10% over all iphone</p>
            </div>
        </div>
    </div>
    </NavSection>
  )
}

export default Nav


 const NavSection = styled.div`
.header{
    width:100%;
}
.header .top_header{
    max-width: 100%;
    display: flex;
    align-items:center;
    padding: 10px 10px;
    background-color: #f6f7f8;
}
.header .top_header .icon{
    margin-left: 20px;
    color: #000;
    font-size:19px;
}
.header .top_header .info p{
 margin-left: 10px;
 color:#8a8a8a;
}
.mid_header{
    display:flex;
    padding:20px 40px;
    max-width:100%;
    align-items:center;
    justify-content:space-between;
}
.logo img{
    width:75px;
    height:100px;
    object-fit: cover;
    cursor:pointer;
}
.search_box input{
    padding:10px 10px;
    outline: none;
    background: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width:250px;
    border:none;
    background-color: #f6f7f8;
}
.search_box button{
    padding: 10px 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border:none;
    outline:none;
    border:1px solid #cd1e76;
    width:50px;
    background: #cd1e76;
    color:#fff;
    cursor:pointer;
    transition: 0.5s;
    font-weight:600;
}
.search_box button:hover{
    background-color: #fed700;
    border:1px solid #fed700;
    color:#cd1e76;
}
.user{
    display: flex;
    margin-right: 30px;
}
.user .icon{
    margin-right: 10px;
}
.user .btn button{
    border:none;
    outline:none;
    font-size:16px;
    background:none;
    cursor: pointer;
}
.last_header{
    width:100%;
    padding:10px 10px;
    display:flex;
    background-color: #232323;
    justify-content: space-between;
}
.last_header .user_profile{
    display:flex;
    margin-top:10px;
    align-items: center;
}
.last_header .user_profile .icon{
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 50%;
}
.last_header .user_profile .info{
    margin-left:10px;
}
.last_header .user_profile .info h2{
    color:#fff;
    font-size: 18px;
}
.last_header .user_profile .info p{
    color:#ababab;
    font-size: 14px;
}
.last_header .nav{
    margin-top:10px ;

}
.last_header .nav ul{
    display: flex;
    margin-top:5px;
}
.last_header .nav ul li{
    list-style-type: none;
}
.last_header .nav ul li .link{
    margin-right:20px;
    text-decoration: none;
    color:#fff;
    font-weight:600;
    transition: 0.5s;
}
.last_header .nav ul li .link:hover{
    color:#fed700;
}
.last_header .offer{
    margin-right: 20px;
    padding: 10px 20px;
    background: #fed700;
    border-radius: 10px;
}
.last_header .offer p{
    margin-top:7px;
    text-transform: uppercase;
    color:#232323;
    font-size:14px;
    font-weight: 600;
}


`