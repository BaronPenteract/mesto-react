export default function Card(props) {

  return (
    <li>
    <article>
      <div className="cards__item">
        <button className="cards__delete" type="button" title="Удалить"></button>
        <img 
          className="cards__image" 
          src={props.link} 
          alt={props.name} 
          onClick={props.cardClick}
          />
        <div className="cards__content">
          <h2 className="cards__title">{props.name}</h2>
          <div className="cards__likes-container">
            <button className="cards__like" type="button" title="Поставить лайк"></button>
            <span className="cards__like-amount">{props.likes.length}</span>
          </div>
        </div>
      </div>
    </article>
  </li>
  )
}