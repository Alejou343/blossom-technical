# Blossom Technical Backend

This is the backend repository for Blossom Technical, which uses a GraphQL API.

## Requirements

- Node.js >= 14.x  
- npm >= 6.x  

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Alejou343/blossom-technical.git
    ```
2. Navigate to the project directory:
    ```sh
    cd blossom_technical/backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

### Environment Variables Configuration

Create a `.env` file in the project's root directory and add the following environment variables:

```
PORT = 8080
FRONTEND_URL = http://localhost:5173
BACKEND_URL = http://localhost:8080
GRAPHQL_ENDPOINT = https://rickandmortyapi.com/graphql
DB_NAME = BlossomTest
DB_USER = root
DB_PASSWORD = your_password
DB_HOST = localhost
```

To start the development server, run:
```sh
npm run dev
```

The server will be available at `http://localhost:8080`.

## Example Queries (Data Migration to DB)

### Retrieve and migrate characters by page
```graphql
query { 
    getCharactersByPage(page: 22) { 
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
```

### Filter and migrate characters by properties
```graphql
query { 
    filterByProperty(property: "name", value: "Rick") { 
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
```

## Example Queries (Fetching Data from DB)

### Retrieve all characters
```graphql
query {
    characters {
        id_character
        name
        status
        species
        gender
        image
        comments
        isLiked
        origin {
            id_origin
            name
            type
            dimension
        }
    }
}
```

### Retrieve a character by ID
```graphql
query {
    character(id: 1) {
        id_character
        name
        status
        species
        gender
        image
        comments
        isLiked
        origin {
            id_origin
            name
            type
            dimension
        }
    }
}
```

### Update character values
```graphql
mutation {
    updateCharacter(id: 1, comments: "This character is amazing", isLiked: 1) {
        id_character
        name
        comments
        isLiked
    }
}
```

## Contributing

1. Fork the project.  
2. Create a new branch (`git checkout -b feature/new-feature`).  
3. Make your changes and commit (`git commit -am 'Add new feature'`).  
4. Push your changes (`git push origin feature/new-feature`).  
5. Open a Pull Request.  

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.