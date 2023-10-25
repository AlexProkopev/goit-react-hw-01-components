import css from "./FriendListItem.module.css"

export default function FriendListItem({ avatar, id, name, isOnline }) {
    const online = isOnline ? "green" : "red";
    const isOnlineStyle = {
      backgroundColor: online,
      display: "inline-block",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      
        
    }
  return (
    <li key={id} className={css.item}>
          <span className={css.status} style={isOnlineStyle}>{isOnline}</span>
      <img className={css.avatar}   src={avatar} alt={name} width="48" />
      <p className={css.name}  >{name }</p>
    </li>
  );
}
