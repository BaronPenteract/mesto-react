export default function PopupWithForm({isOpen, name, title, onClose, children}) {

  function closeByOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div 
      className={`popup popup_type_${name} ${isOpen ? 'popup_active': ''}`}
      onClick={closeByOverlay}
      >
      <div className="popup__container">
        <button 
          className="popup__close" 
          type="button" 
          title="Закрыть"
          onClick={onClose}
          >
        </button>
        <form className={`popup__form form form_type_${name}`} name="formEdit" action="/" noValidate>
          <h2 className="form__title">{title}</h2>
          {children}
        </form>
      </div>
    </div>
  )
}