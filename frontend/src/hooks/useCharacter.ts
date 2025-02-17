import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { findByIdQuery } from "../utils/queries";
import { Character } from "../interfaces";

const useCharacter = () => {
  const { selected } = useAppContext();
  const [description, setDescription] = useState("");
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const query = findByIdQuery(selected);
        const response = await axios.post(import.meta.env.VITE_BACK_LINK, { query });

        if (response.data) {
          const result = await axios.post(import.meta.env.VITE_SERVER_LINK, {
            text: response.data.data.character
          });

          setCharacter(response.data.data.character);

          setTimeout(() => {
            setDescription(result.data.message);
          }, 1000);
        }
      } catch (err) {
        console.error("Error fetching character:", err);
      }
    };

    fetchCharacter();
  }, [selected]);

  return { character, description };
};

export default useCharacter;