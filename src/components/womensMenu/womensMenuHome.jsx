import { Link } from "react-router-dom"

const WomensMenu = () => {
  return (
    <div>
       <div className="MenMenusHomeControl">
                  <h3>Womens</h3>
                  <div>
                     <ul className="MenMenusHome">
                        <li>
                           <Link to='/shoes-womens'>Shoes</Link>
                        </li>
                        <li>
                           <Link to='/leggings' >Leggings</Link>
                        </li>
                        <li>
                           <Link to='/skirts-dresses'>Skirts & Dresses</Link>
                        </li>
                        <li>
                           <Link to=''> Shorts</Link>
                        </li>
                        <li>
                           <Link to='/women-socks'> Socks</Link>
                        </li>
                     </ul>
                  </div>
               </div>
    </div>
  )
}

export default WomensMenu
