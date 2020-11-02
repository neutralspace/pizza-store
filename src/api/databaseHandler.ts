import firebase from 'firebase';
import { apiConfig, firebaseConfig } from './config';
import { PizzasListType } from '@reducers/pizzas-reducer';
import { CartType, SessionType, defaultSessionState } from '@reducers/session-reducer';
import { UserDataType} from '@reducers/user-reducer';
import {CURRENCY_TYPES} from '../reducers/session-reducer';

/**
 * Singleton class for handling all database interactions.
 */
export default class DatabaseHandler {
  private static _instance: DatabaseHandler;
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

  getSessionData(sessionId?: string): Promise<SessionType> {
    const { url: urlTemplate, mapResponse } = apiConfig.getSessionData;
    const url = urlTemplate.replace('{sessionId}', sessionId);

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        resolve(mapResponse(snapshot));
      }).catch((error) => {
        reject(error);
      });
    })
  }

  changeCurrency(sessionId?: string, newCurrency?: CURRENCY_TYPES): Promise<SessionType> {
    const { url: urlTemplate } = apiConfig.changeCurrency;
    const url = urlTemplate.replace('{sessionId}', sessionId);

    return new Promise((resolve, reject) => {
      this.database.ref(url).set(newCurrency, (error) => {
        if (error) {
          reject(error);
        }

        this.getSessionData(sessionId).then((data) => {
          resolve(data);
        }).catch((error) => {
          reject(error);
        })
      });
    });
  }

  createSession(): Promise<SessionType> {
    const { url, mapResponse } = apiConfig.createSessionId;

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        const newSessionId = mapResponse(snapshot);

        if (!newSessionId) reject();

        this.setSessionData(newSessionId, {
          ...defaultSessionState,
          id: newSessionId,
        }).then((newSession) => {
          resolve(newSession);
        }).catch((error) => {
          reject(error);
        });
      }).catch((error) => {
        reject(error);
      });
    })
  }

  setSessionData(sessionId: string, newSessionData: SessionType): Promise<SessionType> {
    const { url: urlTemplate } = apiConfig.setSessionData;
    const url = urlTemplate.replace('{sessionId}', sessionId);

    return new Promise((resolve, reject) => {
      this.database.ref(url).set(newSessionData, (error) => {
        if (error) {
          reject(error);
        }

        this.getSessionData(sessionId).then((data) => {
          resolve(data);
        }).catch((error) => {
          reject(error);
        })
      });
    });
  }

  updateCart(sessionId: string, newCart: CartType): Promise<SessionType> {
    const { url: urlTemplate } = apiConfig.updateCart;
    const url = urlTemplate.replace('{sessionId}', sessionId);

    return new Promise((resolve, reject) => {
      this.database.ref(`${url}`).set(newCart, (error) => {
        if (error) {
          reject(error);
        }

        this.getSessionData(sessionId).then((data) => {
            resolve(data);
          }).catch((error) => {
            reject(error);
          })
        });
    });
  }

  authorizeAndGetUserData(email: string, password: string): Promise<UserDataType> {
    const { url: urlTemplate, mapResponse } = apiConfig.getUserData;
    const userId = email?.replace(/\./g, '*');
    const url = urlTemplate.replace('{userId}', userId);

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        resolve(mapResponse(snapshot, password));
      }).catch((error) => {
        reject(error);
      });
    })
  }

  getUserData(email: string, password: string): Promise<UserDataType> {
    const { url: urlTemplate, mapResponse } = apiConfig.getUserData;
    const userId = email?.replace(/\./g, '*');
    const url = urlTemplate.replace('{userId}', userId);

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        resolve(mapResponse(snapshot, password));
      }).catch((error) => {
        reject(error);
      });
    })
  }

  setUserData(email: string, password: string, name: string, surname: string): Promise<UserDataType> {
    const {url: urlTemplate } = apiConfig.setUserData;
    const userId = email?.replace(/\./g, '*');
    const url = urlTemplate.replace('{userId}', userId);

    return new Promise((resolve, reject) => {
      this.database.ref(`${url}`).set({
        id: userId,
        email,
        password,
        name,
        surname,
      }, (error) => {
        if (error) {
          reject(error);
        }
      });
    });
  }

  checkIfUserExists(email: string): Promise<boolean> {
    const { url: urlTemplate, mapResponse } = apiConfig.checkIfUserExists;
    const userId = email?.replace(/\./g, '*');
    const url = urlTemplate.replace('{userId}', userId);

    return new Promise((resolve, reject) => {
      this.database.ref(url).once('value').then((snapshot) => {
        resolve(mapResponse(snapshot));
      }).catch((error) => {
        reject(error);
      });
    })
  }

  addToOrderHistory(userId: string, order: CartType): Promise<UserDataType> {
    const {url: urlTemplate } = apiConfig.addToOrderHistory;
    const orderId = String(Date.now());
    const url = urlTemplate.replace('{userId}', userId)
                           .replace('{orderId}', orderId);

    console.log(url, order);

    return new Promise((resolve, reject) => {
      this.database.ref(`${url}`).set(order, (error) => {
        if (error) {
          reject(error);
        }

        resolve();
      });
    });
  }
}
