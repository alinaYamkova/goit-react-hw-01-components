import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import defaultImage from '../../assets/images/default_avatar.jpg';
// import { v4 as uuidv4 } from 'uuid';
// const id = uuidv4();
// console.log('id: ', id);

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={s.item} key={id}>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.defaultProps = {
  avatar: defaultImage,
};

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsList;
