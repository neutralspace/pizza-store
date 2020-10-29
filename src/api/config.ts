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
  }
}