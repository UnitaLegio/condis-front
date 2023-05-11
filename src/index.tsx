import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './index.css';
import './assets/styles/global.styles.scss';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
{/*                <PersistGate
                    loading={<div>Loading...ChangeMe</div>}
                    persistor={persistor}>*/}
                    <App/>
                {/*</PersistGate>*/}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
