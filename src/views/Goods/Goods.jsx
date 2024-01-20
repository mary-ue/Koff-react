import { useEffect } from 'react';
import { Container } from '../Container/Container';
import { CardItem } from '../../components/CardItem/CardItem';
import s from './Goods.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods } from '../../store/goods/goods.slice';
import { useSearchParams } from 'react-router-dom';

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get('category');
  const q = searchParam.get('q');

  const { data: goods, loading, error } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods({ category, q }));
  }, [dispatch, category, q]);

  if (loading) return <div>Загрузка...</div>;

  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        {goods.length ? (
          <ul className={s.list}>
            {goods &&
              goods.map((good) => (
                <li key={good.id}>
                  <CardItem {...good} />
                </li>
              ))}
          </ul>
        ) : (
          <p>По вашему запросу товаров не найдено</p>
        )}
      </Container>
    </section>
  );
};
