import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();
// console.log('id: ', id);

const FriendList = ({ id, avatar, name, isOnline }) => {
  <ul className={s.friendList}>
    return (
    <li className={s.item} key={id()}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
    );
  </ul>;
};

// FriendListItem.defaultProps = {
//   avatar: ,
// };

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
