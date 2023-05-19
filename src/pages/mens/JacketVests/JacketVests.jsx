import { useSelector } from "react-redux";
import Cards from "../../../components/cards/Cards";
import MensMenu from "../../../components/mensMenu/MensMenuHome";

const JacketVests = () => {
  const JacketVestsData = useSelector(state => state.JacketVest);

  return (
    <>
      <div>
        <div>
          <MensMenu/>
        </div>
        <div>
          <h3 style={{padding: '20px 0 0 350px', fontSize: 110}}>JacketVests</h3>
        </div>
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
