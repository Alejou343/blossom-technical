import { CircleUser } from 'lucide-react'

const Comments = ({ character }) => {
  return (
    <div className="px-4 py-2 text-sm text-gray-700">
            <h3 className="font-semibold text-gray-800">Comentarios:</h3>
            {character.comments ? (
                <div className="flex text-gray-400 py-4 gap-[0.5rem] items-center">
                  <CircleUser color='green' className="w-5 h-5" />
                  <p className="text-sm mt-2 flex items-center"> {character.comments}</p>
                </div>
            ) : (
                <div className="flex text-gray-400 py-4">
                  <p className="text-sm mt-2">Sé el primero en comentar</p>
                </div>
        )}
    </div>
  )
}

export default Comments