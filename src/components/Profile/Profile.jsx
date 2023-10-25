import css from "./Profile.module.css"

export default function Profile(props) {
  return (
    <div className={css.wrapper}>
      <img src={props.avatar} alt={props.username} className={css.img}/>
      <h1 className={css.title}>{props.username}</h1>
      <p className={css.text}>@{props.tag}</p>
      <p className={css.text}>{props.location}</p>

      <table border="1" className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableInfo}>
            <th className={css.infoTitle}>Folovers</th>
            <th className={css.infoTitle}>Views</th>
            <th className={css.infoTitle}>Likes</th>
          </tr>
        </thead>
        <tbody>
          <tr className={css.tableInfo}>
            <td className={css.info}>{props.followers}</td>
            <td className={css.info}>{props.views}</td>
            <td className={css.info}>{props.likes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
