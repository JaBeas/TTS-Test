import React, { useState } from 'react';

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your login logic here
        console.log('Login attempt with:', { username, password });
        // For example, you might call an API, validate credentials, etc.
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <div>
                    <label htmlFor="username">Username/Email:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '10px' }}>
                    Log In
                </button>
            </form>
        </div >
    );
};

export default LoginScreen;