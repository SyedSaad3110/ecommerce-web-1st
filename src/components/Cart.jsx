import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Cart({cart , setCart}) {
  // increase quantity.....
  const inqty =(product)=>{
         const exist = cart.find((x)=>{
          return x.id === product.id
         })
         setCart(cart.map((items)=>{
          return items.id === product.id ? {...exist, qty: exist.qty + 1} : items
         }))
  }
  // decrease quantity
  const deqty =(product)=>{
    const exist = cart.find((x)=>{
     return x.id === product.id
    })
    setCart(cart.map((items)=>{
     return items.id === product.id ? {...exist, qty: exist.qty - 1} : items
    }))
}
// remove product
const remove = (product)=>{
      const exist = cart.find((x)=>{
        return x.id === product.id
      })
      if(exist){
         setCart(cart.filter((items)=>{
           return  items.id !== product.id
         }))
      }
}
// total
const total = cart.reduce((price , items)=>
   price +  items.qty * items.price, 0
)
  return (
    <CartSection>
    <div className="cart">
    <h3>#Cart</h3>
      {
      cart.length === 0 && 
      <>
      <div className="empty_cart">
        <h2>Your Shoping cart is empty</h2>
      <NavLink to="/shop"><button>Shop Now</button></NavLink>
      </div>
      </>
    }
        <div className="container">
          {
            cart.map((items)=>{
               return(
                <>
                <div className="box">
                 <div className="img_box">
                  <img src={items.image} alt="" />
                 </div>
                 <div className="detail">
                  <div className="info">
                  <h4>{items.cat}</h4>
                  <h3>{items.Name}</h3>
                  <p>price : ${items.price}</p>
                  <p>price: ${items.price * items.qty}</p>
                  </div>
                  <div className="quantity">
                    <button onClick={()=> inqty(items)}>+</button>
                    <input  type="number" value={items.qty} />
                    <button onClick={()=> deqty(items)}>-</button>
                  </div>
                  <div className="icon">
                  <i onClick={()=> remove(items)} class="fa-solid fa-xmark"></i>
                  </div>
                 </div>
                </div>
                </>
               )
            })
          } 
        </div>
        <div className="bottom">
          {
            cart.length > 0 && 
            <>
            <div className="total">
              <h4>Sub Total: ${total}</h4>
            </div>
            </>
          }
        </div>
    </div>
    </CartSection>
  )
}

export default Cart

const CartSection = styled.section`
.cart{
    width:100%;
    padding:20px 30px;

}
.cart h3{
    font-size:32px;
    text-transform:uppercase;
    color:#232323;
    letter-spacing:1px;
    font-weight:300;
}
 .cart .empty_cart{
   width:100%;
}
.empty_cart h2{
    display:flex;
    justify-content: center;
    font-size:19px;
    text-transform:uppercase;
    color:#232323;
    letter-spacing:1px;
}
.empty_cart button{
  margin-left:45%;
  padding:10px 30px;
  margin-top:10px;
  color:#cd176c;
  background-color: #fed700;
  border:none;
  outline:none;
  border:1px solid #fed700;
  font-weight:600;
}
.cart .container{
  max-width:100%;
  padding: 10px 20px;
}
.cart .container .box{
  display:flex;
  width:100%;
  border:2px solid #f6f6f6;
  height:250px;
  margin-top:10px;
}
.cart .container .box .img_box img{
  width:260px;
  height:260px;
}
.detail{
  display: flex;
  width:100%;
  margin-top: 10px;
  margin-left:30px;
  padding:8px 8px;
  justify-content: space-evenly;
  align-items: center;
}
.detail .info{
  margin-top:20px;
  margin-left: 30px;
}
.detail .info h4{
  text-transform: uppercase;
  font-size: 14px;
  color:#8a8a8a;
}
.detail .info h3{
  margin-top:10px;
  color:#232323;
  font-size: 16px;
  text-transform:uppercase;
  letter-spacing: 1px;
  font-weight:600;
}
.detail .info p{
  margin-top: 10px;
  color:#232323;
  text-transform: uppercase;
}
.detail .quantity{
  margin-top: 40px;
  margin-left: 40px;
  display: flex;
}
.detail .quantity button{
  padding:10px 20px;
  border: none;
  outline: none;
  background-color: #fed700;
  font-weight:600;
  height:40px;
  font-size:16px;
  cursor:pointer;
}
.detail .quantity input{
  height:40px;
  padding: 10px 20px;
  border: none;
  outline: none;
  border:2px solid #fed700;
  color:#cd1e76;
  font-size:14px;
  font-weight:600;
  width:100px;
}
.icon{
  margin-top: 50px;
  margin-left:40px;
}
.icon i{
  background: #cd176c;
  padding:10px 20px;
  color: #fff;
  font-size:14px;
  font-weight: 600;
  cursor:pointer;
}
.bottom .total h4{
 color:#cd176c;
 font-size:18px;
 font-weight: 620;
 margin-left:22px;
 margin-top:14px;
 text-transform: uppercase;
}
`