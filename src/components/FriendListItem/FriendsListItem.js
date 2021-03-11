import React from 'react';
import s from '../FriendsList/FriendsList.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/images/default_avatar.jpg';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendsListItem.defaultProps = {
  avatar: defaultImage,
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsListItem;
