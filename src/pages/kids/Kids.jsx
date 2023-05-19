
import Buttons from '../../components/button/Buttons'
import KidsMenuHome from '../../components/kids-menu/KidsMenu'
import OneReaclmas from '../../components/reclams/OneReaclmas'
import './Kids.css'

const Kids = () => {
  return (
    <div>
      <div className='container'>
         <div>
            <KidsMenuHome/>
         </div>

         <div className='kidsBlockOneHome'>
            <img  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/27907533-1b5a-4ac2-9fa1-b7eebef7f561/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"  />
            <div className='kidsBlockOneHomeText'>
               <h3>CELEBRATE THE RUN</h3>
               <p>what better way to mark the Pegasus 40th aniversary than running together?</p>
               <Buttons title='Shop'/>
            </div>
         </div>

         <div style={{paddingTop: 40}}> 
         <h3 style={{fontWeight: 600, fontSize: 20}}>Trending</h3>
         <div className='kidsBlockTwoHome'>
          <div className='kidsBlockTwoImgOne'>
            <img className='imgBlockTwoKids' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/570cd976-4cd1-4ac1-9439-72131c19b1f4/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
            <div className='kidsBlockOneTitleImgOne'  >
               <p>Nike Backetball</p>
               <h3>The Easy-On Hustle D 11</h3>
               <Buttons title='Shop'/>
            </div>
          </div>

          <div className='kidsBlockTwoImgTwo'>
            <img className='imgBlockTwoKids'  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/40fc85a0-4e8e-4837-aa24-e7d85aa32f8b/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
            <div className='kidsBlockTwoTitleImgTwo' >
               <p>Graphic Tees & Shorts</p>
               <h3>New Summer Favorites</h3>
               <Buttons title='Shop'/>
            </div>
          </div>
         </div>
         </div>


         <div className='kidsBlockTree'>
            <h3 style={{fontWeight: 600, fontSize: 20}} >Best of Air Max</h3>
            <div className="kidsBlockTreeImg">
               <img className='imgBlockTreeKids'  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/446a4933-7c72-43ea-915a-471c6f53c9f1/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"  />
               <div className='kidsBlockTreeTitle'>
                  <h3>BUBLE THE FUN</h3>
                  <p>The lightweight cushioning of the Air Max TW lets them play all day</p>
                  <Buttons title='Shop Shoes'/>
               </div>
            </div>
         </div>

         <div>
            <OneReaclmas/>
         </div>

      </div>
    </div>
  )
}

export default Kids
