export default function PopupWithForm(props) {

  return (
    <div 
      className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_active': ''}`}
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
        <form className={`popup__form form form_type_${props.name}`} name="formEdit" action="/" noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
        </form>
      </div>
    </div>
  )
}