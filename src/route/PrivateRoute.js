import React from 'react'
import { Navigate } from 'react-router-dom'
import { ProductDetail } from '../page'

const PrivateRoute = ({auth}) => {
  return auth ? <ProductDetail /> : <Navigate to="/login" />
}

export default PrivateRoute