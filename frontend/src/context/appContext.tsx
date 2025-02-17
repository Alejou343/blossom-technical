import { createContext, useContext, useState, ReactNode } from "react";
import { AppContextType, Character } from "../interfaces";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sort, setSort] = useState<boolean>(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selected, setSelected] = useState<number>(0);

  return (
    <AppContext.Provider value={{ sort, setSort, searchTerm, setSearchTerm, characters, setCharacters, selected, setSelected }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};
