import dotenv from 'dotenv';


dotenv.config();

if(!process.env.MONGO_URI) {
  throw new Error("MNGO_URI is not defined in env variable");
} // it's mean if not define then throw error - quality improve


const config ={
  MONGO_URI: process.env.MONGO_URI
}

export default config;