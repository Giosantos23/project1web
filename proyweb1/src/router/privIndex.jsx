/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const { state } = useLocation()

  return state?.logged ? children : <Navigate to='/login' />
}
