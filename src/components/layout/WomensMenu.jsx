import { Link } from "react-router-dom";
import { cloneElement } from "react";
import { Divider, Dropdown, Space, theme } from "antd";


const items = [
   {
      key: "1",
      label: (
         <Link to='/shoes-womens'>
            Shoes
         </Link>
      )
   },
   {
      key: "2",
      label: (
         <Link to='/leggings'>
            Leggings
         </Link>
      )
   },
   {
      key: "3",
      label: (
         <Link to='/skirts-dresses'>
            Skirts & Dresses
         </Link>
      )
   },
   {
      key: "4",
      label: (
         <Link >
            Shorts
         </Link>
      )
   },
   {
      key: "5",
      label: (
         <Link to='/women-socks'>
            Shorts
         </Link>
      )
   }
];





const WomensMenu = () => {
   const { useToken } = theme;
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
                  <Space style={{fontSize: 18 , fontWeight: 400, }}>Womens</Space>
            </Dropdown>
   </div>
   );
};

export default WomensMenu;
