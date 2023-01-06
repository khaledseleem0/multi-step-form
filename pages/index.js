import Head from "next/head";
import { useContext } from "react";
import { FormContext } from "../components/context";
import Sidebar from "../components/Sidebar";
import PageOne from "../components/PageOne";
import styles from "../styles/Home.module.css";
import Controls from "../components/Controls";
import PageTow from "../components/PageTow";
import PageThree from "../components/PageThree";
import PageFour from "../components/PageFour";
import Finish from "../components/Finish";
import Error from "../components/Error";

export default function Home() {
  const [Context, setContext] = useContext(FormContext);
  function currantStepPage(step) {
    switch (step) {
      case 1:
        return <PageOne navigator={[Context, setContext]} />;
      case 2:
        return <PageTow navigator={[Context, setContext]} />;
      case 3:
        return <PageThree navigator={[Context, setContext]} />;
      case 4:
        return <PageFour navigator={[Context, setContext]} />;
      case 5:
        return <Finish navigator={[Context]} />;

      default:
        return <Error />;
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Form</title>
        <meta name="description" content="Multi Step Form" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className={styles.form_wrapper}>
        <Sidebar styles={styles} step={Context.step} />
        <div className={styles.content}>
          {currantStepPage(Context.step)}
          {Context.step > 4 || Context.step == 1 ? null : (
            <Controls navigator={[Context, setContext]} />
          )}
        </div>
      </div>
    </div>
  );
}
