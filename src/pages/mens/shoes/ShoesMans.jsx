import Cards from "../../../components/cards/Cards";
import { useSelector } from "react-redux";
import MensMenu from "../../../components/mensMenu/MensMenuHome";

const ShoesMans = () => {
   const shoesMans = useSelector(state => state.mensShoes);

   return (
      <div className="container">
         <div>
            <MensMenu/>
         </div>
      <div>
         <img style={{width:1440, transform: 'scale(1)',}}  src="https://imgnike-a.akamaihd.net/branding/masculino/assets/img/airmax-mlp-26-desk.png" alt="" />
      </div>
      <div>
         <h1 style={{padding: '20px 0 0 550px', fontSize: 110}}>Shoes</h1>
      </div>
      <div className="controlCart">
         {shoesMans.map(el => (
            <Cards key={el.id} productsId={el.id} items={el} />
         ))}
      </div>
      </div>
   );
};

export default ShoesMans;
