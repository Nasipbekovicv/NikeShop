import { Link } from "react-router-dom";
import "./Home.css";
import Buttons from "../../components/button/Buttons";
// img
import JustDoIt from "../../assets/homeImg/nike-just-do-it.jpg";
import imgOneBlockThree from "../../assets/homeImg/img-two-hodie.jpg";
import imgTwooBlockThree from "../../assets/homeImg/imgTwoBlockTree.jpg";
import nikeCover from "../../assets/homeImg/nikeCoverHome.jpg";
import imgOneBlockEnd from "../../assets/homeImg/imgOneBlockEnd.jpg";
import imgTwoBlockEnd from "../../assets/homeImg/imgTwoBlockEnd.jpg";
import imgTreBlockEnd from "../../assets/homeImg/imgTreBlockEnd.jpg";

// react redux
import { useSelector } from "react-redux";

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
                           {/* <Buttons title="Shop" /> */}
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
         <div style={{ paddingTop: 30 }}>
            <h1 style={{ fontWeight: 400 }}>Nike Membership</h1>
            <div className="coverBlockImg">
               <img className="imgCoverNikeHome" src={nikeCover} alt="" />
               <div className="imgCoverNikeHomeText">
                  <h1>
                     BECOME A <br />
                     MEMBER
                  </h1>
                  <p>Sign up for free.Join the community</p>
                  <div className="imgCoverNikeHomeBtn">
                     <Buttons title="Join Us" />
                     <Buttons title="Sign In" />
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className="BlockEndHome">
               <div className="textBlockImgBlockEndBlockOne">
                  <Link>
                     <img className="ImgBlockEnd" src={imgOneBlockEnd} alt="" />
                  </Link>
                  <div className="textBlockImgBlockEndOne">
                     <p>Member Shop</p>
                     <h3>Shop Member -exclusive <br /> styles.</h3>
                  </div>
               </div>
               <div className="textBlockImgBlockEndBlockTwo">
                  <Link>
                     <img className="ImgBlockEnd"  src={imgTwoBlockEnd} alt="" />
                  </Link>
                  <div className="textBlockImgBlockEndTwo">
                     <p>Shipping as it Should Be</p>
                     <h3>Free standard shipping on all <br /> orders.</h3>
                  </div>
               </div>
               <div className="textBlockImgBlockEndBlockTre">
                  <Link>
                     <img className="ImgBlockEnd"  src={imgTreBlockEnd} alt="" />
                  </Link>
                  <div className="textBlockImgBlockEndTre">
                     <p>Nike By You</p>
                     <h3>Customize your so-you shoe.</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
