import { Link } from "react-router-dom"

const WomensMenu = () => {
  return (
    <div>
       <div className="MenMenusHomeControl">
                  <h3>Kids</h3>
                  <div>
                     <ul className="MenMenusHome">
                        <li>
                           <Link to=''>Shoes</Link>
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

export default WomensMenu
