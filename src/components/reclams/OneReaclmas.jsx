// import React from 'react'
import { Link } from 'react-router-dom';
import Buttons from '../button/Buttons';
import './OneReclams.css'
import imgOneBlockEnd from "../../assets/homeImg/imgOneBlockEnd.jpg";
import imgTwoBlockEnd from "../../assets/homeImg/imgTwoBlockEnd.jpg";
import imgTreBlockEnd from "../../assets/homeImg/imgTreBlockEnd.jpg";
import nikeCover from "../../assets/homeImg/nikeCoverHome.jpg";


const OneReaclmas = () => {
  return (
    <div className='container'>
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
  )
}

export default OneReaclmas
