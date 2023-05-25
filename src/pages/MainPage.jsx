import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
const MainPage = () => {

   const [data, setData] = useState([]);

   useEffect(() => {
      fetch('https://dummyjson.com/products')
         .then(response => response.json())
         .then(json => setData(json))
         .catch(error => console.error(error));
   }, []);


   console.log(JSON.stringify(data,null,2));




   return (
      <>
         {/* <!-- banner bg main start --> */}

         {/* <!-- banner bg main end -->
      <!-- fashion section start --> */}
         <div class="fashion_section">
            <div id="main_slider" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container">
                        <h1 class="fashion_taital">Latest Products</h1>
                        <div class="fashion_section_2">
                           <div class="row">
                              {data.products  && data.products.map((product) => (

                                 <div class="col-lg-4 col-sm-4" style={{ height:"550px" }}>
                                    <div class="box_main" style={{ height:"350px"  }}>
                                       <h4 class="shirt_text">{product.title}</h4>
                                       <p class="price_text">Price  <span style={{ color: "#262626" }}>$ {product.price}</span></p>
                                       <div class="tshirt_img" style={{ height:"300px" }}><img src={product.thumbnail} style={{ height: "300px", width: "400px" }} /></div>
                                       <div class="btn_main">
                                          <div class="buy_bt"><a href="#">Buy Now</a></div>
                                          <div class="seemore_bt"><a href="#">See More</a></div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                          
                             
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <h1 class="fashion_taital">Man & Woman Fashion</h1>
                        <div class="fashion_section_2">
                        <div class="row">
                              {data.products  && data.products.map((product) => (

                                 <div class="col-lg-4 col-sm-4" style={{ height:"550px" }}>
                                    <div class="box_main" style={{ height:"350px"  }}>
                                       <h4 class="shirt_text">{product.title}</h4>
                                       <p class="price_text">Price  <span style={{ color: "#262626" }}>$ {product.price}</span></p>
                                       <div class="tshirt_img" style={{ height:"300px" }}><img src={product.thumbnail} style={{ height: "300px", width: "400px" }} /></div>
                                       <div class="btn_main">
                                          <div class="buy_bt"><a href="#">Buy Now</a></div>
                                          <div class="seemore_bt"><a href="#">See More</a></div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                          
                             
                           </div>
                        </div>
                     </div>
                  </div>
                
               </div>
               <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
               </a>
               <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i class="fa fa-angle-right"></i>
               </a>
            </div>
         </div>
         {/* <!-- fashion section end -->
      <!-- electronic section start --> */}
         <div class="fashion_section">
            <div id="electronic_main_slider" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container">
                        <h1 class="fashion_taital">Featured Products</h1>
                        <div class="fashion_section_2">
                          <div class="row">
                              {data.products  && data.products.map((product) => (

                                 <div class="col-lg-4 col-sm-4" style={{ height:"550px" }}>
                                    <div class="box_main" style={{ height:"350px"  }}>
                                       <h4 class="shirt_text">{product.title}</h4>
                                       <p class="price_text">Price  <span style={{ color: "#262626" }}>$ {product.price}</span></p>
                                       <div class="tshirt_img" style={{ height:"300px" }}><img src={product.thumbnail} style={{ height: "300px", width: "400px" }} /></div>
                                       <div class="btn_main">
                                          <div class="buy_bt"><a href="#">Buy Now</a></div>
                                          <div class="seemore_bt"><a href="#">See More</a></div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                          
                             
                           </div>
                        </div>
                     </div>
                  </div>
               
               </div>
              
            </div>
         </div>
    

      </>
   )
}

export default MainPage;