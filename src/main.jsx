import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import App from './App.jsx';

// 테스트 할때 console.log 찍으면 실행 2번 => <StrictMode>
// 빌드하고 배포하면 1번실행

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
