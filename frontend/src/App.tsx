import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import Sort from './components/Sort'
import './App.css'

function App() {
  const [characters, setCharacters] = useState<any>([])
  const [sort, setSort] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const query = `query {
        characters {
            id_character
            name
            status
            species
            gender
            origin_id
            image
            comments
            isLiked
        }
      }`
      try {
          const response = await axios.post(`http://localhost:8080/db/graphql`, { query })
          setCharacters(response.data.data.characters)
        } catch (err) {
          console.log(err)
          setCharacters([])
        }
      }
    fetchData()
  }, [])

  return (
    <>
      <Sort sort={sort} setSort={setSort} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
        {characters
        .sort((a: any, b: any) => sort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        .map((character: any) => 
          <Card character={{
          id_character: character.id_character,
          name: character.name.length > 15 ? `${character.name.slice(0,15)}...` : character.name,
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
    </>
  )
}

export default App
