import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import Profile from "./components/Profile/Profile";
import userData from "./components/userData";

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
  </React.StrictMode>
);
