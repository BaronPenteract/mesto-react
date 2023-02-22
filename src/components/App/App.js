import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupWithImage from '../PopupWithImage/PopupWithImage';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  //-------------------------------------------------------------------AVATAR
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    document.addEventListener('keydown', closeByEsc);
  }
  //-------------------------------------------------------------------PROFILE
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    document.addEventListener('keydown', closeByEsc);
  }
  //-------------------------------------------------------------------ADDCARD
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    document.addEventListener('keydown', closeByEsc);
  }
  //-------------------------------------------------------------------CONFIRM (заглушка)
  function handleConfirmClick() {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
    document.addEventListener('keydown', closeByEsc);
  }

  function closeAllPopups() {
    document.removeEventListener('keydown', closeByEsc);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  function closeByEsc(e) {
    if(e.key == 'Escape') {
      console.log('pressed');
      closeAllPopups();
    }
  }

  function closeByOverlay(e) {
    if (e.target === e.currentTarget) {
      closeAllPopups();
    }
  }

  function handleCardClick(card) {
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
        cardClick={handleCardClick}
      />
      <Footer />
      {/* ------------------------------------------------------------------------AVATAR FORM */}
      <PopupWithForm
        name="avatar-form"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        closeByOverlay={closeByOverlay}
        children={
          <>
            <fieldset className="form__input-container">
              <label className="form__label">
                <input id="avatar-url-input" className="form__input form__input_avatar_url" type="url" name="avatar" placeholder="Ссылка на аватар" required />
                <span className="avatar-url-input-error form__error"></span>
              </label>
            </fieldset>
            <button className="form__btn form__btn_type_submit" type="submit">Сохранить</button>
          </>
        }
      />
      {/* --------------------------------------------------------------------------PROFILE FORM */}
      <PopupWithForm
        name="edit-form"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        closeByOverlay={closeByOverlay}
        children={
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
        }
      />
      {/* --------------------------------------------------------------------------------ADD CARD FORM */}
      <PopupWithForm
        name="add-form"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        closeByOverlay={closeByOverlay}
        children={
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
        }
      />
      {/* ------------------------------------------------------------------------CONFIRM FORM */}
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        closeByOverlay={closeByOverlay}
        children={
          <>
            <button className="form__btn form__btn_type_submit" type="submit">Да</button>
          </>
        }
      />
      {/* ---------------------------------------------------------------------IMAGE POPUP */}
      {selectedCard && <PopupWithImage 
                          card={selectedCard}
                          onClose={closeAllPopups}
                          closeByOverlay={closeByOverlay}
                        />
      }      
      {/* <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button className="popup__close" type="button" title="Закрыть"></button>
          <form className="popup__form form form_type_confirm" name="formConfirm" action="/" noValidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__btn form__btn_type_submit" type="submit">Да</button>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default App;
