import React from 'react'
import styled from 'styled-components'
// import { HomeProduct } from '../Data'
// import { useState } from 'react'

function Shop({shop,Filter,AllFilter,addToCart}){
//   const [shop , setShop] = useState(HomeProduct)
// // filter
// const Filter = (x)=>{
//   const cateFilter = HomeProduct.filter((items)=>{
//     return items.cat === x
//   })
//   setShop(cateFilter)
// }
// // all filter
// const AllFilter = ()=>{
//   setShop(HomeProduct)
// }
  return (
   <ShopSection>
   <div className="shop">
    <h2># shop</h2>
    <p>Home . Shop</p>
    <div className="container">
      <div className="left_box">
        <div className="category">
          <div className="header">
            <h3>All Categories</h3>
          </div>
          <div className="box">
            <ul>
              <li onClick={()=> AllFilter('')} ># ALL</li>
              <li onClick={()=> Filter('tv')}># tv</li>
              <li onClick={()=> Filter('laptop')}># laptop</li>
              <li onClick={()=> Filter("watch")}># watch</li>
              <li onClick={()=> Filter('speaker')}># speaker</li>
              <li onClick={()=> Filter('electronic')}># electronic</li>
              <li onClick={()=> Filter("headphone")}># headphone</li>
              <li onClick={()=> Filter('phone')}># phone</li>
              <li onClick={()=> Filter('electronics')}># electronics</li>
            </ul>
          </div>
        </div>
        <div className="banner">
          <div className="img_box">
            <img src="./public/banner1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="right_box">
        <div className="banner">
          <div className="img_box">
            <img src="./public/banner2.jpg" alt="" />
          </div>
        </div>
        <div className="product_box">
          <h2>Shop Product</h2>
          <div className="product_container">
            {
              shop.map((items)=>{
                return (
                  <>
                  <div className="box">
                    <div className="img_box">
                      <img src={items.image} alt="" />
                      <div className="icon">
                      <li><i class="fa-solid fa-heart"></i></li>
                      <li><i class="fa-solid fa-eye"></i></li>
                      </div>
                    </div>
                    <div className="detail">
                      <h3>{items.Name}</h3>
                      <p>${items.price}</p>
                      <button onClick={()=> addToCart(items)}>Add to Cart</button>
                    </div>
                 </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
   </div>
   
   </ShopSection>


  )
}

export default Shop

const ShopSection = styled.section`
  
.shop{
  width:100%;
  padding:20px 30px;

}
.shop h2{
  text-transform: uppercase;
  letter-spacing: 1px;
  color:#232323;
  font-size:32px;
  font-weight: 300;

}
.shop p{
  margin-top:5px;
  color:#8a8a8a;
  font-size:14px;
  font-weight:600;
}
.shop .container{
  max-width:100%;
  display:flex;
  justify-content: space-between;
  margin-top:20px;
}
.shop .contaner .left_box{
  width:25%;
}
.category{
  border:3px solid #f6f7f8;
  width:250px;
}
 .category .header{
  max-width:100%;
  padding: 10px 20px;
  background:#f6f7f8;

}
.category .header h3{
  font-size:16px;
  color:#232323;
  letter-spacing: 1px;
  text-transform:uppercase;
  text-align: center;
}
.category .box{
  margin-top:10px;
  width:100%;
  padding:10px 20px;
}
.category .box ul{
  max-width: 100%;
}
.category .box ul li{
  list-style: none;
  margin-left:10px;
  text-transform:uppercase;
  margin-top:5px;
  font-size:14px;
  color:#8a8a8a;
  font-weight:600;
  letter-spacing:1px;
  cursor: pointer;
  transition:.5s;
}
.category .box ul li:hover{
  color:#232323;
}
.banner{
  margin-top:20px;
  width:250px;
}
.img_box img{
width:100%;
object-fit:cover;
}
.right_box{
  width: 75%;
}
.right_box .banner{
  max-width:100%;
}
.right_box .banner .img_box img{
  width:1000px;
  height:250px;
  object-fit:cover;
  margin-top:-18px;
}
.right_box .product_box{

  width:100%;
  padding:10px 10px;
}
.product_box h2{
  color:#8a8a8a;
  text-transform:uppercase;
  letter-spacing:1px ;
  font-size:22px;
  margin-top:10px;
}
.product_box  .product_container{
  max-width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content: space;
}
.product_box  .product_container .box{
  width:270px;
  height:370px;
  overflow: hidden;
  border:3px solid #f6f6f6;
  margin-left:15px;
  margin-top: 20px;
} .product_container .box .img_box{
  display:flex;
}
 .product_container .box .img_box img{
  width:100%;
  height:200px;
  margin-left:40px;
  object-fit: cover;
}
.product_container .box .img_box .icon{
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin-top:10px;
  margin-left:40px;
  transition: .5s;
}
.icon li{
  list-style: none;
  border: 2px solid #f6f6f6;
  box-shadow:rgba(0,0,0,0.24) 0px 3px 8px;
  padding:10px 10px;
  margin-top:10px;
  color:#8a8a8a;
  background-color: #fff;
  cursor:pointer;
  transition: .5s;
}
.product_container .box:hover .img_box .icon{
  margin-left:-28px
}
.icon li:hover{
  color: #fff;
  background-color: #cd1e76;
}
.detail h3{
  text-align:center;
  color:#232323;
  font-size: 16px;
  font-weight:1600;
  text-transform:capitalize;
  margin-top:15px;
}
.detail p{
  margin-top: 5px;
  text-align: center;
  color:#cd1e76;
  font-size:16px;
  margin-top:10px;
}
.detail button{
  margin-top:10px;
  margin-left: 30%;
  padding:10px 20px;
  border:none;
  outline:none;
  background: none;
  color:#232323;
  background:#fed700;
  font-weight:630;
  cursor:pointer;
}
`