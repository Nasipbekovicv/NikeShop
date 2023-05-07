import { useSelector } from "react-redux";
import Cards from "../../../components/cards/Cards";
import '../../Cart.css'

const JacketVests = () => {
  const JacketVestsData = useSelector(state => state.JacketVest);

  return (
    <>
    <div>
      <h2>asko</h2>
    </div>
      <div className="controlCart">
        {JacketVestsData.map(el => (
          <Cards key={el.id} productsId={el.id} items={el} />
        ))}
      </div>
    </>
  );
};

export default JacketVests;
