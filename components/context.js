import { createContext, useState } from "react";

export const FormContext = createContext();

export default function ContextWrapper({ Children }) {
  const [Context, setContext] = useState({
    data: {},
    step: 1,
    plan: { subscription: "monthly", planInfo: {}, addons: [] },
  });
  // subscribtion

  return (
    <FormContext.Provider value={[Context, setContext]}>
      {Children}
    </FormContext.Provider>
  );
}
