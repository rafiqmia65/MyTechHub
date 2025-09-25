import { MongoClient, Db } from "mongodb";

declare global {
  // Keep a global reference to the client in development to support HMR
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!process.env.MONGODB_CONNECTION_STRING) {
  throw new Error(
    'Invalid or missing environment variable: "MONGODB_CONNECTION_STRING"'
  );
}

const uri: string = process.env.MONGODB_CONNECTION_STRING;
const options = {};

let client: MongoClient;
let mongoClientPromise: Promise<MongoClient>;

if (process.env.ENVIRONMENT === "development") {
  // Reuse the existing client connection in development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongoClientPromise!;
} else {
  // Always create a new client connection in production
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

/**
 * Establish a connection to MongoDB and return the database instance.
 */
export async function dbConnect(): Promise<Db> {
  const connectedClient = await mongoClientPromise;
  console.log("MongoDB Connected");
  return connectedClient.db(); // Returns the default database
}

export default mongoClientPromise;
