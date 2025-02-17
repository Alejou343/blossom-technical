import { createContext, useContext, useState, ReactNode } from "react";

// 1. Definir el tipo para los personajes
interface Character {
  id: number;
  name: string;
}

// 2. Definir el tipo para el contexto
interface AppContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sort: boolean;
  setSort: (asc: boolean) => void;
  characters: Character[];
  setCharacters: (chars: Character[]) => void;
}

// 3. Crear el contexto con valores iniciales
const AppContext = createContext<AppContextType | undefined>(undefined);

// 4. Proveedor del contexto
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sort, setSort] = useState<boolean>(true);
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <AppContext.Provider value={{ sort, setSort, searchTerm, setSearchTerm, characters, setCharacters }}>
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
