
# Banking App Assignment

## Screenshots

<details>
  <summary>Click to view screenshots</summary>
  
  ![image](https://github.com/user-attachments/assets/df383275-c5ee-43fd-8d4e-3afcc610ef23)

![image](https://github.com/user-attachments/assets/7b80468b-16ce-448d-8b7e-daec2e6339d8)

![image](https://github.com/user-attachments/assets/08a61708-02af-417c-9fbe-d6ace0a484b7)



</details>

<details>
  <summary>Click to view postman collection</summary>
  
  Link - https://api.postman.com/collections/20644686-7538da32-d01d-42a7-9537-4b982f564b88?access_key=PMAT-01J4YPYAR61KH786053QNHYW06

</details>

A simple banking application that allows users to deposit and withdraw money. This project is structured with a frontend client and a backend server.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.0.0 or higher
- **npm** or **yarn**: Package manager
- **PostgreSQL**: Version 12 or higher

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Stroller15/banking-app-assignment.git
   cd banking-app-assignment
   ```

2. **Install dependencies** for both the client and server:

   ```bash
   # For the server
   cd server
   npm install
   # or
   yarn install

   # For the client
   cd ../client
   npm install
   # or
   yarn install
   ```

## Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```env
# Server environment variables

PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

For the client, you might need a `.env` file too:

```env
# Client environment variables

REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Project

1. **Start the PostgreSQL** service and create a database for the project.

2. **Start the backend** server:

   ```bash
   cd server
   npm start
   # or
   yarn start
   ```

3. **Start the frontend** development server:

   ```bash
   cd ../client
   npm start
   # or
   yarn start
   ```

4. **Access the application**:

   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000/api`

## Technologies Used

- **Frontend**: React
- **Database**: PostgreSQL
- **ORM**: Prisma 
- **Authentication**: JWT 


