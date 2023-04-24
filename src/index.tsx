import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51N0JZ1EbN1KBqJWAvbXJkC4Aa5X0hlVquXzWNGTBTA4i05uGY6P6rfq1psDgChb5EbTkGHtvnjMxAbjBHg9mg1jV00DHFUuzdi');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Elements stripe={stripePromise}>
            <App/>
        </Elements>
    </BrowserRouter>
);
