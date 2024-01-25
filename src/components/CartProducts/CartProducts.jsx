import s from './CartProducts.module.scss';

export const CartProducts = () => {
  return (
    <ul className={s.products}>
      <li className={s.product} key={1}>
        <img
          className={s.img}
          src="https://koff-api.vercel.app/img//1hb3g24plh60ema3.jpg"
          alt="Диван"
        />
        <h3 className={s.titleProduct}>
          Диван прямой 2-х местный Homage Gamma
        </h3>
        <p className={s.price}>{'246040'.toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 16955881429</p>
        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>3</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};
