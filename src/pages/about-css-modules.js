import React from 'react';
import Container from '../components/container';

import styles from './about-css-modules.module.css';
import users from '../utils/users';

const User = props =>
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>

export default () => (
  <Container>
    <h1 className="container__main-title">About CSS Modules</h1>
    <p className="container__text">CSS Modules are cool</p>
    { users.map((user,index) => <User key={index} username={user.username} avatar={user.avatar} excerpt={user.excerpt} />)}
  </Container>
)
