import { Link } from "react-router-dom";
import { Divider, Dropdown, Space, theme } from "antd";
import { cloneElement } from "react";
const MensMenu = () => {
   const { useToken } = theme;
   const { token } = useToken();


   const items = [
      {
         key: "1",
         label: (
            <Link to='/shoes-mens' >
               Shoes
            </Link>
         )
      },
      {
         key: "2",
         label: (
            <Link to='/jacket-vest'>
               JacketVests
            </Link>
         )
      },
      {
         key: "3",
         label: (
            <Link to='/hoodies-sweatshirts'>
               Hoodies && Sweatshirts
            </Link>
         )
      },
      {
         key: "4",
         label: (
            <Link to='/short-men'>
               Shorts
            </Link>
         )
      },
      {
         key: "5",
         label: (
            <Link to='/socks'>
               Socks
            </Link>
         )
      }
   ];

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
                           marginTop: 0
                        }}
                     />
                  </div>
               )}>
               <Link to='/mens'>
                  <Space>Mens</Space>
               </Link>
            </Dropdown>
   );
};

export default MensMenu;
