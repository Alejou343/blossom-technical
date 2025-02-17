# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Alejou343/blossom-technical.git
    cd frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the development server:**
    ```sh
    npm run dev
    ```

4. **Build for production:**
    ```sh
    npm run build
    ```

5. **Preview the production build:**
    ```sh
    npm run serve
    ```

## Project Structure

- `src/`: Contains the project's source code.
  - `components/`: Reusable React components.
  - `context/`: Global application context.
  - `interfaces/`: Data type descriptions in the application.
  - `utils/`: GraphQL queries to interact with APIs.
  - `App.jsx`: Main application component.
  - `main.jsx`: Application entry point.

## Available Plugins

Currently, there are two official plugins available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint Rules

This project includes some basic ESLint rules to help maintain code quality. You can customize these rules in the `.eslintrc` file.

## License

This project is licensed under the MIT License.
