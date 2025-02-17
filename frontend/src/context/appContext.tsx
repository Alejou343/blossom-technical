import { createContext, useContext, useState, ReactNode } from "react";
import { AppContextType, Character } from "../interfaces";

// 1. Definir el tipo para los personajes

// 3. Crear el contexto con valores iniciales
const AppContext = createContext<AppContextType | undefined>(undefined);

// 4. Proveedor del contexto
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

// 5. Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};
