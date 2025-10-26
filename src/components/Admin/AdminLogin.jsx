import React, { useState } from 'react';
import { adminService } from '../../services/adminService';

const AdminLogin = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await adminService.login(password);
      if (result === 'ACCESS_GRANTED') {
        adminService.setSession();
        onLoginSuccess();
      } else {
        setError('Invalid password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              admin_panel_settings
            </span>
          </div>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Admin Access
          </h2>
          <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">
            Enter admin password to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-3 text-text-light dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary bg-white dark:bg-gray-700"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-red-400">error</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                    {error}
                  </h3>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-lg bg-primary py-3 px-4 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                'Login to Admin Panel'
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
            Secure admin access only
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;