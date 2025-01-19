import { Client, Account } from "react-native-appwrite";

const client = new Client()
  .setProject(process.env.API_KEY)
  .setPlatform(process.env.API_URL);
const account = new Account(client);

export { client, account };
