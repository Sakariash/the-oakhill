// components/LoginPage.js
import { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Here you can check the username and password
    if (username === 'admin' && password === 'hailey') {
      onLogin(true);
    } else {
      setError('Felaktigt lösenord, vänligen förösk igen!');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-montserrat font-bold mb-4">Logga in</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-full mb-4"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Logga in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
