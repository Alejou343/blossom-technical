import { X } from "lucide-react";
import { findByIdQuery } from "../utils/queries";
import { useAppContext } from "../context/appContext";
import axios from "axios";
import { useEffect, useState } from "react";

const Modal = ({ isOpenModal, setIsOpenModal, title }) => {

    const { selected } = useAppContext()
    const [description, setDescription] = useState("")
    const [character, setCharacter] = useState<any>({})

    useEffect(() => {
        const handleLike = async () => {
            try {
                const query = findByIdQuery(selected);
                const response = await axios.post(import.meta.env.VITE_BACK_LINK, { query });
                if (response.data) {
                    const result: any = await axios.post(import.meta.env.VITE_SERVER_LINK, {
                        text: response.data.data.character
                    })
                    setCharacter(response.data.data.character)
                    setTimeout(() => {
                        setDescription(result.data.message)
                    }, 1000);
                }
            } catch (err) {
                console.log(err);
            }
        };
        handleLike();
    }, [selected]);

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
                <div className="mt-4 text-gray-700 flex flex-col gap-[2rem]">
                    <img src={character.image} alt="" className="w-32 h-32 object-cover rounded-full shadow-md mx-auto" />
                    <p className="text-justify border rounded-md p-[1rem]">{description}</p>
                </div>

                {/* Botones */}
                <div className="mt-6 flex justify-center gap-3">
                    <button onClick={() => setIsOpenModal(!isOpenModal)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;