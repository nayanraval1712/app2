import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminLogin from './AdminLogin';
import AdminForgotpassword from './AdminForgotpassword';
import AdminUser from './AdminUser';
import AdminCategory from './AdminCategory';
import AdminAddCategory from './AdminAddCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminProduct from './AdminProduct';
import AdminAddProduct from './AdminAddProduct';
import AdminEditProduct from './AdminEditProduct';
import AdminProductDetail from './AdminProductDetail';
import AdminOrder from './AdminOrder';
import AdminOrderDetails from './AdminOrderDetails';
import AdminManu from './AdminManu';
import AdminHome from './AdminHome';

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index path='/' element={<AdminLogin />} />
        <Route index path='/forgotpassword' element={<AdminForgotpassword />} />
        <Route path='/user' element={<AdminUser />} />
        <Route path='/catagery' element={<AdminCategory />} />
        <Route path='/addcatagery' element={<AdminAddCategory />} />
        <Route path='/editcatagery/:categeryid' element={<AdminEditCategory />} />
        <Route path='/product' element={<AdminProduct />} />
        <Route path='/addproduct' element={<AdminAddProduct />} />
        <Route path='/editproduct' element={<AdminEditProduct />} />
        <Route path='/productdetail/:productid' element={<AdminProductDetail />} />
        <Route path='/order' element={<AdminOrder />} />
        <Route path='/orderdetails/:orderid' element={<AdminOrderDetails />} />
        <Route path='/manu' element={<AdminManu />} />
        <Route path='/home' element={<AdminHome />} />

      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);

