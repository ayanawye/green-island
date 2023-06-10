import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import "../styles/Header.css";
import "../styles/Error.scss";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
