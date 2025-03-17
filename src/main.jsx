import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Router from './compenents/Router.jsx'
import HowToPlay from './compenents/HowToPlay.jsx';
import Category from './compenents/Catagory.jsx';
import StartPage from './compenents/StartPage.jsx';

const routes = [
    {
        url: '/',
        component: <StartPage />
    },
    {
        url: '/how-to-play',
        component: <HowToPlay />
    },
    {
        url: '/catagory',
        component: <Category />
    },


];

createRoot(document.getElementById('root')).render(
    <Router routes={routes}>
        <App />
    </Router>
)
