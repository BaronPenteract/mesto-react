import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  const submitButton = React.useRef();

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(
      {
        name,
        about,
      },
      submitButton,
      'Сохранение...',
      submitButton.current.textContent,
    );
  }

  return (
    <PopupWithForm
      name="edit-form"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <fieldset className="form__input-container">
          <label className="form__label">
            <input
              id="edit-name-input"
              className="form__input form__input_edit_name"
              type="text"
              name="name"
              placeholder="Имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              minLength="2"
              maxLength="40"
            />
            <span className="edit-name-input-error form__error"></span>
          </label>
          <label className="form__label">
            <input
              id="edit-job-input"
              className="form__input form__input_edit_job"
              type="text"
              name="about"
              placeholder="О себе"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
              required
              minLength="2"
              maxLength="200"
            />
            <span className="edit-job-input-error form__error"></span>
          </label>
        </fieldset>
        <button ref={submitButton} className="form__btn form__btn_type_submit" type="submit">
          Сохранить
        </button>
      </>
    </PopupWithForm>
  );
}
