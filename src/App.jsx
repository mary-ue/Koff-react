import { Header } from "./views/Header/Header";
import { Footer } from "./views/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Goods } from "./views/Goods/Goods";
import { Catalog } from "./views/Catalog/Catalog";
import { Cart } from "./components/Cart/Cart";
import { Card } from "./components/Card/Card";

const router = createBrowserRouter([
  {
    path: '',
    element:  (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/favorite',
    element:  (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/category',
    element:  (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/search',
    element:  (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/cart',
    element:  (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/product/:productId',
    element:  (
      <>
        <Header />
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    )
  },
])

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) {
    return <div>Загрузка...</div>
  }


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
