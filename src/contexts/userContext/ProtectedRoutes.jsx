import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function RequireAuth() {
    let location = useLocation();
    return !localStorage.getItem('user') ? (
        <Navigate to="/login" state={{ from: location }} />
    ) : (
        <Outlet />
    );
}
