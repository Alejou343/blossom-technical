import { useState } from "react";
import Metrics from "./Metrics";
import Modal from "./Modal";
import Comments from "./Comments";
import { useAppContext } from "../context/appContext";


const Card = ({ character }) => {
  const [isLiked, setIsLiked] = useState(character.isLiked);
  const [isDeleted, setIsDeleted] = useState(character.isDeleted);
  const [likes, setLikes] = useState(isLiked ? 1 : 0);
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { setSelected } = useAppContext()

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const toggleDelete = () => {
    setIsDeleted(!isDeleted);
  };

  return (
    <div className="max-w-sm h-auto bg-white rounded-2xl shadow-lg p-4 flex flex-col border cursor-pointer" onClick={() => setSelected(character.id_character)}>

        {openModal && <Modal
            isOpenModal={openModal}
            setIsOpenModal={() => setOpenModal(!openModal)}
            title="Descripción del personaje"
        />}

        {/* Imagen */}
        <img
            src={character.image}
            alt={character.name}
            className="w-full h-64 object-cover rounded-lg"
            onClick={() => setOpenModal(true)}
        />

        {/* Información */}
        <div className="p-4" onClick={() => setOpenModal(true)}>
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{character.name}</h2>
                <span
                className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                    character.status === "alive" ? "bg-green-500" :
                    character.status === "dead" ? "bg-red-500" :
                    "bg-gray-500"
                }`}
                >
                    {character.status}
                </span>
            </div>
            <p className="text-gray-600 text-sm text-left">
                {character.species} • {character.gender}
            </p>
        </div>

        {/* Sección de Interacciones */}
        <Metrics toggleLike={toggleLike} isLiked={isLiked} isDeleted={isDeleted} toggleDelete={toggleDelete} />
        {/* Sección de Comentarios */}
        <Comments character={character} />
    </div>
  );
};

export default Card;
