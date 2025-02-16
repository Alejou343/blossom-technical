import axios from "axios";
// import MigrationController from "../services/migrationService";
import { GRAPHQL_ENDPOINT } from '../config/config';
import { characters } from "../models/characters.model";
import { locations } from "../models/locations.model";


export const resolvers = {
    getCharactersById: async ({ id }) => {
        try {
            const character = await characters.findByPk(id);
            if (!character) return null;   
            console.log(character.dataValues)
            return character;
        } catch (err) {
            console.log(err);
            return null;
        }
    },    
    initDB: async ({ page }) => {
        try {
            const response = await axios.get(GRAPHQL_ENDPOINT, {
                params: {
                    query: `{ 
                    characters(page: ${page}) { 
                        results { 
                            id 
                            name 
                            status 
                            species 
                            gender 
                            image 
                            origin { 
                                id 
                                name 
                                type 
                                dimension
                            } 
                        } 
                    } 
                }`},
            });
            const responses = response.data.data.characters.results;
            if (!characters) return [];

            for (const character of responses.slice(0,15)) {

                await locations.findOrCreate({
                    where: { name: character.origin?.name }, // Buscar por nombre
                    defaults: {
                        id_origin: character.origin?.id ?? 99,
                        type: character.origin?.type ?? 'unknown',
                        dimension: character.origin?.dimension ?? 'unknown'
                    }
                });

                await characters.create({
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    type: character.type,
                    gender: character.gender,
                    image: character.image,
                    origin_id: character.origin?.id ?? 99
                });
            }

            return responses;
        } catch (err) {
            console.log(err)
            return []
        }
    },
    getCharactersByPage: async ({ page }) => {
        try {
            const response = await axios.get(GRAPHQL_ENDPOINT, {
                params: {
                    query: `{ 
                    characters(page: ${page}) { 
                        results { 
                            id 
                            name 
                            status 
                            species 
                            gender 
                            image 
                            origin { 
                                id 
                                name 
                                type 
                                dimension
                            } 
                        } 
                    } 
                }`},
            });
            const responses = response.data.data.characters.results;
            if (!characters) return [];
            return responses;
        } catch (err) {
            console.log(err)
            return []
        }
    },
    filterByProperty: async ({ property, value }) => {
        try {
            const response = await axios.get(GRAPHQL_ENDPOINT, {

                params: {
                    query: `{ 
                    characters(filter: { ${property}: "${value}" }) { 
                        info {
                        count
                        }
                        results { 
                            id 
                            name 
                            status 
                            species 
                            gender 
                            image 
                            origin { 
                                id 
                                name 
                                type 
                                dimension
                            } 
                        } 
                    } 
                }`},
            });
            const responses = response.data.data.characters.results;
            if (!responses) return [];

            for (const character of responses.slice(0,15)) {

                await locations.findOrCreate({
                    where: { name: character.origin?.name }, // Buscar por nombre
                    defaults: {
                        id_origin: character.origin?.id ?? 99,
                        type: character.origin?.type ?? 'unknown',
                        dimension: character.origin?.dimension ?? 'unknown'
                    }
                });

                await characters.create({
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    type: character.type,
                    gender: character.gender,
                    image: character.image,
                    origin_id: character.origin?.id ?? 99
                });
            }

            return responses;
        } catch (err) {
            console.log(err)
            return []
        }
    }
};
