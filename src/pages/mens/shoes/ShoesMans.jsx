import Cards from "../../../components/cards/Cards";
import { useSelector } from "react-redux";

const ShoesMans = () => {
   const shoesMans = useSelector(state => state.mensShoes);

   return (
      <div className="controlCart">
         {shoesMans.map(el => (
            <Cards key={el.id} productsId={el.id} items={el} />
         ))}
      </div>
   );
};

export default ShoesMans;
