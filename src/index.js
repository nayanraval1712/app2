import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminUser />
);
reportWebVitals(<AdminUser />);

