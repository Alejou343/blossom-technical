import { useState } from "react";
import Metrics from "./Metrics";
import Modal from "./Modal";
// import Comments from "./Comments";


const Card = ({ character }) => {
  const [isLiked, setIsLiked] = useState(character.isLiked);
  const [likes, setLikes] = useState(isLiked ? 1 : 0);
  const [openModal, setOpenModal] = useState<boolean>(false)

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-4 flex flex-col border cursor-pointer">

        {openModal && <Modal
            isOpenModal={openModal}
            setIsOpenModal={() => setOpenModal(!openModal)}
            title="Confirmar Acción"
        >
            Viendo los detalles del personaje
        </Modal>}

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
                    character.status === "alive" ? "bg-green-500" : "bg-red-500"
                }`}
                >
                    {character.status}
                </span>
            </div>
            <p className="text-gray-600 text-sm">
                {character.species} • {character.gender}
            </p>

        </div>

        {/* Sección de Interacciones */}
        <Metrics toggleLike={toggleLike} isLiked={isLiked} openModal={openModal} setOpenModal={setOpenModal} />
        {/* Sección de Comentarios */}
        {/* <Comments character={character} /> */}
    </div>
  );
};

export default Card;
