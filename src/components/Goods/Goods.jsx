import { useEffect } from 'react';
import { Container } from '../../views/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import s from './Goods.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods } from '../../store/goods/goods.slice';

export const Goods = () => {
  const dispatch = useDispatch();

  const {
    data: goods,
    loading,
    error,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>

  if (error) return <div>Ошибка: {error}</div>

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        <ul className={s.list}>
          {goods &&
            goods.map((good) => (
              <li key={good.id}>
                <CardItem good={good} />
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};
