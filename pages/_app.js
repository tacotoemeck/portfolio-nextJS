// if not needed remember to delete it
import '../styles/globals.css';
import React from 'react';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
