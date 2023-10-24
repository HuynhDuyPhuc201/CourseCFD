import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/useAuth.jsx';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Provider>
    </BrowserRouter>,
    // </React.StrictMode>,
);
