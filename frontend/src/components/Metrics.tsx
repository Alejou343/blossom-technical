import { Heart, Trash } from 'lucide-react'
import useActions from '../hooks/useActions'

const Metrics = ({ toggleLike, isLiked, isDeleted, toggleDelete }) => {

    useActions(isLiked, isDeleted);

  return (
    <div className="flex gap-[1rem] justify-start items-center px-4 py-2 border-t">

        {/* Like button */}
        <button
        onClick={toggleLike}
        className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition"
        >
            <Heart fill={isLiked ? "red" : "none"} className="w-5 h-5" />
        </button>

        {/* Soft Delete button */}
        <button className="flex items-center gap-1 text-gray-600 hover:text-red-600" onClick={toggleDelete}>
            <Trash className="w-5 h-5" />
        </button>
    </div>
  )
}

export default Metrics