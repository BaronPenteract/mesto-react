import React from 'react';
import Card from './Card';
import api from '../utils/Api';
import avatar from '../images/avatar.png';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = React.useState('UserName');
  const [userDescription, setUserDescription] = React.useState('Description');
  const [userAvatar, setUserAvatar] = React.useState(avatar);

  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {/* ------------------------------------------USER & CARDS DATA */
    Promise.all([api.getUser(), api.getInitialCards()])    
      .then( ([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch( api.handleError );
  }, [])

  const cardsElements = cards.map( card => (
      <li key={card._id} >
        <Card 
          name={card.name}
          link={card.link}
          likes={card.likes}
          onCardClick={() => {onCardClick(card)}}
        />
      </li>
    ));

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
              onClick={onEditAvatar}
              >
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button 
              className="profile__btn-edit" 
              type="button" 
              title="Редактировать"
              onClick={onEditProfile}
              >
            </button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button 
          className="profile__btn-add" 
          type="button" 
          title="Добавить новое место"
          onClick={onAddPlace}
          >
        </button>
      </section>
      <section className="cards" aria-label="Места, где побывал">
        <ul className="cards__list">
          {cardsElements}
        </ul>
      </section>
    </main>
  )
}