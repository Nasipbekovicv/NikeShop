
import { Input } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/search/SearchSlice";
import './Search.css'


const Search = () => {
   const dispatch = useDispatch()

   const { Search } = Input;
  
   const change = (e) => {
      if(e.target.value){
      e.preventDefault()
      dispatch(actions.searchProducts(e.target.value))
      }else{
      dispatch(actions.clearItem2())
      }
   }

   useEffect(() => {
   },[dispatch])

   return (
      <div>
         {/* <Search
         onChange={change}
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="middle"
         /> */}
         <input className={` inputClass`} type="text" onChange={change} />
      </div>
   )
}

export default Search
