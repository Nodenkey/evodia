import {GlobalStyle} from "../globals/appGlobal";
import Layout from "../components/layout/layout";

function MyApp({Component, pageProps}) {
    return <>
        <GlobalStyle/>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
}

export default MyApp
