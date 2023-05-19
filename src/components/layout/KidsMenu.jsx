import { Link } from "react-router-dom";
import { cloneElement } from "react";
import { Divider, Dropdown, Space, theme } from "antd";


const items = [
   {
      key: "1",
      label: (
         <Link to='/shoesKids'>
            Shoes
         </Link>
      )
   },
   {
      key: "2",
      label: (
         <Link>
            Clothing
         </Link>
      )
   },
   {
      key: "3",
      label: (
         <Link>
            New Arrivals
         </Link>
      )
   },
   {
      key: "4",
      label: (
         <Link>
            Gear & Accessories
         </Link>
      )
   },
   
];


const KidsMenu = () => {
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
                  <Space style={{fontSize: 18 , fontWeight: 400, }}>Kids</Space>
            </Dropdown>
   );
};

export default KidsMenu;
