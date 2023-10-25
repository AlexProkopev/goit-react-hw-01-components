import css from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={css.sectionStat}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
            const randomColor = '#' + Math.round(Math.random() * 16777215).toString(16);
            console.log(randomColor);
          return (
            <li key={id} className={css.item}>
              <span
                style={{
                  backgroundColor: randomColor,
                }}
                className={css.spanStatistics}
              >
                {label}{' '}
              </span>
                  <span className={css.spanStatistics}
                  style={{
                  backgroundColor: randomColor,
                      }}
                  >{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
