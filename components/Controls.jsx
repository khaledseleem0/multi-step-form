import { useEffect } from "react";
import styles from "./../styles/components.module.css";
function Controls({ navigator, submiter }) {
  const [Context, setContext] = navigator;
  const handleSubmit = submiter;
  const step = Context.step;

  const nextStep = () => {
    if (step > 4) {
      return;
    }
    setContext({ data: Context.data, plan: Context.plan, step: step + 1 });
  };

  const prevStep = () => {
    if (step <= 1) {
      return;
    }
    setContext({ data: Context.data, plan: Context.plan, step: step - 1 });
  };
  // check if all steps are done before send 
  const checkData = () => {
    if (Object.keys(Context.data).length == 0) {
      return 1;
    } else if (Context.plan.planInfo.length == 0) {
      return 2;
    } else {
      return 0;
    }
  };
  // send data to backend
  const Finish = async () => {
    
    if (checkData() !== 0) {
      setContext({ ...Context, step: checkData() });
    } else {
       delete Context.step;
      const Response = await fetch("api/newUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Context),
      });
      if(Response.status == 200){
        nextStep();
      }else{
        setContext({ ...Context, step:100})
      }
    }
  };

  // check every step before go to the next one 
  const nextHandler = (e) => {
    if (step == 1) {
      handleSubmit();
    } else if (step == 4) {
      Finish();
    } else if (step == 2) {
      if (
        Context.plan.planInfo?.id !== undefined &&
        Object.keys(Context.plan.planInfo).length !== 0
      ) {
        nextStep();
      }
    } else {
      nextStep();
    }
  };
  return (
    <>
      <div className={styles.control}>
        <button
          className={styles.btn + " " + styles.next}
          onClick={e=>nextHandler(e)}
        >
          {step == 4 ? "Confirm" : "Next Step"}
        </button>
        {/* prev */}
        {step == 1 ? null : (
          <button className={styles.btn + " " + styles.prev} onClick={prevStep}>
            Go Back{" "}
          </button>
        )}
      </div>
    </>
  );
}

export default Controls;
