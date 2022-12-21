import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
const Detail = lazy(() => import('./pages/Detail/Detail'));
const MyPage = lazy(() => import('./pages/MyPage/MyPage'));

const NavVisibleComponents = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/classes/detail/:id" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default NavVisibleComponents;
