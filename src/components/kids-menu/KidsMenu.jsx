import { Link } from "react-router-dom"

const KidsMenu = () => {
  return (
    <div>
       <div className="MenMenusHomeControl">
         <Link to='/kids'>
                  <h3>Kids</h3>
         </Link>
                  <div>
                     <ul className="MenMenusHome">
                        <li>
                           <Link to='/shoesKids'>Shoes</Link>
                        </li>
                        <li>
                           <Link to='' >Clothing</Link>
                        </li>
                        <li>
                           <Link to=''>New Arrivals</Link>
                        </li>
                        <li>
                           <Link to=''> Gear & Accessories</Link>
                        </li>
                        
                     </ul>
                  </div>
               </div>
    </div>
  )
}

export default KidsMenu
