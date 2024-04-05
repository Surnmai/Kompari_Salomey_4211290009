import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
} from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(true);

  const closeMenuBar = () => {
    setMobileNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      closeMenuBar();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // NavBar Background scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
    return window.removeEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  // react code to close navbar menu on click on the anywhere on the screen or links
  const menuRef = useRef(null);
  // console.log(menuRef.current);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // console.log(e.target);
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenuBar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenuBar, menuRef]);

  return (
    <AppContext.Provider
      value={{ bg, setBg, mobileNav, setMobileNav, closeMenuBar, menuRef }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
