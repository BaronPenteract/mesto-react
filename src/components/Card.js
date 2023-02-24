export default function Card({name, link, onCardClick, likes}) {

  return (
    <article>
      <div className="cards__item">
        <button className="cards__delete" type="button" title="Удалить"></button>
        <img 
          className="cards__image" 
          src={link} 
          alt={name} 
          onClick={onCardClick}
          />
        <div className="cards__content">
          <h2 className="cards__title">{name}</h2>
          <div className="cards__likes-container">
            <button className="cards__like" type="button" title="Поставить лайк"></button>
            <span className="cards__like-amount">{likes.length}</span>
          </div>
        </div>
      </div>
    </article>
  )
}