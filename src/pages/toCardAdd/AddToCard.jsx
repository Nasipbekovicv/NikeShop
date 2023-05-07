
import { useSelector } from "react-redux"

const AddToCard = () => {
   const toComeCard = useSelector(st => st.addToCard.CardItems)

  return (
    <div>
      {toComeCard.map(e => {
         return (
            <div key={e.id}>{e.name}</div>
         )
      })}
    </div>
  )
}

export default AddToCard
