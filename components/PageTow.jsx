import { heading, caption } from "./../styles/components.module.css";
import styles from "./../styles/PageTow.module.css";
import {priceHander} from './components';
import {plansContnt} from "./api"
import Image from 'next/image'
export default function PageTow({ navigator }) {


  const [Context, setContext] = navigator;
  let currantSub = Context.plan.subscription == "monthly";
  let currantPlan = Context.plan.planInfo.id;
  return (
    <div className="form_container">
      <h1 className={heading}>Select your plan</h1>
      <p className={caption}>
        You have the option of monthly or yearly billing.
      </p>
      <div className={styles.plans}>
        {plansContnt.map(
          (
            {
              title,
              monthlyPrice,
              yearlyPrice,
              icon,
              monthlyOffer,
              yearlyOffer,
              id,
            },
            i
          ) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  name="plan"
                  onChange={() =>
                    setContext({
                      ...Context,
                      plan: { ...Context.plan, planInfo: { id: id } },
                    })
                  }
                  checked={currantPlan == id}
                />
                <div className={styles.plan + " column"} key={i}>
                  <div className={styles.icon}>
                    <Image src={icon} alt="" width={50} height={50} />
                  </div>
                  <div className="column al-sm-end">
                    <p className="bold">{title}</p>
                    <p className="muted">
                      {priceHander(currantSub, monthlyPrice,yearlyPrice)}
                    </p>
                    <p className="sm">
                      {currantSub ? monthlyOffer : yearlyOffer}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className={styles.switcher__container}>
        <p className={currantSub ? "bold" : "muted"}>Monthly</p>
        <div className={styles.switcher}>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => {
              if (currantSub) {
                setContext({
                  ...Context,
                  plan: { ...Context.plan, subscription: "yearly" },
                });
              } else if (!currantSub) {
                setContext({
                  ...Context,
                  plan: { ...Context.plan, subscription: "monthly" },
                });
              }
            }}
            checked={currantSub == false ? false : true}
          />
          <span></span>
        </div>
        <p className={!currantSub ? "bold" : "muted"}>Yearly</p>
      </div>
    </div>
  );
}
