import { createContext, useState } from "react";

export const TimelineContext = createContext({});

function TimelineContextProvider({ children }) {
  const [index, setIndex] = useState(0);
  return (
    <TimelineContext.Provider value={{ index, setIndex }}>
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContextProvider;
