import React from 'react';
import s from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';
// import { v4 as uuidv4 } from 'uuid';
// const id = uuidv4();
// console.log('id: ', id);

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
          // <li className={s.item} key={id}>
          //   <span className={isOnline ? s.online : s.offline}></span>
          //   <img className={s.avatar} src={avatar} alt={name} width="48" />
          //   <p className={s.name}>{name}</p>
          // </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
