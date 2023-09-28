import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SigninPage from '../page/SigninPage';
import SignupPage from '../page/SignupPage';
import TodoPage from '../page/TodoPage';
import Layout from '../components/Common/Layout';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../page/NotFoundPage';
import HomePage from '../page/HomePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
