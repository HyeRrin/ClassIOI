import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavVisibleComponents from 'NavVisibleComponents';
const Login = lazy(() => import('pages/Login/Login'));
const KakaoLogin = lazy(() => import('pages/Login/KakaoLogin'));
const Subscribe = lazy(() => import('pages/Subscribe/Subscribe'));
const Payment = lazy(() => import('pages/Payment/Payment'));
const LectureVideo = lazy(() => import('pages/LectureVideo/LectureVideo'));
const CreatorCenter = lazy(() => import('pages/CreatorCenter/CreatorCenter'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/creatorcenter" element={<CreatorCenter />} />
        <Route path="/lecturevideo" element={<LectureVideo />} />
        <Route path="/*" element={<NavVisibleComponents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
