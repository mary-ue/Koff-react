import { useEffect } from 'react';
import { Container } from '../Container/Container';
import { CardItem } from '../../components/CardItem/CardItem';
import s from './Goods.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods } from '../../store/goods/goods.slice';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const { data: goods, loading, error, pagination } = useSelector((state) => state.goods);
  const { favoriteList } = useSelector((state) => state.favorite);
  const { pathname } = useLocation();

  const category = searchParam.get('category');
  const q = searchParam.get('q');
  const page = searchParam.get('page');

  useEffect(() => {
    if (pathname !== '/favorite') {
      dispatch(fetchGoods({ category, q, page }));
    }
  }, [dispatch, category, q, pathname, page]);

  useEffect(() => {
    if (pathname === '/favorite') {
      dispatch(fetchGoods({ list: favoriteList.join(','), page }));
    }
  }, [dispatch, favoriteList, pathname, page]);

  if (loading)
    return (
      <Container>
        <p>Загрузка...</p>
      </Container>
    );

  if (error)
    return (
      <Container>
        <p>Ошибка: {error}</p>
      </Container>
    );

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        {goods.length ? (
          <>
            <ul className={s.list}>
              {goods &&
                goods.map((good) => (
                  <li key={good.id}>
                    <CardItem {...good} />
                  </li>
                ))}
            </ul>
            {pagination ? <Pagination pagination={pagination} /> : ''}
          </>
        ) : (
          <p>По вашему запросу товаров не найдено</p>
        )}
      </Container>
    </section>
  );
};
