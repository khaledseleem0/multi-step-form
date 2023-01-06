import "../styles/globals.css";
import ContextWrapper from "./../components/context";
function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper Children={<Component {...pageProps} />}></ContextWrapper>
  );
}

export default MyApp;
