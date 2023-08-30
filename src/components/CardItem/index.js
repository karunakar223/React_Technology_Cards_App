// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`card-container ${className}`}>
      <h3 className="title">{title}</h3>
      <p className="content">{description}</p>
      <div className="img-con">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
