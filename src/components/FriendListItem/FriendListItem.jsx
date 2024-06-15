import css from "./FriendListItem.module.css";

import clsx from "clsx"; //библиотека для написания классов если нужно что-то добавить по условию

const FriendListItem = ({ image, name, status }) => {
   const statusClass = clsx(status ? css.onLine : css.offLine);

   return (
      <div className={css.card}>
         <img src={image} alt="Avatar" width="48" />
         <p className={css.cardName}>{name}</p>
         <p className={statusClass}>{status ? "OnLine" : "OffLine"}</p>
      </div>
   );
};

// статус через тернарник
// const FriendListItem = ({ image, name, status }) => {
//    return (
//       <div className={css.card}>
//          <img src={image} alt="Avatar" width="48" />
//          <p className={css.cardName}>{name}</p>
//          {status ? <p className={css.onLine}>OnLine</p> : <p className={css.offLine}>OffLine</p>}
//       </div>
//    );
// };

export default FriendListItem;
