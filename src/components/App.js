import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  //-------------------------------------------------------------------AVATAR
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    document.addEventListener('keydown', closeByEsc);
  }
  //-------------------------------------------------------------------PROFILE
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    document.addEventListener('keydown', closeByEsc);
  }
  //-------------------------------------------------------------------ADDCARD
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    document.addEventListener('keydown', closeByEsc);
  }
  //-------------------------------------------------------------------IMAGE
  function handleImageClick() {
    setIsImagePopupOpen(true);
    document.addEventListener('keydown', closeByEsc);
  }
  //-------------------------------------------------------------------CONFIRM (заглушка)
  function handleConfirmClick() {
    setIsConfirmPopupOpen(true);
    document.addEventListener('keydown', closeByEsc);
  }

  function closeAllPopups() {
    document.removeEventListener('keydown', closeByEsc);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  function closeByEsc(e) {
    if(e.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleCardClick(card) {
    handleImageClick();
    setSelectedCard(card);
    document.addEventListener('keydown', closeByEsc);
  }

  return (
    <div  className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* ------------------------------------------------------------------------AVATAR FORM */}
      <PopupWithForm
        name="avatar-form"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <>
            <fieldset className="form__input-container">
              <label className="form__label">
                <input id="avatar-url-input" className="form__input form__input_avatar_url" type="url" name="avatar" placeholder="Ссылка на аватар" required />
                <span className="avatar-url-input-error form__error"></span>
              </label>
            </fieldset>
            <button className="form__btn form__btn_type_submit" type="submit">Сохранить</button>
          </>
      </PopupWithForm>
      {/* --------------------------------------------------------------------------PROFILE FORM */}
      <PopupWithForm
        name="edit-form"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
                required 
                minLength="2" 
                maxLength="200" 
              />
              <span className="edit-job-input-error form__error"></span>
            </label>
          </fieldset>
          <button className="form__btn form__btn_type_submit" type="submit">Сохранить</button>
        </>
      </PopupWithForm>
      {/* --------------------------------------------------------------------------------ADD CARD FORM */}
      <PopupWithForm
        name="add-form"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <fieldset className="form__input-container">
            <label className="form__label">
              <input id="add-name-input" className="form__input form__input_add_name" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
              <span className="add-name-input-error form__error"></span>
            </label>
            <label className="form__label">
              <input id="add-url-input" className="form__input form__input_add_url" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="add-url-input-error form__error"></span>
            </label>
          </fieldset>
          <button className="form__btn form__btn_type_submit" type="submit">Создать</button>
        </>
      </PopupWithForm>
      {/* ------------------------------------------------------------------------CONFIRM FORM */}
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <button className="form__btn form__btn_type_submit" type="submit">Да</button>
        </>
      </PopupWithForm>
      {/* ---------------------------------------------------------------------IMAGE POPUP */}
      <ImagePopup 
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
