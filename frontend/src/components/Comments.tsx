import React from 'react'
import { MessageCircle } from 'lucide-react'

const Comments = ({ character }) => {
  return (
    <div className="px-4 py-2 text-sm text-gray-700">
            <h3 className="font-semibold text-gray-800">Comentarios:</h3>
            {character.comments ? (
                <p className="mt-1 text-gray-600">• {character.comments}</p>
            ) : (
                <div className="flex flex-col items-center text-gray-400 py-4">
                <MessageCircle className="w-10 h-10 opacity-50" />
                <p className="text-sm mt-2">Sé el primero en comentar</p>
                </div>
        )}
    </div>
  )
}

export default Comments