import { IOrigin } from "./IOrigin"

export interface ICharacter {
    id: number
    name: string 
    status: 'alive' | 'dead' | 'unknown'
    species: string 
    gender: 'female' | 'male' | 'genderless' | 'unknown'
    origin_id: string 
    image: string 
    comments: string 
    isLiked: boolean
    createdAt?: Date
    updatedAt?: Date
    origin: IOrigin
}

