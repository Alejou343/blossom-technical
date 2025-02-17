import { useEffect, useState } from 'react'
import { CircleUser, SendHorizontalIcon } from 'lucide-react'
import { useAppContext } from '../context/appContext'
import { commentQuery } from '../utils/queries'
import axios from 'axios'

const Comments = ({ character }) => {
  const [comment, setComment] = useState(character.comments || "")
  const { selected } = useAppContext()
  
  const handleComment = async () => {
      try {
          const query = commentQuery(selected, comment);
          await axios.post(import.meta.env.VITE_BACK_LINK, { query });
          window.location.reload()
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <div className="px-4 text-sm text-gray-700">
      {character.comments ? (
          <div className="flex text-gray-400 py-4 gap-[0.5rem] items-center">
            <CircleUser color='green' className="w-5 h-5" />
            <p className="rounded-md p-1 w-full"> {character.comments}</p>
          </div>
      ) : (
          <div className="flex text-gray-400 py-4 gap-[0.5rem] items-center">
            <CircleUser color='green' className="w-5 h-5" />
            <input
              type="text"
              value={comment}
              className="border border-gray-300 rounded-md p-1 w-full"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <SendHorizontalIcon color='green' className="w-5 h-5" onClick={handleComment}/>
          </div>
        )}
    </div>
  )
}

export default Comments