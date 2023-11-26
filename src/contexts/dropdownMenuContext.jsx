import { createContext, useState } from "react";

export const DropdownMenuContext = createContext({});

function DropdownMenuContextProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <DropdownMenuContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </DropdownMenuContext.Provider>
  );
}

export default DropdownMenuContextProvider;
