import { useState } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { commentQuery } from "../utils/queries";

const useComment = (initialComment = "") => {
  const [comment, setComment] = useState<string>(initialComment);
  const { selected } = useAppContext();

  const handleComment = async () => {
    try {
      const query = commentQuery(selected, comment);
      await axios.post(import.meta.env.VITE_BACK_LINK, { query });
      window.location.reload();
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  return { comment, setComment, handleComment };
};

export default useComment;
