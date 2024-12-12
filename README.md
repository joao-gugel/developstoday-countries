## Countries App

Welcome to this full-stack countries App.

#### Project Structure

- **/BE**: The backend in Node.js, provides an API to access country data.

  - Available Routes:
    - `/countries`: Returns a list of countries.
    - `/countries/:countryCode`: Returns detailed information about a specific country by its `code`.

- **/FE**: The frontend in Next.js, used to display the data in an interactive and dynamic way.

## Requirements

- Node.js (LTS version recommended)
- npm or yarn

## Running the Backend (API)

1. Navigate to the `/be` directory:

   ```bash
   cd be
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run in development mode:
   `bash
npm run dev
`
   The backend will be available by default at http://localhost:8000.

4. To run the production mode, use:
   ```bash
   npm run build
   npm start
   ```

## Running the Frontend (Client)

1. Navigate to the `/fe` directory:

   ```bash
   cd fe
   ```

2. Add api url creating a ` .env` file following the `.env.example`

   ```
   NEXT_PUBLIC_API_URL="http://localhost:8000"
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run in development mode:
   `bash
npm run dev
`
   The backend will be available by default at http://localhost:8000.

5. To run the production mode, use:
   `bash
npm run build
npm start
`
   The frontend will be available by default at http://localhost:3000.
