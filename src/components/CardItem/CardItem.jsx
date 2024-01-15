import s from './CardItem.module.scss';

export const CardItem = ({good}) => {

  return (
    <article className={s.card}>
      {good.name}
    </article>
  );
};