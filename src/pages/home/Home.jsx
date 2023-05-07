// import { Link } from "react-router-dom";
import "./Home.css";
import Buttons from "../../components/button/Buttons";
// img
import JustDoIt from "../../assets/homeImg/nike-just-do-it.jpg";
import imgOneBlockThree from "../../assets/homeImg/img-two-hodie.jpg";
import imgTwooBlockThree from "../../assets/homeImg/imgTwoBlockTree.jpg";

// react redux
import { useSelector } from "react-redux";
import OneReaclmas from "../../components/reclams/OneReaclmas";

const Home = () => {
   const homeData = useSelector(state => state.ahomeAirMens);

   return (
      <div>
         <div className="controlsHomeTextOne">
            <h1>BRING THE VIBES</h1>
            <p>
               Add legendary style to any look with the Air Max 270, Air Max TW
               SE, and more
            </p>
            <Buttons title="Shop All Air Max" />
         </div>
         <div>
            <img width={1440} src={JustDoIt} alt="" />
            <div className="controlHomeDataCartOverflow">
               <div>
                  <h1>Popular Right Now</h1>
               </div>
               <div className="controlHomeDataCart">
                  {homeData.map(data => {
                     return (
                        <div key={data.id} className="homeDataCart">
                           <img src={data.svg} alt="" />
                           <h4>{data.title}</h4>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         <div className="twoBlockImgHome">
            <div className="oneImgOneBlockTwo">
               <img className="imgBlockThree" src={imgOneBlockThree} alt="" />
               <div className="twoBlockImgHomeText">
                  <p>Style Your Summer</p>
                  <h3>Discover Your Summer Color</h3>
                  <Buttons title="Shop" />
               </div>
            </div>
            <div className="oneImgTwoBlockTwo">
               <img className="imgBlockThree" src={imgTwooBlockThree} alt="" />
               <div className="twoBlockImgHomeTextTwo">
                  <h3>The Latest from Nike Backetball</h3>
                  <Buttons title="Shop" />
               </div>
            </div>
         </div>
         <div>
            <OneReaclmas />
         </div>
      </div>
   );
};

export default Home;
