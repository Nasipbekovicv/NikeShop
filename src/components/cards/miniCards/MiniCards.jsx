import './MiniCards.css'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Buttons from '../../button/Buttons';
import { actions } from '../../../redux/cardShop/CardShopSlice';
import Comments from '../../comments/Comments';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsFillCheckCircleFill } from 'react-icons/bs'

const MiniCards = () => {
   const [DATA, setDATA] = useState("");
   const params = useParams();
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const JacketVestsData = useSelector(state => state.JacketVest);
   const shoesMans = useSelector(state => state.mensShoes);
   const HoodiesSweatshirtsData = useSelector(state => state.HoodiesSweatshirts)
   const skDt = useSelector(st => st.SkirtsDresses)
   const socksData = useSelector(st => st.socks)
   const dt_shs_Wmes = useSelector(st => st.womensShoes)
   const leggings = useSelector(st => st.Leggings)


   const data = [...JacketVestsData, ...shoesMans, ...HoodiesSweatshirtsData, ...skDt, ...socksData, ...dt_shs_Wmes, ...leggings];

   const dataRes = () => {
      data.map(el => {
         if (el.id == params.id) {
            setDATA(el);
         }
      });
   };

   useEffect(() => {
      dataRes();
   }, []);

   return (
      <div className='container'>
         <div className='controlBack-1'>
            <Buttons onClick={() => navigate(-1)} title='Back' />
         </div>
         <div className="CartBuy">
            <div className="ControlBlockImgCartBuy">
               <img style={{ width: 400 }} src={DATA.img} alt="" />
               <div>
                  <h1 className='ControlBlockTextCartBuyName'>{DATA.name}</h1>
                  <p className='ControlBlockTextCartBuyTitle'>{DATA.title}</p>
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
                     <Buttons style={{ background: '#fff', color: 'black', borderColor: 'rgb(98, 97, 97)' }} onClick={() => dispatch(actions.addToCard(DATA), toast.success("the product was successfully added", { icon: <BsFillCheckCircleFill /> })
                     )} className="ControlBlockTextCartBuyBtnBuy" title='Add To Card' />
                  </div>
               </div>
            </div>
         </div>
         <div>
            <Comments />
         </div>
         <ToastContainer />
      </div>
   );
};

export default MiniCards;
