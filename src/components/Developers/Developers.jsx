import s from './Developers.module.scss';

export const Developers = () => {
  return (
    <ul className={s.developers}>
      <li className={s.item}>
        Designer:&nbsp;
        <a
          className={s.link}
          href="https://t.me/Mrshmallowww"
          target="_blank"
          rel="noreferrer"
        >
          Anastasia Ilina
        </a>
      </li>
      <li className={s.item}>
        Developer:&nbsp;
        <a
          className={s.link}
          href="https://t.me/mary_ue"
          target="_blank"
          rel="noreferrer"
        >
          Maria Soloveva
        </a>
      </li>
    </ul>
  );
};
