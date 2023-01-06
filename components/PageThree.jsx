import React, { useEffect, useState } from "react";
import { heading, caption } from "./../styles/components.module.css";
import styles from "./../styles/PageThree.module.css";

import {addons} from "./api";
function PageThree({ navigator }) {
  const [Context, setContext] = navigator;
  let currantSub = Context.plan.subscription == "monthly";

  function checked(e, id) {
    let oldArr = Context.plan.addons;
    let isExisted = oldArr.indexOf(id);
    let newArr;

    if (isExisted !== -1) {
      newArr = oldArr.filter((item) => {
        return item !== id;
      });

      setContext({
        ...Context,
        plan: { ...Context.plan, addons: [...newArr] },
      });
    } else {
      setContext({
        ...Context,
        plan: { ...Context.plan, addons: [...Context.plan.addons, id] },
      });
    }

    e.target.parentNode.parentNode.classList.toggle("bordered");

  }
  useEffect(() => {
   let  inputs = document.getElementsByTagName('input'); 
      for (const elem in inputs) {
        if(inputs[elem].checked){
          
          inputs[elem].parentNode.parentNode.classList.add("bordered");
        }
      }
  }, [])


  function priceHander(monthly,yearly){
    return <>{currantSub ? monthly :yearly}{currantSub ? "/mo": "/year" }</>
}

  
  return (
    <div className="form_container">
      <h1 className={heading}> Pick add-ons</h1>
      <p className={caption}>Add-ons help enhance your gaming experience.</p>
      <div className="addons colmn">
        {addons.map(({ id, title, info, monthlyPrice, yearlyPrice }, i) => {
          return (
            <div className={`center_x  ${styles.addon__container}`} key={i}>
              <div className={styles.check__box}>
                <input
                  type="checkbox"
                  name="addons"
                  className="boxes"
                  checked={Context.plan.addons.includes(id)}
                  onChange={(e) => {
                    checked(e, id);
                  }
                  
                }
                />
                <div className="centered flex">
                  <img src="/assets/images/icon-checkmark.svg" alt="" />
                </div>
              </div>
              <div className="colmn w-100">
                <h3 className="bold">{title}</h3>
                <p className="sm muted pt-5">{info}</p>
              </div>
              <p className="purple">
             {priceHander(monthlyPrice ,yearlyPrice)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PageThree;
