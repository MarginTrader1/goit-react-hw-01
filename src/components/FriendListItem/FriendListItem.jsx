const FriendListItem = ({ image, name, status }) => {
  return (
    <div>
      <img src={image} alt="Avatar" width="48" />
      <p>{name}</p>
      <p><p>{status ? <span>OnLine</span> : <span>OffLine</span>}</p></p>
    </div>
  );
};

export default FriendListItem;
