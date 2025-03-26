import { useState } from 'react'
import viteLogo from '/vite.svg'
import css from './App.module.css'
import Profile from '../Profile/Profile';
import userData from '../userData.json';
import FriendList from '../FriendList/FriendList';
import FriendListItem from '../../components/FriendListItem/FriendListItem';
import friends from '../friends.json'
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../transactions.json'

const App = () => {
  return (
    <div className={css.app}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
        friends={friends}
      />
            <TransactionHistory
        items={transactions}
      />
    </div>
  );
};

export default App
