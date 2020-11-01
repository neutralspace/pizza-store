export const firebaseConfig = {
  apiKey: "AIzaSyBPWZIwv-G1xAO3F9NdAWFcXxgM6rPTLxw",
  authDomain: "coolpizzasstore.firebaseapp.com",
  databaseURL: "https://coolpizzasstore.firebaseio.com",
  projectId: "coolpizzasstore",
  storageBucket: "coolpizzasstore.appspot.com",
  messagingSenderId: "660399626549",
  appId: "1:660399626549:web:698939cb3f0eeb6207147c"
};

export const apiConfig = {
  getPizzasList: {
    url: '/pizzas',
    mapResponse: (response) => {
      if (!response) return null;
      return response.val();
    }
  },
  getSessionData: {
    url: '/sessions/{sessionId}',
    mapResponse: (response) => {
      if (!response) return null;
      return response.val();
    }
  },
  setSessionData: {
    url: '/sessions/{sessionId}',
  },
  createSessionId: {
    url: '/sessions/',
    mapResponse: (response) => {
      if (!response) return null;
      return String(response.numChildren() + 1);
    }
  },
  updateCart: {
    url: '/sessions/{sessionId}/cart',
  },
  authorizeAndGetUserData: {
    url: '/users/{userId}',
    mapResponse: (response, password) => {
      if (!response) return null;

      const responseData = response.val();
      console.log(responseData);
      if (!Boolean(responseData?.password)
          || String(responseData?.password) !== String(password)) return null;
      return responseData;
    }
  },
  setUserData: {
    url: '/users/{userId}',
  },
  checkIfUserExists: {
    url: '/users/{userId}',
    mapResponse: (response) => {
      if (!response) return null;

      return Boolean(response.val());
    }
  },
  getUserData: {
    url: '/users/{userId}',
    mapResponse: (response) => {
      if (!response) return null;
      return response.val();
    }
  },
}