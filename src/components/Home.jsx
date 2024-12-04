import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeProduct } from '../Data'

function Home({addToCart}) {
    // roduct category
    const [ newProduct , setNewProduct] = useState(HomeProduct)
    const [ featureProduct , setFeatureProduct] = useState(HomeProduct)
    const [ topProduct , setTopProduct] = useState(HomeProduct)

    //  trending product 
    const [trendingProduct, setTrendingProduct] = useState(HomeProduct);
    // filter of tranding product
    const filterCate = (x)=>{
        const filterProduct = HomeProduct.filter((items)=>{
            return items.type === x
        })
        setTrendingProduct(filterProduct)
    }
    // alltrending product
    const allTrendingProduct = ()=>{
        setTrendingProduct(HomeProduct)
    }

    // product type
    useEffect(()=>{
        productCategory()
    })

    const productCategory = ()=>{
        // new product
         const newCategory = HomeProduct.filter((x)=>{
            return x.type === "new"
         })
         setNewProduct(newCategory)
        //  feature product
        const featureCategory = HomeProduct.filter((x)=>{
            return x.type === "feature"
         })
         setNewProduct(featureCategory)
         //  top product
        const topCategory = HomeProduct.filter((x)=>{
            return x.type === "top"
         })
         setNewProduct(topCategory)
    }
  return (
    <HomeSection>
    <div className="home">
        <div className="top_banner">
            <div className="content">
                <h3>Silver Aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your first order</p>
                <NavLink to="/shop" className="link">Shop Now</NavLink>
            </div>
        </div>

        <div className="trending">
            <div className="container">
                <div className="left_box">
                    <div className="header">
                        <div className="heading">
                            <h2 onClick={()=> allTrendingProduct()}>Trending Product</h2>
                        </div>
                        <div className="cate">
                            <h3 onClick={() => filterCate('new')}>New</h3>
                            <h3 onClick={() => filterCate('feature')}>Feature</h3>
                            <h3 onClick={() => filterCate('top')}>Top Selling</h3>
                        </div>
                    </div>

                    <div className="products">
                <div className="container">
                    {
                      trendingProduct.map((items)=>{
                       return (
                        <>
                        <div className="box">
                            <div className="img_box">
                             <img src={items.image} alt="img" />
                             <div className="icon">
                                <div className="icon_box">
                                <i class="fa-solid fa-eye"></i>
                                </div>
                                <div className="icon_box">
                                <i class="fa-solid fa-heart"></i>
                                </div>
                             </div>
                            </div>
                            <div className="info">
                                <h3>{items.Name}</h3>
                                <p>${items.price}</p>
                                <button className='btn' onClick={()=> addToCart(items)}>Add to cart</button>
                            </div>
                        </div>
                        </>
                       )
                      })

                    }
                </div>
                <button>Show More</button>
               </div>

                </div>
                <div className="right_box">
                  <div className="right_container">
                    <div className="testmonial">
                        <div className="head">
                            <h3>Our Testmonial</h3>
                        </div>
                        <div className="detail">
                            <div className="img_box">
                                <img src="./public/tesmoniaal1.jpg" alt="" />
                            </div>
                            <div className="info">
                                <h3>Stephan robot</h3>
                                <h4>Web Designer</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter">
                        <div className="head">
                            <h3>news letter</h3>
                        </div>
                        <div className="form">
                            <p>join our malling list</p>
                            <input type="email" placeholder='E-mail' autoComplete='off'/>
                            <button>Subscribe</button>
                            <div className="icon_box">
                            <div className="icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="icon">
                            <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className="icon">
                            <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className="icon">
                            <i class="fa-brands fa-youtube"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="product_type">
                    <div className="container">
                        <div className="box">
                        <div className="header">
                            <h2>New Product</h2>
                          </div>
                          {
                            newProduct.map((items)=>{
                              return(
                                <>
                                  <div className="productbox">
                                     <div className="img_box">
                                        <img src={items.image} alt="" />
                                     </div>
                                     <div className="details">
                                        <h3>{items.Name}</h3>
                                        <p>${items.price}</p>
                                        <div className="icon">
                                            <button><i class="fa-solid fa-eye"></i></button>
                                            <button><i class="fa-solid fa-heart"></i></button>
                                            <button  onClick={()=> addToCart(items)} ><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                     </div>
                                  </div>
                                </>
                              )
                            })
                          }
                        </div>

                        <div className="box">
                        <div className="header">
                            <h2>Feature Product</h2>
                          </div>
                          {
                            featureProduct.map((items)=>{
                              return(
                                <>
                                  <div className="productbox">
                                     <div className="img_box">
                                        <img src={items.image} alt="" />
                                     </div>
                                     <div className="details">
                                        <h3>{items.Name}</h3>
                                        <p>${items.price}</p>
                                        <div className="icon">
                                            <button><i class="fa-solid fa-eye"></i></button>
                                            <button> <i class="fa-solid fa-heart"></i></button>
                                            <button  onClick={()=> addToCart(items)} ><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                     </div>
                                  </div>
                                </>
                              )
                            })
                          }
                        </div>

                        <div className="box">
                        <div className="header">
                            <h2>Top Product</h2>
                          </div>
                          {
                            topProduct.map((items)=>{
                              return(
                                <>
                                  <div className="productbox">
                                     <div className="img_box">
                                        <img src={items.image} alt="" />
                                     </div>
                                     <div className="details">
                                        <h3>{items.Name}</h3>
                                        <p>${items.price}</p>
                                        <div className="icon">
                                            <button><i class="fa-solid fa-eye"></i></button>
                                            <button> <i class="fa-solid fa-heart"></i></button>
                                            <button><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
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
    
    
    </HomeSection>
  )
}

export default Home

const HomeSection = styled.section`
.home{
    width:100%;

}
.home .top_banner{
    max-width:100%;
    height:300px;
    background-image: url('https://img.pikbest.com/wp/202348/straps-elegant-golden-smartwatch-with-strap-on-a-white-background-created-3d-rendering_9781922.jpg!w700wp');
    background-repeat:no-repeat;
    background-size:cover;
    padding:50px 60px;
}
.home .top_baneer .content{
    width:100%;
    position:absolute;
    top:20%;
    padding:20px 50px;
}
 .content h3{
  text-transform:capitalize;
  color:#cd1e76;
  font-weight:300;
  letter-spacing:1px;
}
.content h2{
    text-transform: uppercase;
    color:#232323;
    letter-spacing: 1px;
    font-size:42px;
    margin-top:10px;
}
.content p{
    
    color:#ababab;
    letter-spacing: 1px;
    margin-top:8px;
    margin-bottom: 20px;
   
}
.content .link{
    padding:10px 30px;
    background:#fed700;
    color:#232323;
    text-decoration: none;
    border-radius:5px;
    transition: .5s;
}
.content .link:hover{
    color : #fed700;
    background:#cd1e76 ;
}
.trending{
    padding:20px 30px;
    width:100%;


}
.container{
    max-width:100%;
    display: flex;
}
.container .left_box{
    padding:10px 20px;
    width:75%;
}
.header{
    display:flex;
    max-width:100%;
    padding:10px 10px;
    background:#f6f7f8;
    justify-content: space-between;
}
.heading h2{
    text-transform: uppercase;
    font-size: 16px;
    color:#232323;
    margin-top:7px;
    cursor: pointer;
}
.cate{
    display:flex;
    margin-top:5px;
    cursor: pointer;
}
.cate h3{
    text-transform: capitalize;
    margin-right:10px;
    font-size:16px;
    cursor: pointer;
    color:#232323;
    transition: all.5s;
}
.cate h3:hover{
  color:#cd1e76;
}
.products{
    max-width:100%;

}
.products button{
    margin-left:45%;
    display:flex;
    flex-wrap:wrap;
    margin-top:25px;
    text-align:center;
    padding:10px 30px;
    background: none;
    border:none;
    outline:none;
    color:#fff;
    font-weight:600;
    background: #cd1e76;
    cursor:pointer;
    box-shadow: 2px 7px 5px rgba(0,0,0, 0.29);

}
.products .container{
    width:100%;
    display: flex;
    flex-wrap:wrap;
}
.products .container .box{
    width:195px;
    height:295px;
    padding:10px 10px;
    border:2px solid #f6f7f8;
    margin-top:20px;
    margin-left:20px;
    background:#f6f7f8;
    overflow:hidden;
    border-radius:5px;
}
.products .container .box:hover .img_box .icon{
    margin-left: -4%;
}
.products .container .box .img_box{
    display:flex;
}
.products .container .box .img_box img{
    width:140px;
    height:140px;
    object-fit: cover;
}
.products .container .box .img_box .icon{
    display:flex;
    flex-direction: column;
    margin-left:35%;
    margin-top:10px;
    transition: .5s;
}
.products .container .box .img_box .icon .icon_box{
   padding:10px 10px;
   margin-top:10px;
   box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
   z-index:1;
   background-color: #fff;
   color:#cd1e76;
}
.products .container .box .img_box .icon .icon_box:hover{
   color: #fff;
    background-color:#cd1e76;
}
.box .info{
    padding: 10px 10px;
    margin-left: 10px;
}
.info h3{
    text-transform: uppercase;
    font-size: 14px;
    color:#cd1e76;
    font-weight:350;
    letter-spacing:1px ;
}
.info p{
    margin-top:10px;
    font-size: 14px;
    color:#cd1e76;
    letter-spacing:1px ;
}
.info .btn{
    margin-top:10px;
    padding:10px 20px;
    align-items:center;
    margin-left:20px;
   border:none;
   outline:none;
   background:none;
   background:#fed700;
   color:#232323;
   text-transform: capitalize;
   border-radius:5px;
   cursor:pointer;
   transition: .5s;

}
.info .btn:hover{
    background:#cd1e76;
    color:#f6f7f8;
}
.right_box{
    padding:10px 20px;
    width:24%;
    display: flex;
    flex-direction: column;
}
.right_box .right_container{
    max-width:100%;

}
.right_box .right_container .testmonial{
    width:100%;
    border: 4px solid #f6f7f8;
}
.right_box .right_container .testmonial .head{
    padding:10px 10px;
    width:100%;
    background: #f6f7f8;
}
.right_box .right_container .testmonial .head h3{
    text-align: center;
    color:#232323;
    font-size:16px;
    text-transform: uppercase;
    margin-top:10x;
    letter-spacing: 1px;
}
.detail{
    padding:10px  20px;
}
.detail .img_box{
    margin-left:79px;

}
.detail .img_box img{
    height:130px;
    margin-top:30px;
    width:130px;
}
.detail .info{
    margin-top:10px;
}
.detail .info h3{
    text-align: center;
    text-transform:uppercase;
    font-size:14px;
    color: #232323;
}
.detail .info h4{
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
    color:#cd1e76;
    font-weight:300;
    text-transform: uppercase;
}
.detail .info p{
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    color:#232323;
    font-weight:600;
    margin-bottom:25px;

}
.newsletter{
    width:100%;
    background:#f6f7f8;
    margin-top: 20px;
    padding:10px 10px;
}
.newsletter .head{
    margin-top:10px;
    width:100%;
}
.newsletter .head h3{
    text-align: center;
    text-transform: uppercase;
    color:#232323;
    font-size:16px;
    letter-spacing: 1px;
    font-weight:630;
}
.form{
    margin-top:10px;
    width:100%;

}
.form p {
    text-align: center;
    text-transform: capitalize;
    color:#8a8a8a;
}
.form input{
    margin-top:10px;
    width:100%;
    padding:10px 10px;
    background:none;
    border:none;
    outline:none;
    border:1px solid #8a8a8a;
    color:#232323;
}
.form button{
    margin-top:10px;
   text-align: center;
   margin-left:110px;
   padding:10px 15px;
   border:none;
   background:none;
   outline:none;
   background-color: #fed700;
   color:#232323;
   font-weight: 600;
   font-size:15px;
   cursor:pointer;
   box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
}
.form .icon_box{
    margin-top:20px;
    width:100%;
    display:flex;
    justify-content: space-between;
}
.form .icon_box .icon{
    padding:10px 10px;
    border-radius:50%;
    border:1px solid #cd1e76;
    color:#cd1e76;
    margin-bottom:30px;
    cursor:pointer;
    transition:.5s;
}
.form .icon_box .icon:hover{
    color:#fff;
    background:#cd1e76;
}
.product_type{
    padding: 20px 20px;
    width:100%;
}
.product_type .container{
    display:flex;
    width:100%;
    justify-content: space-between;
}
 .product_type .container .box{
    width:400px;
    height:490px;
    border:3px solid #f6f7f8;
    overflow:hidden;
    overflow-y:auto;
}
.product_type .container .box .header{
    width:100%;
    height: 50px;
     padding:10px 10px;
     background:#f6f7f8;

}
.product_type .container .box .header h2{
    color:#232323;
    font-size:16px;
    font-weight:600;
    text-transform:uppercase;
} 
.product_type .container .box .productbox{
    width:100%;
    height:120px;
    padding-top:10px;
    padding-bottom:10px;
    border:1px solid #f6f7f8;
    display:flex;
    gap:12px;
}
.productbox .img_box img{
    width:120px;
    height:100px;
    object-fit:cover;
}
.product_type .container .box .productbox .details h3{
font-size:14px;
color:#8a8a8a;
text-transform:uppercase;
letter-spacing:1px;

}
.product_type .container .box .productbox .details p{
   margin-top:5px;
   color:#cd1e76;
   letter-spacing:1px;
   font-weight:600;
   font-size:14px;
}
.product_type .container .box .productbox .details .icon{
margin-top:10px;
display:flex;
}
.product_type .container .box .productbox .details button{
 background:none;
 border:none;
 outline:none;
 padding:10px 10px;
 border:2px solid #f6f7f8;
 margin-left:10px;
 cursor:pointer;
 color:#8a8a8a;
 border-radius:50%;
 transition:.5s;
}
.product_type .container .box .productbox .details button:hover{
 background:#f6f6f6;
color:#232323;
 }

`