
import Buttons from '../../components/button/Buttons'
import KidsMenuHome from '../../components/kids-menu/KidsMenuMenu'
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


         <div className='kidsBlockTwoHome'>
            <div>
               <div className='kidsImg1BlockTwo'>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/4a85de91-55f0-4c92-be67-e813f2167ff9/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
               </div>
               <div className='kidsImg2BlockTwo'>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/87d2d391-9b65-4dcf-b045-57b31ad4ff93/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
               </div>
            </div>

            <div>
               <div className='kidsImg3BlockTwo'>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/212b52af-1834-4503-95c2-a420e0245a97/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
               </div>
               <div className='kidsImg4BlockTwo'>
                  <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/8fcc8d57-5cf5-429a-a876-286fc5a010b7/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
               </div>
            </div>
         </div>

      </div>
    </div>
  )
}

export default Kids
