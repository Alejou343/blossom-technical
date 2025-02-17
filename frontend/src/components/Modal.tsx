import { X } from "lucide-react";

const Modal = ({ isOpenModal, setIsOpenModal, title, children }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                {/* Botón de cerrar */}
                <button onClick={() => setIsOpenModal(!isOpenModal)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                    <X className="w-5 h-5" />
                </button>

                {/* Título */}
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

                {/* Contenido */}
                <div className="mt-4 text-gray-700">{children}</div>

                {/* Botones */}
                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={() => setIsOpenModal(!isOpenModal)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition">
                        Cancelar
                    </button>
                    <button onClick={() => setIsOpenModal(!isOpenModal)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;