import { createContext, useState } from "react";

export const SkillContext = createContext({});

function SkillContextProvider({ children }) {
  const [selectedSkill, setSelectedSkill] = useState("Html 5");

  return (
    <SkillContext.Provider value={{ selectedSkill, setSelectedSkill }}>
      {children}
    </SkillContext.Provider>
  );
}

export default SkillContextProvider;
