import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../Profile/Profile';
import userData from '../userData.json';
import FriendList from '../FriendList/FriendList';
import FriendListItem from '../FriendList/FriendListItem';
import friends from '../friends.json'

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App
