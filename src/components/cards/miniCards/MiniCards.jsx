import './MiniCards.css'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Buttons from '../../button/Buttons';
import { actions } from '../../../redux/cardShop/CardShopSlice';
import Comments from '../../comments/Comments';

const MiniCards = () => {
   const [DATA, setDATA] = useState("");
   const params = useParams();
   const dispatch = useDispatch()

   const JacketVestsData = useSelector(state => state.JacketVest);
   const shoesMans = useSelector(state => state.mensShoes);
   const HoodiesSweatshirtsData = useSelector(state => state.HoodiesSweatshirts)


   const data = [...JacketVestsData, ...shoesMans, ...HoodiesSweatshirtsData];

   const dataRes = () => {
      data.map(el => {
         if (el.id == params.id) {
            setDATA(el);
         }
      });
   };

   // const pdSiz = DATA.size.map(e => <button key={e.id}>{e.s}</button>)




   useEffect(() => {
      dataRes();
   }, []);

   return (
      <div className='container'>
         <div className="CartBuy">
            <div className="ControlBlockImgCartBuy">
               <img style={{ width: 400 }} src={DATA.img} alt="" />
               <div>
                  <h1 className='ControlBlockTextCartBuyName'>{DATA.name}</h1>
                  <p className='ControlBlockTextCartBuyTitle'>{DATA.title}</p>

                  <div >
                     {/* {pdSiz} */}
                  </div>

                  <div>
                     <p style={{ fontSize: "20px", fontWeight: 600 }}>Opisanie</p>
                     <p className='ControlBlockTextCartBuyDescription'>{DATA.description}</p>
                  </div>
               </div>
            </div>
            <div className="ControlBlockTextCartBuy">
               <div className='ControlBlockTextCartBuyBtnBuyBlock'>
                  <div className='blockFixed'>
                     <p className='ControlBlockTextCartBuyPrice'>${DATA.price}</p>
                     <Buttons style={{ background: '#fff', color: 'black', borderColor: 'rgb(98, 97, 97)' }} onClick={() => dispatch(actions.addToCard(DATA))} className="ControlBlockTextCartBuyBtnBuy" title='Add To Card' />
                  </div>
               </div>
            </div>
         </div>
         <div>
            <Comments/>
         </div>
      </div>
   );
};

export default MiniCards;
