import firebase from 'firebase';
import { apiConfig, firebaseConfig } from './config';
import { PizzasListType } from '../reducers/pizzas-reducer';

/**
 * Singleton class for handling all database interactions.
 */
export default class DatabaseHandler {
  static _instance: DatabaseHandler;
  private database: {[key: string]: any};

  private constructor() {
    this.database = firebase.initializeApp(firebaseConfig).database();
  }

  static GET_INSTANCE(): DatabaseHandler {
    return this._instance || new this();
  }

  getPizzasList(): Promise<PizzasListType> {
    const { url, mapResponse } = apiConfig.getPizzasList;

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        resolve(mapResponse(snapshot));
      }).catch(() => {
        reject();
      });
    })

  }


}