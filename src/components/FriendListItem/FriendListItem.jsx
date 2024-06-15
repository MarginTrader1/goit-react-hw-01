import css from "./FriendListItem.module.css";

const FriendListItem = ({ image, name, status }) => {
   return (
      <div className={css.card}>
         <img src={image} alt="Avatar" width="48" />
         <p className={css.cardName}>{name}</p>
         {status ? <p className={css.onLine}>OnLine</p> : <p className={css.offLine}>OffLine</p>}
      </div>
   );
};

export default FriendListItem;
