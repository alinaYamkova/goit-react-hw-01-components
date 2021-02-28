import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileList.module.css';

// import { v4 as uuidv4 } from 'uuid';
// const id = uuidv4();
// console.log('id: ', id);

const ProfileList = ({ user }) => {
  const {name, tag, location, avatar, stats: {followers, views, likes}} = user;
  // const {followers, views, likes} = stats;
    // console.log(user);
    return ( 
    <>
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt={name}
          className={styles.avatar}
          width="300"
        />
        <p className={styles.name}>{name }</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>{followers}</span>
          <span className={styles.quantity}>1000</span>
        </li>
        <li>
          <span className={styles.label}>{views}</span>
          <span className={styles.quantity}>2000</span>
        </li>
        <li>
          <span className={styles.label}>{likes}</span>
          <span className={styles.quantity}>3000</span>
        </li>
      </ul>
    </div>
    </>
    );
  };
  

export default ProfileList;


  
// ProfileList.defaultProps = {
// };

ProfileList.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
  }),
};