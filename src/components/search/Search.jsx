
import { Input } from "antd";
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

   return (
      <div>
         <Search
      placeholder="input search text"
      onChange={change}
      style={{
        width: 400,
      }}
    />
      </div>
   )
}

export default Search
