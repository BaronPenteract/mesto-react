import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');
  const submitButton = React.useRef();

  function handleAddPlaceSubmit(e) {
    e.preventDefault();

    onAddPlace(
      { name: cardName, link: cardLink },
      submitButton,
      'Создание...',
      submitButton.current.textContent,
    );
    setCardName('');
    setCardLink('');
  }

  function handleClose() {
    setCardName('');
    setCardLink('');
    onClose();
  }

  return (
    <PopupWithForm
      name="add-form"
      title="Новое место"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <>
        <fieldset className="form__input-container">
          <label className="form__label">
            <input
              id="add-name-input"
              className="form__input form__input_add_name"
              type="text"
              name="name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="add-name-input-error form__error"></span>
          </label>
          <label className="form__label">
            <input
              id="add-url-input"
              className="form__input form__input_add_url"
              type="url"
              name="link"
              value={cardLink}
              onChange={(e) => setCardLink(e.target.value)}
              placeholder="Ссылка на картинку"
              required
            />
            <span className="add-url-input-error form__error"></span>
          </label>
        </fieldset>
        <button ref={submitButton} className="form__btn form__btn_type_submit" type="submit">
          Создать
        </button>
      </>
    </PopupWithForm>
  );
}
