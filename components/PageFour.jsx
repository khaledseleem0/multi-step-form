import React from "react";
import { heading, caption } from "./../styles/components.module.css";
import {priceHander} from './components'
import styles from "./../styles/PageFour.module.css";
import { addons, plansContnt } from "./api";
function PageFour({ navigator }) {
  const [Context, setContext] = navigator;

  // Addons From Context 
  const yourAddons = Context.plan.addons;
  //Plan Information From Context
  const yourPlanInfo = Context.plan.planInfo;
  const addonsDetails = addons.filter(element => yourAddons.includes(element.id));

  const [planInfoDetails] = plansContnt.filter((item, index) => {
    return item.id == yourPlanInfo.id;
  })
  const  subscription = Context.plan.subscription;
  const isMonthly  = subscription == "monthly";

  const total  = ()=>{
     let totalPrice = 0;
     const init = 0;

     if(isMonthly){
          const addonsPrice = addonsDetails.reduce(
            (accumulator, currentValue) => accumulator + currentValue.monthlyPrice,
            init
          );
           totalPrice  = planInfoDetails.monthlyPrice + addonsPrice;
     }else{
          const addonsPrice = addonsDetails.reduce(
               (accumulator, currentValue) => accumulator + currentValue.yearlyPrice,
               init
             );
             totalPrice  = planInfoDetails.yearlyPrice + addonsPrice;
     }

     return <>+${totalPrice}{isMonthly ?"/mo":"/year"}</>
  }
  return (
    <div className="form_container">
      <h1 className={heading}>Finishing up</h1>
      <p className={caption}>
        Double-check everything looks OK before confirming.
      </p>
      <div className={styles.container}>
        <div className={styles.header + " flex spaced__between center_x"}>
          <div>
            <p className={styles.heading}>
              {`
              
               ${planInfoDetails.title}
               (${subscription})
              `}
            </p>

            <p className={styles.link + " muted"}>Change</p>
          </div>
          <p className="bold">
          ${priceHander(isMonthly,planInfoDetails.monthlyPrice,planInfoDetails.yearlyPrice)}
          </p>
        </div>

        {addonsDetails.map(({ title, monthlyPrice,yearlyPrice }, i) => {
          return (
            <div className="flex spaced__between pt-10" key={i}>
              <p className="muted">{title}</p>
              <p className="normal">
                         +${priceHander(isMonthly,monthlyPrice,yearlyPrice)}
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.footer + " flex spaced__between"}>
        <p className="muted">Total (per {isMonthly?"month" : "year"})</p>
        <p className="purple bold">
          {
                    total()
          }
          </p>
      </div>
    </div>
  );
}

export default PageFour;
