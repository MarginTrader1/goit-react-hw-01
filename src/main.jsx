import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

import userData from "../src/data/userData.json";
import friends from "../src/data/friends.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friends} />
  </React.StrictMode>
);
