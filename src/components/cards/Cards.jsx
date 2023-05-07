import "./Card.css";
import { useNavigate } from "react-router";
import { Card } from 'antd';

const Cards = props => {
   const { Meta } = Card;
   const navigation = useNavigate();

   return (
      <div className="CartSize">
         <div className="CardBatya">
         <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            <div className="CartControl">

               <div  key={props.items.id}>
                  <div
                     onClick={() => navigation(`/mini-cards/${props.productsId}`)}>
                     <div>
                        <img className="imgCards" src={props.items.img} alt="" />
                     </div>
                     <div>
                        <h3>{props.items.name}</h3>
                        <p>{props.items.title}</p>
                        <p> ${props.items.price} </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cards;
