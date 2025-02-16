import { buildSchema } from 'graphql';

export const schema = buildSchema(`

    type Origin {
        id: ID
        name: String
        type: String
        dimension: String
    }

    type Character {
        id: ID!
        name: String
        status: String
        species: String
        type: String
        gender: String
        image: String
        origin: Origin
    }

    type Query {
        getCharactersById(id: ID!): Character
        getCharactersByPage(page: Int): [Character]
        initDB(page: Int): [Character]
        filterByProperty(property: String, value: String): [Character]
    }
`);

export const dbSchema = buildSchema(`

    type Character {
        id_character: ID
        name: String
        status: String
        species: String
        type: String
        gender: String
        origin_id: Int
        image: String
        comments: String  
        isLiked: Boolean 
        createdAt: String
        updatedAt: String
    }

    type Query {
        getCharactersByPage(page: Int): [Character]
        filterByProperty(property: String, value: String): [Character]
    }
`);