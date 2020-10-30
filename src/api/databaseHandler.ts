import firebase from 'firebase';
import { apiConfig, firebaseConfig } from './config';
import { PizzasListType, PizzaType } from '@reducers/pizzas-reducer';
import { CartType, SessionType} from '@reducers/session-reducer';

/**
 * Singleton class for handling all database interactions.
 */
export default class DatabaseHandler {
  static _instance: DatabaseHandler;
  private database: {[key: string]: any};

  private constructor() {
    if (!firebase.apps.length) {
      this.database = firebase.initializeApp(firebaseConfig).database();
    }
  }

  static GET_INSTANCE(): DatabaseHandler {
    return this._instance || (this._instance = new this());
  }

  getPizzasList(): Promise<PizzasListType> {
    const { url, mapResponse } = apiConfig.getPizzasList;

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        resolve(mapResponse(snapshot));
      }).catch((error) => {
        reject(error);
      });
    })
  }

  getSessionData(): Promise<SessionType> {
    const { url: urlTemplate, mapResponse } = apiConfig.getSessionData;
    const url = urlTemplate.replace('{sessionId}', 2);

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        resolve(mapResponse(snapshot));
      }).catch((error) => {
        reject(error);
      });
    })
  }

  updateCart(newCart: CartType): Promise<SessionType> {
    const { url: urlTemplate } = apiConfig.addToCart;
    const url = urlTemplate.replace('{sessionId}', 2);

    return new Promise((resolve, reject) => {
      this.database.ref(`${url}`).set(newCart, (error) => {
        if (error) {
          reject(error);
        }

        this.getSessionData().then((data) => {
            resolve(data);
          }).catch((error) => {
            reject(error);
          })
        });
    });
  }
}
