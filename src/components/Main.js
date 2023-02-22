import React from 'react';
import Api from '../utils/Api';
import avatar from '../images/avatar.png';
import Card from './Card';

export default function Main(props) {
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
    headers: {
      authorization: 'cb4b8bf9-d1cf-4125-b87a-d2721614cb5f',
      'Content-Type': 'application/json'
    }
  });

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState(avatar);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {/* ------------------------------------------PROFILE INFO */
    api.getUser()
      .then( userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
      })
      .catch( api.handleError );
  }, [userName, userDescription])
  
  React.useEffect(() => {/* ---------------------------------------------AVATAR */
    api.getUser()
      .then( userData => {
        setUserAvatar(userData.avatar);
      })
      .catch( api.handleError );
  }, [userAvatar])
  /* ---------------------------------------------------------------------CARDS */
 
  React.useEffect( () => {
    api.getInitialCards()
     .then( cardsData => {
       setCards(cardsData)
     })
     .catch( api.handleError );
  }, [])
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватарка путешественника" />
            <button 
              className="profile__btn-avatar-edit anim-avatar-button" 
              type="button" 
              title="Изменить аватар"
              onClick={props.onEditAvatar}
              >
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button 
              className="profile__btn-edit" 
              type="button" 
              title="Редактировать"
              onClick={props.onEditProfile}
              >
            </button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button 
          className="profile__btn-add" 
          type="button" 
          title="Добавить новое место"
          onClick={props.onAddPlace}
          >
        </button>
      </section>
      <section className="cards" aria-label="Места, где побывал">
        <ul className="cards__list">
          {
            cards.map( card => (
              <Card 
                key={card._id}
                name={card.name}
                link={card.link}
                likes={card.likes}
                cardClick={() => {props.cardClick(card)}}
              />
            ))
          }
        </ul>
      </section>
    </main>
  )
}