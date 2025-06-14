import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI // your MongoDB connection string
const options = {}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable to maintain the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production, create a new client for every connection
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
