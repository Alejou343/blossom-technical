import axios from "axios";
import { GRAPHQL_ENDPOINT } from '../config/config';
import { characters } from "../models/characters.model";
import MigrationServiceController from '../services/migrationService'


export const resolvers = {
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

            for (const character of responses.slice(0,15)) {
                await MigrationServiceController.migrateCharacters(character)
            }

            return responses;
        } catch (err) {
            console.error(err)
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
                await MigrationServiceController.migrateCharacters(character)
            }

            return responses;
        } catch (err) {
            console.error(err)
            return []
        }
    }
};
