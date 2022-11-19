import React from 'react';
import styled from 'styled-components';
import Hello from './components/Hello';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoutes from './components/PrivateRoutes';
import { useGetMeQuery } from './redux/api/apiSlice';

const Wrapper = styled.div``;

function App() {
  const { data, isLoading, isSuccess: authSuccess } = useGetMeQuery();

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Not Protected */}
        <Route path="/register" element={<Register />} />
        {/* Protected */}
        <Route element={<PrivateRoutes authSuccess={authSuccess} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
