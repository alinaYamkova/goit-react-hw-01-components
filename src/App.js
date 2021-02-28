import './App.css';
import ProfileList from './components/Profile/ProfileList';
// import ProfileJs from './components/Profile/ProfileJs';
import FriendsList from './components/FriendsList/FriendsList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './user/user.json'

function App() {
  return (
    <div className="profile">

     <ProfileList user={userData} />
     <FriendsList />
     <Statistics />
     <TransactionHistory />

    </div>
  );
}

export default App;
