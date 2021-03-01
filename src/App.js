import './App.css';
import Profile from './components/Profile/Profile';
import FriendsList from './components/FriendsList/FriendsList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './components/Profile/user.json';
import statData from './components/Statistics/statistical-data.json';
// console.log(userData);
// console.log(statData);

function App() {
  return (
    <div className="profile">
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="" stats={statData} />
      <FriendsList />
      <TransactionHistory />
    </div>
  );
}

export default App;
