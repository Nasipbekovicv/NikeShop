import { Link, Outlet } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
// import { Input } from "antd";

import KidsMenu from "./KidsMenu";
import MensMenu from "./MensMenu";
import WomensMenu from "./WomensMenu";
import SaleMenus from "./SaleMenus";
import Search from "../search/Search";

import {MdOutlineLocationOn} from 'react-icons/md'

const Layout = () => {
   // const onSearch = value => console.log(value);
   // const { Search } = Input;

   return (
      <div className="">
         <div>
            <header className="headerControl">
               <div> 
                  <div className="container">
                     <div className="headerFixed">
                        <div className="Logo">
                           <Link to="/"><svg
                              aria-hidden="true"
                              className="pre-logo-svg"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="100px"
                              height="100px"
                              fill="none">
                              <path
                                 style={{ color: 'black' }}
                                 fill="currentColor"
                                 fillRule="evenodd"
                                 d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                                 clipRule="evenodd"></path>
                           </svg>
                           </Link>
                        </div>
                        <div className="link">
                           <ul className="controlLink">
                              <li>
                                 <Link to='/mens'><MensMenu /></Link>
                              </li>
                              <li>
                                 <Link><WomensMenu /></Link>
                              </li>
                              <li>
                                 <Link>
                                    <KidsMenu />
                                 </Link>
                              </li>
                              <li>
                                 <Link><SaleMenus /></Link>
                              </li>
                              <li>
                                 <Link to='/addCome'>
                                    <BiShoppingBag style={{ fontSize: 24 }} />
                                 </Link>
                              </li>
                              <div>
                                 {/* <Search
                                    placeholder="input search text"
                                    allowClear
                                    enterButton="Search"
                                    size="middle"
                                    onSearch={onSearch}
                                 /> */}
                                 <Search/>
                              </div>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <main>
               <div className="container">
                  <Outlet />
               </div>
            </main>
            <footer>
               <div className="container">
                  <div className="footer">
                     <div className="footerControl">
                        <div style={{display: 'flex', columnGap: '350px'}}>
                           <div> <h4>About</h4> </div>
                           <div><h4>Get Help</h4></div>
                           <div><h4>About Nike</h4></div>
                        </div>
                        <div>
                           <MdOutlineLocationOn/>
                           <span>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</span>
                        </div>
                     </div>
                  
                  </div>
               </div></footer>
         </div>
      </div>
   );
};

export default Layout;
