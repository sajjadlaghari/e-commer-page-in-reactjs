import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
         <div class="banner_bg_main">
         {/* <!-- header top section start --> */}
         <div class="container">
            <div class="header_section_top">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="custom_menu">
                        <ul>
                           <li><Link to="#">Best Sellers</Link></li>
                           <li><Link to="#">Gift Ideas</Link></li>
                           <li><Link to="#">New Releases</Link></li>
                           <li><Link to="#">Today's Deals</Link></li>
                           <li><Link to="#">Customer Service</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- header top section start -->
         <!-- logo section start --> */}
         <div class="logo_section">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="logo"><Link to="/"><img src="images/footerlogo.png" style={{ height:'200px' }} /></Link></div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- logo section end -->
         <!-- header section start --> */}
         <div class="header_section">
            <div class="container">
               <div class="containt_main">
                  <div id="mySidenav" class="sidenav">
                     <Link to="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</Link>
                     <Link to="index.html">Home</Link>
                     <Link to="fashion.html">Fashion</Link>
                     <Link to="electronic.html">Electronic</Link>
                     <Link to="jewellery.html">Jewellery</Link>
                  </div>
                  <span class="toggle_icon" onclick="openNav()"><img src="images/toggle-icon.png" /></span>
                  <div class="dropdown">
                     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                     </button>
                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link class="dropdown-item" to="#">Action</Link>
                        <Link class="dropdown-item" to="#">Another action</Link>
                        <Link class="dropdown-item" to="#">Something else here</Link>
                     </div>
                  </div>
                  <div class="main">
                     {/* <!-- Another variation with a button --> */}
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search this blog" />
                        <div class="input-group-append">
                           <button class="btn btn-secondary" type="button" style={{ backgrounColor: "#f26522", borderColor:"#f26522" }}>
                           <i class="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="header_box">
                     <div class="lang_box ">
                        <Link to="#" title="Language" class="nav-link" data-toggle="dropdown" aria-expanded="true">
                        <img src="images/flag-uk.png"  alt="flag" class="mr-2 " title="United Kingdom" /> English <i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
                        </Link>
                        <div class="dropdown-menu ">
                           <Link to="#" class="dropdown-item">
                           <img src="images/flag-france.png"  class="mr-2" alt="flag" />
                           French
                           </Link>
                        </div>
                     </div>
                     <div class="login_menu">
                        <ul>
                           <li><Link to="#">
                              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span></Link>
                           </li>
                           <li><Link to="#">
                              <i class="fa fa-user" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span></Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- header section end -->
         <!-- banner section start --> */}
         <div class="banner_section layout_padding">
            <div class="container">
               <div id="my_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                              <div class="buynow_bt"><Link to="#">Buy Now</Link></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                              <div class="buynow_bt"><Link to="#">Buy Now</Link></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br />Your favriot shoping</h1>
                              <div class="buynow_bt"><Link to="#">Buy Now</Link></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
         {/* <!-- banner section end --> */}
      </div>
        
        </>
    )
}

export default Header;