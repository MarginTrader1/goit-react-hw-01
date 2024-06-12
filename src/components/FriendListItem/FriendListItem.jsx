const FriendListItem = ({ image, name, status }) => {
  return (
    <div>
      <img src={image} alt="Avatar" width="48" />
      <p>{name}</p>
      {status ? <p>OnLine</p> : <p>OffLine</p>}
    </div>
  );
};

export default FriendListItem;
