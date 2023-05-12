import { Link } from "react-router-dom";

import { cloneElement } from "react";
// import { DownOutlined } from "@ant-design/icons";
import { Divider, Dropdown, Space, theme } from "antd";
const SaleMenus = () => {
   const { useToken } = theme;

   const items = [
      {
         key: "1",
         label: (
            <Link target="_blank" rel="noopener noreferrer" href="">
               Shoes
            </Link>
         )
      },
      {
         key: "2",
         label: (
            <Link target="_blank" rel="noopener noreferrer" href="">
               JacketVests
            </Link>
         )
      },
      {
         key: "3",
         label: (
            <Link target="_blank" rel="noopener noreferrer" href="">
               Performance
            </Link>
         )
      },
      {
         key: "4",
         label: (
            <Link target="_blank" rel="noopener noreferrer" href="">
               Hoodies && Sweatshirts
            </Link>
         )
      },
      {
         key: "5",
         label: (
            <Link target="_blank" rel="noopener noreferrer" href="">
               Shorts
            </Link>
         )
      }
   ];

   const { token } = useToken();
   const contentStyle = {
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      boxShadow: token.boxShadowSecondary
   };
   const menuStyle = {
      boxShadow: "none"
   };
   return (
      <div>
         <Link>
            <Dropdown
               menu={{
                  items
               }}
               dropdownRender={menu => (
                  <div style={{contentStyle, marginTop:20, boxShadow: "0px 0px 18px -5px rgba(0,0,0,0.25)"}}>
                     {cloneElement(menu, {
                        style: menuStyle
                     })}
                     <Divider
                        style={{
                           margin: 0
                        }}
                     />
                  </div>
               )}>
               <Link >
                  <Space>Sale</Space>
               </Link>
            </Dropdown>
         </Link>
      </div>
   );
};

export default SaleMenus;
