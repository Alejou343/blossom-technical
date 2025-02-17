import axios from 'axios'
import { useEffect } from 'react'
import Card from './components/Card'
import Sort from './components/Sort'
import { useAppContext } from './context/appContext'
import './App.css'
import { charactersQuery } from './utils/queries'
import { Character } from './interfaces'

function App() {
  const { characters, setCharacters, sort, searchTerm } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = charactersQuery;
            const response = await axios.post(import.meta.env.VITE_BACK_LINK, { query })
          setCharacters(response.data.data.characters)
        } catch (err) {
          console.log(err)
          setCharacters([])
        }
      }
    fetchData()
  }, [])

  return (
    <div>
      <div className='h-[90vh] overflow-y-auto px-[0.5rem]'>
        <Sort />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] overflow-y-auto">
          {characters
          .sort((a: Character, b: Character) => sort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
          .filter((character: Character) => !character.isDeleted)
          .filter((character: Character) => {
            const search = searchTerm.trim().toLowerCase();
            
            return (
              (character.name?.toLowerCase().includes(search) ||
              character.status?.toLowerCase().includes(search) ||
              character.species?.toLowerCase().includes(search) ||
              character.gender?.toLowerCase().includes(search)) ?? false
            );
          })
          .map((character: Character) => 
            <Card key={character.id_character} character={{
            id_character: character.id_character,
            name: character.name.length > 10 ? `${character.name.slice(0,10)}...` : character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin_id: character.origin_id,
            image: character.image,
            comments: character.comments,
            isLiked: character.isLiked
            }} /> 
          )}
        </div>
      </div>
    </div>
  )
}

export default App
