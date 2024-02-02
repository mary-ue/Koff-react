import { Link, useParams } from 'react-router-dom';
import s from './Order.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../views/Container/Container';
import { useEffect } from 'react';
import { clearOrder, fetchOrder } from '../../store/order/order.slice';
import { fetchCart } from '../../store/cart/cart.slice';

export const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { orderData, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchCart());
  });

  useEffect(() => {
    dispatch(fetchOrder(orderId));

    return () => {
      dispatch(clearOrder());
    };
  }, [dispatch, orderId]);

  if (loading) {
    return (
      <section className={s.order}>
        <Container className={s.container}>
          <h2 className={s.title}>Загрузка...</h2>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className={s.order}>
        <Container className={s.container}>
          <h2 className={s.title}>Ошибка: {`${error}`}</h2>
        </Container>
      </section>
    );
  }

  if (!orderData) {
    return (
      <section className={s.order}>
        <Container className={s.container}>
          <h2 className={s.title}>Заказ не найден</h2>
        </Container>
      </section>
    );
  }

  return (
    <section className={s.order}>
      <Container className={s.container}>
        <div className={s.content}>
          <div className={s.header}>
            <h2 className={s.title}>Заказ успешно размещен</h2>
            <p className={s.price}>
              {orderData.totalPrice.toLocaleString()}&nbsp;₽
            </p>
          </div>

          <p className={s.number}>№{orderData.id}</p>

          <div className={s.tableWrapper}>
            <h3 className={s.tableTitle}>Данные доставки</h3>
            <table className={s.table}>
              <tbody>
                <tr className={s.row}>
                  <td className={s.field}>Получатель</td>
                  <td className={s.value}>{orderData.name}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Телефон</td>
                  <td className={s.value}>{orderData.phone}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>E-mail</td>
                  <td className={s.value}>{orderData.email}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Адрес доставки</td>
                  <td className={s.value}>{orderData.address}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ оплаты</td>
                  <td className={s.value}>{orderData.paymentType}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ получения</td>
                  <td className={s.value}>{orderData.deliveryType}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link className={s.back} to="/">
            На главную
          </Link>
        </div>
      </Container>
    </section>
  );
};
