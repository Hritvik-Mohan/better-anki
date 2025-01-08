import { useEffect, useState } from "react";


const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false);
    // const [open, setOpen] = React.useState(false);
  
    useEffect(() => {
      // Check if window exists
      const mediaQuery = window.matchMedia("(max-width: 965px)");
      setIsMobile(mediaQuery.matches);
  
      const handleChange = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
  
      return () => window.removeEventListener("resize", handleChange);
    }, []);
  
    return isMobile;
};

export default useIsMobile;