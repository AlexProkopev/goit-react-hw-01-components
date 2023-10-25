

import FriendList from "./Friends/FriendList";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransationHistory";

const jsonData = require('../data/user.json');
const jsonStats = require('../data/data.json');
const jsonFriends = require('../data/friends.json');
const jsonTransation = require('../data/transactions.json');





export const App = () => {
  return (
    
      <>
      <Profile
        avatar={jsonData.avatar}
        username={jsonData.username}
        tag={jsonData.tag}
        location= {jsonData.location}
        followers={jsonData.stats.followers}
        views={jsonData.stats.views}
        likes={jsonData.stats.likes}
        />
      
      <Statistics title="Upload stats" stats={jsonStats} />
      <Statistics stats={jsonStats} />

      <FriendList friends={jsonFriends} />;

      <TransactionHistory  items={jsonTransation} />;
   </>
    
  );
};
