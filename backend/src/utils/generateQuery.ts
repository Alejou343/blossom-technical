export const generateQuery = () => `query { 
    getCharactersByPage(page: ${Math.floor(Math.random() * 21)}) { 
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
}`
