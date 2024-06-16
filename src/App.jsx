import React from "react";
import ReactDOM from "react-dom/client";

import "modern-normalize"; // импорт библ модерн нормалайз
import "./index.css"; // импорт обнуленного css

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Profile name={userData.username} tag={userData.tag} location={userData.location} image={userData.avatar} stats={userData.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
   </React.StrictMode>
);
