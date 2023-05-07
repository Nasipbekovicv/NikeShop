import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MiniCards = () => {
   const [DATA, setDATA] = useState("");
   const params = useParams();

   const JacketVestsData = useSelector(state => state.JacketVest);
   const shoesMans = useSelector(state => state.mensShoes);

   const data = [...JacketVestsData, ...shoesMans];

   const res = () => {
      data.map(el => {
         if (el.id == params.id) {
            setDATA(el);
         }
      });
   };

   useEffect(() => {
      res();
   }, []);

   return (
      <div>
         <h1>{DATA.name}</h1>
         <p>{DATA.title}</p>
         <img src={DATA.img} alt="" />
      </div>
   );
};

export default MiniCards;
