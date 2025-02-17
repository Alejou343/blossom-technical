import { useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { deleteQuery, likeQuery } from "../utils/queries";

const useActions = (isLiked: boolean, isDeleted: boolean) => {
  const { selected } = useAppContext();

  useEffect(() => {
    const handleLike = async () => {
      if (isLiked === undefined) return;

      try {
        const query = likeQuery(selected);
        await axios.post(import.meta.env.VITE_BACK_LINK, { query });
      } catch (err) {
        console.error("Error in like action:", err);
      }
    };

    handleLike();
  }, [isLiked, selected]);

  useEffect(() => {
    const handleDelete = async () => {
      if (!isDeleted) return;

      try {
        const query = deleteQuery(selected);
        await axios.post(import.meta.env.VITE_BACK_LINK, { query });
        window.location.reload();
      } catch (err) {
        console.error("Error in delete action:", err);
      }
    };

    handleDelete();
  }, [isDeleted, selected]);
};

export default useActions;
