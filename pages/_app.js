import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Layout from "../components/Layout.jsx";
import { store } from "../redux/store.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Toaster />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
