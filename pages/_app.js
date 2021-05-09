import {GlobalStyle} from "../globals/appGlobal";
import Layout from "../components/layout/layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({Component, pageProps}) {
    return <>
        <GlobalStyle/>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
}

export default MyApp
