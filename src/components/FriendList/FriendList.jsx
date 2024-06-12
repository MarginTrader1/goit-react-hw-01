import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  
  return (
    <ul>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
