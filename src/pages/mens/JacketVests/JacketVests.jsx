import { useSelector } from "react-redux";
import Cards from "../../../components/cards/Cards";

const JacketVests = () => {
   const JacketVestsData = useSelector(state => state.JacketVest);
   const ret = JacketVestsData

   return (
      <div>
         {JacketVestsData.map(el => (
            <Cards key={el.id} productsId={el.id} items={el} />
         ))}
      </div>
   );
};

export default JacketVests;
