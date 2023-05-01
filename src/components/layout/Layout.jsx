import { Link, Outlet } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { Input } from "antd";
const { Search } = Input;

const Layout = () => {
   const onSearch = value => console.log(value);
   return (
      <div className="container">
         <div>
            <header className="headerControl">
               <div className="Logo">
                  <svg
                     aria-hidden="true"
                     className="pre-logo-svg"
                     focusable="false"
                     viewBox="0 0 24 24"
                     role="img"
                     width="100px"
                     height="100px"
                     fill="none">
                     <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                        clipRule="evenodd"></path>
                  </svg>
               </div>
               <div>
                  <ul className="controlLink">
                     <li>
                        <Link>Mens</Link>
                     </li>
                     <li>
                        <Link>Womens</Link>
                     </li>
                     <li>
                        <Link>Kids</Link>
                     </li>
                     <li>
                        <Link>
                           <BsCartCheck />
                        </Link>
                     </li>
                     <div>
                        <Search
                           placeholder="input search text"
                           allowClear
                           enterButton="Search"
                           size="middle"
                           onSearch={onSearch}
                        />
                     </div>
                  </ul>
               </div>
            </header>
            <hr />
            <main>
               <Outlet />
            </main>
            <footer>{new Date().getFullYear()}</footer>
         </div>
      </div>
   );
};

export default Layout;
