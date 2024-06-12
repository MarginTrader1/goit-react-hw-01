import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem
            image={avatar}
            name={name}
            status={isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
