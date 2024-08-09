### 4. **Deliver Jokes Microservice (Nest.js)**

**Filename**: `README.md`

# Deliver Jokes Microservice

This microservice delivers a random joke to users upon request. The jokes are stored in a MySQL database and can be filtered by type.

## Technologies Used

- Nest.js
- MySQL
- TypeScript

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- MySQL

## Installation

1. Clone the repository:

  ```bash
  git clone <repository_url>
  cd jokes-deliver-microservice
  ```
2. Install dependencies:

  ```bash
  npm install
  ```
3. Set up environment variables:

Create a .env file in the root directory with the following variables:
  
  ```bash
  PORT=3003
  FRONTEND_APP_URL=http://localhost:3000
  ```
## Running the Application

Start the Nest.js application:

  ```bash
  npm run start
  ```
The microservice will run at http://localhost:3001.

## API Endpoints

- GET /jokes/random: Fetch a random joke.
- GET /jokes/types: Fetch all joke types.
- POST /jokes: Submit a new joke.
  
## Testing

To run tests:

  ```bash
  npm run test
  ```

## Deployment

Deploy the microservice on your preferred cloud service or container platform.
