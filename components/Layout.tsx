import React from 'react';
import Footer from './Footer';
import Header from './Headers/Header';
import Head from 'next/head';
import Script from 'next/script';

const Layout = ({children, title, description}: any) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                      rel="stylesheet"/>

            </Head>

            <Header/>

            <main> {children}</main>

            <Footer/>
            <Script type="text/javascript" src="https://cdn.tailwindcss.com"></Script>
            <Script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"
            ></Script>
        </>
    );
};

export default Layout;
