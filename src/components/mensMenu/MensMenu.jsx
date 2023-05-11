import { Link } from "react-router-dom"

const MensMenu = () => {
  return (
    <div>
       <div className="MenMenusHomeControl">
                  <h3>Mens</h3>
                  <div>
                     <ul className="MenMenusHome">
                        <li>
                           <Link to='/shoes-mens'>Shoes</Link>
                        </li>
                        <li>
                           <Link to='/jacket-vest' >JacketVests</Link>
                        </li>
                        <li>
                           <Link to='/hoodies-sweatshirts'> Hoodies && Sweatshirts</Link>
                        </li>
                        <li>
                           <Link to='/short-men'> Shorts</Link>
                        </li>
                        <li>
                           <Link> Socks</Link>
                        </li>
                     </ul>
                  </div>
               </div>
    </div>
  )
}

export default MensMenu
