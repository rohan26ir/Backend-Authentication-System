


Step by Step:

1. setup the Project
   - npm init -y  //Initialize the Project
   - npm i express mongoose // Install Dependencies
   - npm i morgar //morgan for 
   - npm i dotenv  //dotenv for security
   - connect mongodb

## Package Purpose:
express → Backend framework
mongoose → MongoDB ODM
morgan → Request logger (middleware)
dotenv → Manage environment variables securely

## package.js setup
  
  - go to package.json
  - add: "type": "module"
  - add: "dev": "npx nodemon server.js"  //run server: npm run debv

## connect mongodb
  
  - Go to MongoDB Atlas
  - Create a new project
  - Create a cluster
  - Configure database access:
    -- Add a username & password
  - Network access:
    -- Add IP: 0.0.0.0 (allow all IPs)
  - Connect your database:
    -- Copy your connection string





## Environment Variables(.env)

 - MONGO_URI=mongodb+srv://<username>:<password>@cluster-url.mongodb.net/



