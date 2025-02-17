export const charactersQuery = `query {
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
            isDeleted
        }
    }`

export const likeQuery = (id: number, like: boolean) => {
    return `mutation {
        updateCharacter(id: ${id}, isLiked: ${like ? 1 : 0}) {
            id_character
            name
            comments
            isLiked
            isDeleted
        }
    }`
}

export const commentQuery = (id: number, comment: string) => {
    return `mutation {
        updateCharacter(id: ${id}, comments: "${comment}") {
            id_character
            name
            comments
            isLiked
            isDeleted
        }
    }`
}

export const deleteQuery = (id: number) => {
    return `mutation {
        updateCharacter(id: ${id}, isDeleted: 1) {
            id_character
            name
            comments
            isLiked
            isDeleted
        }
    }`
}

export const findByIdQuery = (id: number) => {
    return `query { 
        character(id: ${id}) {
            id_character
            name
            status
            species
            gender
            origin_id
            image
            comments
            isLiked
            isDeleted
            }
        }`
}