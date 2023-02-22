export default function ImagePopup(props) {

  return (
    <div 
      className={`popup popup_type_image popup_active`}
      onClick={props.closeByOverlay}
      >
      <div className="popup__container">
        <button 
          className="popup__close" 
          type="button" 
          title="Закрыть"
          onClick={props.onClose}
          >
          </button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <h2 className="popup__title">{props.card.name}</h2>
      </div>
    </div>
  )
}