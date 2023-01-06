import React from "react";
function Sidebar({ styles, step }) {
  const steps = [
    { name: "STEP 1", number: 1, title: "Your Info" },
    { name: "STEP 2", number: 2, title: "Select plan" },
    { name: "STEP 3", number: 3, title: "Add-ons" },
    { name: "STEP 4", number: 4, title: "Sammary" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.flex}>
        {steps.map(({ name, title, number }, i) => {
          return (
            <div className={styles.step} key={i}>
              <div
                className={`${styles.cy_number} ${
                  step == number
                    ? styles.cy_number_active
                    : step == 5 && number == 4
                    ? styles.cy_number_active
                    : ""
                }
                
                `}
              >
                {number}
              </div>
              <div className={styles.columen}>
                <div className={styles.step_name}>{name}</div>
                <div className={styles.step_title}>{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
