import { Link } from "react-router-dom"
import Buttons from "../../components/button/Buttons"
import OneReaclmas from "../../components/reclams/OneReaclmas"
import WomensMenu from "../../components/womensMenu/womensMenuHome"
import './Womens.css'


const Womens = () => {
   return (
      <div>
         <div>
            <WomensMenu />
            <div>
               <div className="oneImgandTextWomen">
                  <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1423,c_limit/1077c83c-b9e1-4584-bc27-1a8d56794768/women-s-shoes-clothing-accessories.png' alt="" />
                  <div className="textContentOne">
                     <p>Summer Essentials</p>
                     <h3>CHASE THE DAY</h3>
                     <p>Move. Explore. Bring your boldest</p>
                     <p>Get after summers endless possibilities with ready-for-anything fits</p>
                     <Link to='/skirts-dresses'>
                     <Buttons title='Shop' />
                     </Link>
                  </div>
               </div>
               <div className="TextBlockTwoTrending">
                  <p>Trending</p>
               </div>
               <div className="twoBlockImgWomens">
                  <div className="">
                     <div className="imgTwoTwoImg">
                        <div className="blockTwoImgOne">
                           <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_951,c_limit/2cfefe41-895d-4aa9-aa40-45e8d93d8265/women-s-shoes-clothing-accessories.jpg" alt="" />
                           <div className="blockTwoImgOneText">
                              <p>Locked in With Go</p>
                              <Link to='/leggings'>
                              <Buttons title='Shop Leggings' />
                              </Link>
                           </div>
                        </div>
                        <div className="blockTwoImgTwo">
                           <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_951,c_limit/a2f1f9c4-ec72-4e27-b1b1-3adfe87e84ac/women-s-shoes-clothing-accessories.jpg" alt="" />
                           <div className="blockTwoImgTwoText">
                              <p>Let Your Legs Exhale</p>
                              <Link to='/leggings'>
                              <Buttons title='Shop Leggins' />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="textBlockTwo">
                     <p>New Nike One Leak Protection: Period Shorts</p>
                     <h3>LATER, PERIOD LEAKS</h3>
                     <p>A built-in liner keeps you moving with confidence all month long.</p>
                     <Link to='/leggings'>
                     <Buttons title='Shop' />
                     </Link>
                  </div>
               </div>
               <div className="treBlockWomens">
                  <p>Running Shoe Finder</p>
                  <div className="treBlockImgWomens">
                     <img src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_1824,c_limit/79b1ad80-0e05-4685-ac34-a80f9bd76bd7/women-s-shoes-clothing-accessories.jpg" alt="" />
                     <div className="blockTreImgText">
                        <p>Step into What Feels Good</p>
                        <Link to='leggings'>
                     <Buttons title='Find Your Shoe' />
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="TextBlockTwoWomen">
                  <p>Women</p>
               </div>
               <div className="fooBlockWomens">

                  <div>
                     <div className="fooBlockWomensImgOne">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_906,c_limit/2563267b-3ebe-470f-8a56-1842286857c3/women-s-shoes-clothing-accessories.jpg" alt="" />
                        <div className="fooBlockWomensImgOneText">
                           <p>Get More Out Of Your Run</p>
                           <Link to='/leggings'>
                           <Buttons title='Start The Playlist' />
                           </Link>
                        </div>
                     </div>
                     <div className="fooBlockWomensImgTwo">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_906,c_limit/5008a977-532f-4d26-a170-80029206b6dc/women-s-shoes-clothing-accessories.jpg" alt="" />

                        <div className="fooBlockWomensImgTwoText">
                           <p>Feel-Good Flow</p>
                           <Link to='/leggings'>
                           <Buttons title='Start Workout' />
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div>
                     <div className="fooBlockWomensImgTree">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_906,c_limit/e39a8402-cb14-4e17-9081-223b869cd98a/women-s-shoes-clothing-accessories.jpg" alt="" />
                        <div className="fooBlockWomensImgTreeText">
                           <p>Run With Our Coaches</p>
                           <Link to='/leggings'>
                           <Buttons title='See Guided Runs' />
                           </Link>
                        </div>
                     </div>
                     <div className="fooBlockWomensImgFoo">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_906,c_limit/1fc2d1b2-53d7-4344-a522-b26745fc1ef9/women-s-shoes-clothing-accessories.jpg" alt="" />
                        <div className="fooBlockWomensImgFooText">
                           <p>Quick Core Crush</p>
                           <Link to='/leggings'>
                           <Buttons title='Start Workout' />
                           </Link>
                        </div>
                     </div>
                  </div>

               </div>
               <div>
                  <OneReaclmas/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Womens
