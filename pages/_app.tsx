import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import type {AppProps} from 'next/app';
import {useEffect} from 'react';
import {AuthProvider} from "../hooks";

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        typeof document !== undefined
            ? require('bootstrap/dist/js/bootstrap')
            : null;
    }, []);
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp;
