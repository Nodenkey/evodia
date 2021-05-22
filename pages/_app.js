import {GlobalStyle} from "../globals/appGlobal";
import React from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from "../components/layout/layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import {persistor, store} from "../lib/redux/store";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <GlobalStyle/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

export default MyApp
