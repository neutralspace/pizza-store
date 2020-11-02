# pizza-store


Site page: https://neutralspace.github.io/pizza-store/

A small app representing an imaginary pizza shop.

Used technology stack is React, Typescript, Redux dataflow approach with thunks for asyncs, sass for styles.

Here are some details:

- Backend part is implemented via Firebase Web API and DatabaseHandler class, the latter performs some of backend logic in itself - in means of simplicity. Further improvements can include moving to Firebase REST format and separating DatabaseHandler backend-specific logic to the cloud functions mechanism;
- Keeping track of user session uses cookie technology. In current implementation, session consists of cart state and currency choice, whereas user-specific info (like order history) is stored separately. This logic can be remastered to have an ability to bind currency settings and cart state to user account.

Things for further implementing:
- Ability to sign out. Currently, once user has signed up, it is possible to sign out only loading new browser session;
- Add checkout form indication of success. Right now, if no validation errors occurs, it saves order to history if user is signed in;
- Add loader to all pages stoping it from content blinks;
- Add actions for errors handling;
- Add ability to repeat orders from history.
