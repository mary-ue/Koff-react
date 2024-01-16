import { Goods } from '../../components/Goods/Goods';
import { Catalog } from '../../components/Catalog/Catalog';
import s from './Main.module.scss';

export const Main = () => {
  return (
    <main className={s.main}>
      <Catalog />
      <Goods />
    </main>
  );
};
