import React from 'react'
import { Heart, Info, MessageCircle, Trash } from 'lucide-react'
import Modal from './Modal'

const Metrics = ({ toggleLike, isLiked, openModal, setOpenModal }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-t">

        {openModal && <Modal
            isOpenModal={openModal}
            setIsOpenModal={() => setOpenModal(!openModal)}
            title="Confirmar Acción 2"
        >
            ¿Estás seguro de que deseas eliminar este personaje?
        </Modal>}

        {/* Botón de Like */}
        <button
        onClick={toggleLike}
        className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition"
        >
            <Heart fill={isLiked ? "red" : "none"} className="w-5 h-5" />
        </button>

        {/* Botón de Comentarios */}
        <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
            <MessageCircle className="w-5 h-5" />
        </button>

        {/* Botón de Soft Delete */}
        <button className="flex items-center gap-1 text-gray-600 hover:text-red-600" onClick={() => setOpenModal(!openModal)}>
            <Trash className="w-5 h-5" />
        </button>
    </div>
  )
}

export default Metrics