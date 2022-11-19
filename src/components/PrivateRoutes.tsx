import { Outlet, Navigate } from 'react-router-dom';
import { useGetMeQuery } from '../redux/api/apiSlice';

const PrivateRoutes = ({ authSuccess }: { authSuccess: boolean }) => {
  return authSuccess ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoutes;
