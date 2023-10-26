

import FriendList from "./Friends/FriendList";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransationHistory";

import jsonData from "../data/user.json"
import jsonStats from "../data/data.json"
import jsonFriends from "../data/friends.json"
import jsonTransation from "../data/transactions.json"






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
