export interface Character {
    id_character: string,
    name: string,
    status: "alive" | "dead" | "unknown",
    species: string,
    gender: "female" | "male" | "genderless" | "unknown",
    origin_id: number,
    image: string,
    comments: string | null,
    isLiked: boolean | null,
    isDeleted: boolean | null
}

export interface AppContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sort: boolean;
  setSort: (asc: boolean) => void;
  characters: Character[];
  setCharacters: (chars: Character[]) => void;
  selected: number;
  setSelected: (id: number) => void
}
