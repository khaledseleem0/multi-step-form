import { createContext, useState } from "react";

export const FormContext = createContext();

export default function ContextWrapper({ Children }) {
  const [Context, setContext] = useState({
    data: {userName:"0"},
    step: 4,
    plan: { subscription: "monthly", planInfo: {id:1}, addons: [0] },
  });
  // subscribtion

  return (
    <FormContext.Provider value={[Context, setContext]}>
      {Children}
    </FormContext.Provider>
  );
}
