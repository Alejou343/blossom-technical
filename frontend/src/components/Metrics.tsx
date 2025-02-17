import axios from 'axios'
import { Heart, Trash } from 'lucide-react'
import { useEffect } from 'react'
import { deleteQuery, likeQuery } from '../utils/queries'
import { useAppContext } from '../context/appContext'

const Metrics = ({ toggleLike, isLiked, isDeleted, toggleDelete }) => {

    const { selected } = useAppContext()

    useEffect(() => {
        const handleLike = async () => {
            try {
                const query = likeQuery(selected, isLiked);
                await axios.post(import.meta.env.VITE_BACK_LINK, { query });
            } catch (err) {
                console.log(err);
            }
        };
        handleLike();
    }, [isLiked]);

    useEffect(() => {
        const handleDelete = async () => {
            if (!isDeleted) return;
            try {
                const query = deleteQuery(selected);
                await axios.post(import.meta.env.VITE_BACK_LINK, { query });
                window.location.reload();
            } catch (err) {
                console.log(err);
            }
        };
        handleDelete();
    }, [isDeleted]);

  return (
    <div className="flex gap-[1rem] justify-start items-center px-4 py-2 border-t">

        {/* Botón de Like */}
        <button
        onClick={toggleLike}
        className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition"
        >
            <Heart fill={isLiked ? "red" : "none"} className="w-5 h-5" />
        </button>

        {/* Botón de Soft Delete */}
        <button className="flex items-center gap-1 text-gray-600 hover:text-red-600" onClick={toggleDelete}>
            <Trash className="w-5 h-5" />
        </button>
    </div>
  )
}

export default Metrics