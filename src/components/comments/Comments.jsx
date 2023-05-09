


import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../redux/comments/CommentsSlice'
import Buttons from '../button/Buttons'
import './Comments.css'
import { useState } from 'react'


const Comments = () => {

   const [come , setCome] = useState('')

  const comts = useSelector(st => st.comments)
  const dicpatch = useDispatch()

  const change = (e) => {
   e.preventDefault(),
   setCome(dicpatch(actions.commentsFunc(e.target.value)))
  }



   return (
      <>
      <div className='allBlockComments'>
         <div style={{padding: '40px 0'}}>
            <div className='blockComments' >
               <div className='contrlInputAndBtnComments'>
               <div style={{padding: '10px 0px'}}>
                  <p>Comments Products</p>
                  <input onChange={change} className='comments' type="text" placeholder='comments' />
               </div>
               <div style={{padding: '10px 0'}}>
                  <Buttons onClick={() => come} title='add comments' />
               </div>
               </div>
            </div>
         </div>
         <div className='controlComments'>
            {/* {comts} */}
         </div>
      </div>
      </>
   )
}

export default Comments
