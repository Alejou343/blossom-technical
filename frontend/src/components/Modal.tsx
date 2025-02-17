import { X } from "lucide-react";
import { findByIdQuery } from "../utils/queries";
import { useAppContext } from "../context/appContext";
import axios from "axios";
import { useEffect, useState } from "react";
import useCharacter from "../hooks/useCharacter";

const Modal = ({ isOpenModal, setIsOpenModal, title }) => {

    const { character, description } = useCharacter();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                {/* Close button */}
                <button onClick={() => setIsOpenModal(!isOpenModal)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                    <X className="w-5 h-5" />
                </button>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

                {/* Content */}
                <div className="mt-4 text-gray-700 flex flex-col gap-[2rem]">
                    <img src={character?.image} alt="" className="w-32 h-32 object-cover rounded-full shadow-md mx-auto" />
                    <p className="text-justify border rounded-md p-[1rem]">{description}</p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-3">
                    <button onClick={() => setIsOpenModal(!isOpenModal)} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;