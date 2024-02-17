import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

// modified code for better

export class AuthService {
  client = new Client();
  account;

  constructor(client) {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method
        return this.loginUser({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error('Appwrite service :: createAccount :: error', error);
      throw new Error('Failed to create account');
    }
  }

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite serive :: getCurrentUser :: error', error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.log('Appwrite serive :: logout :: error', error);
    }
  }
}

const authservice = new AuthService();

export default authservice;

// * Appwrite doc code for authentication

// const client = new Client()
//   .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//   .setProject('<PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(
//   function (response) {
//     console.log(response); // Success
//   },
//   function (error) {
//     console.log(error); // Failure
//   }
// );
