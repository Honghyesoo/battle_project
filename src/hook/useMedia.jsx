import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const [pc, setPc] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [phone, setPhone] = useState(false);

  const PC = useMediaQuery({ query: "(min-width: 1070px)" });
  const Tablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1069px)",
  });
  const Phone = useMediaQuery({
    query: "(min-width: 400px) and (max-width: 768px)",
  });

  useEffect(() => {
    setPc(PC);
    setTablet(Tablet);
    setPhone(Phone);
  }, [PC, Tablet, Phone]);

  return { pc, tablet, phone };
};

export default useMedia;
