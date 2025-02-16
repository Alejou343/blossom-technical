import { ICharacter } from "@interfaces/ICharacter";
import { characters } from "../models/characters.model";
import { locations } from "../models/locations.model";

class MigrationServiceController {
    constructor() {}

    async migrateCharacters(character: ICharacter) {
        try {
            await locations.findOrCreate({
                where: { name: character.origin?.name },
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
                gender: character.gender,
                image: character.image,
                origin_id: character.origin?.id ?? 99
            });
        } catch (err) {
            console.error(err)
        }
    }
}

export default new MigrationServiceController()