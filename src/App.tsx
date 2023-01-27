import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import PrivateRoutes from './components/PrivateRoutes';
import { useGetMeQuery } from './redux/api/apiSlice';
import HeaderMobile from './components/HeaderMobile';
import Suggestions from './pages/Suggestions';

const Wrapper = styled.div``;

function App() {
  const { data, isLoading, isSuccess: authSuccess } = useGetMeQuery();

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <BrowserRouter>
      <HeaderMobile />
      <Routes>
        {/* Not Protected */}
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route element={<PrivateRoutes authSuccess={authSuccess} />}>
          <Route path="/" element={<Suggestions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
