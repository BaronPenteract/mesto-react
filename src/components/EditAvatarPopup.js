import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = React.useRef('');
  const submitButton = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(
      {
        avatar: avatarInputRef.current.value,
      },
      submitButton,
      'Сохранение...',
      submitButton.current.textContent,
    );
    e.target.reset();
  }

  function handleClose() {
    onClose();
  }

  return (
    <PopupWithForm
      name="avatar-form"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <>
        <fieldset className="form__input-container">
          <label className="form__label">
            <input
              ref={avatarInputRef}
              id="avatar-url-input"
              className="form__input form__input_avatar_url"
              type="url"
              name="avatar"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="avatar-url-input-error form__error"></span>
          </label>
        </fieldset>
        <button ref={submitButton} className="form__btn form__btn_type_submit" type="submit">
          Сохранить
        </button>
      </>
    </PopupWithForm>
  );
}
