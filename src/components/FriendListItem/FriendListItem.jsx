const FriendListItem = ({ friends }) => {
  console.log(friends);

  return friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </li>
  ));
};

export default FriendListItem;
