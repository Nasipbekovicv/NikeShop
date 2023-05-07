import { Link } from "react-router-dom";
import "./Mens.css";
import Buttons from "../../components/button/Buttons";
//        img
import mensImgOneBlockOne from "../../assets/mensHome/mensOneImgBlockOne.jpg";
import MensHomeBlockTwoImgOne from "../../assets/mensHome/MensHomeBlockTwoImgOne.jpg";
import MensHomeBlockTwoImgTwo from "../../assets/mensHome/MensHomeBlockTwoImgTwo.jpg";
import MensHomeBlockTreImg from "../../assets/mensHome/MensHomeBlockTreImg.jpg";
import OneReaclmas from "../../components/reclams/OneReaclmas";

const Mens = () => {
   return (
      <>
         <div className="container">
            <div>
               <div className="MenMenusHomeControl">
                  <h3>Men</h3>
                  <div>
                     <ul className="MenMenusHome">
                        <li>
                           <Link to='/shoes-mens'>Shoes</Link>
                        </li>
                        <li>
                           <Link to='/jacket-vest' >JacketVests</Link>
                        </li>
                        <li>
                           <Link> Hoodies && Sweatshirts</Link>
                        </li>
                        <li>
                           <Link> Shorts</Link>
                        </li>
                        <li>
                           <Link> Socks</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="MenHomeBlockOne">
                  <img
                     className="mensImgOneBlockOne"
                     src={mensImgOneBlockOne}
                     alt=""
                  />
                  <div className="textBlockOneMensHome">
                     <h3>
                        PUT YOUR AIR <br /> ON BLAST
                     </h3>
                     <p>
                        Highlight any fit with the eye-catching design of the{" "}
                        <br /> Air Max TW and more.
                     </p>
                     <Buttons
                        style={{ padding: "20px 20px", fontSize: "24px" }}
                        title="Shop"
                     />
                  </div>
               </div>
               <div className="MensHomeBlockTwo">
                  <h3>Lets Go</h3>
                  <div className="MensHomeBlockTwoControlImg">
                     <div className="MensHomeBlockTwoImgOne">
                        <img src={MensHomeBlockTwoImgOne} alt="" />
                        <div className="MensHomeBlockTwoImgOneText">
                           <p>Nike Running</p>
                           <h3>The New Nike Pegasus 40</h3>
                           <Buttons title="Shop" />
                        </div>
                     </div>
                     <div className="MensHomeBlockTwoImgTwo">
                        <img src={MensHomeBlockTwoImgTwo} alt="" />
                        <div className="MensHomeBlockTwoImgTwoText">
                           <p>Nike Backetball</p>
                           <h3>G.T. Cut 2</h3>
                           <Buttons title="Shop" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="MensHomeBlockTre">
                  <div>
                     <h3 className="TextSortsMenHome">Shorts by Length</h3>
                  </div>
                  <img
                     className="MensHomeBlockTreImg"
                     src={MensHomeBlockTreImg}
                     alt=""
                  />
                  <div  className="MensHomeBlockTreText">
                     <h3>EVERY DAYS LEG DAY</h3>
                     <p>Shorts in all the lengths-find yours.</p>
                     <div className="MensHomeBlockTreTextButtons">
                        <Buttons title="Shop Upper-Thigh Length Shorts" />
                        <Buttons title="Shop Mid-Thigh Length Shorts" />
                        <Buttons title="Shop Knee Length Shorts" />
                     </div>
                  </div>
               </div>
               <div>
                  <OneReaclmas/>
               </div>
            </div>
         </div>
      </>
   );
};

export default Mens;
