import { createContext, useState } from "react";

export const TestimonialsContext = createContext({});

function TestimonialsContextProvider({ children }) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  return (
    <TestimonialsContext.Provider
      value={{ testimonialIndex, setTestimonialIndex }}
    >
      {children}
    </TestimonialsContext.Provider>
  );
}

export default TestimonialsContextProvider;
