// src/pages/DashboardPage.js
import React from 'react';
import TranslationForm from '../components/Translationform';
import UserList from '../components/UserList';

const DashboardPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <TranslationForm />
      <h2>User Management</h2>
      <UserList />
    </div>
  );
};

export default DashboardPage;
