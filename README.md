# Buy Nothing Front End

Inspired by Buy Nothing. This is A web application for giving things away for free or finding things for free.

**Contributors**: Davee Sok, Ryan Geddes, Sarah Shatto, Jonathon Lee.

![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)

## Links and Resources

- [Front-End Website](https://buynothing-frontend.netlify.app/main)
- [Back-End Repository](https://github.com/daveeS987/buy-nothing-backend)
- [Back-End Server Url](https://buynothingbackend.herokuapp.com/)

## Project Overview

- Users can sign in or continue as guest.
- Users can upload a post with an image, description, category.
- Users can perform crud operations with their own posts.
- Users can post comments on their own post as well as other users posts.

## Architecture

- The front end uses a React Framework with Semantic UI Components.
- Axios is used to make calls to the backend
- Authentication and Authorization is handled by Auth0.
- The backend uses Node and Express to persist to a Mongo Database.
- Actual Images are stored in Cloudinary which creates an image url to be stored in our Mongo Database.

## Page Wire Frames

- [Welcome Page](./assets/wireframe/1_Welcome.pdf)
- [Home Page](./assets/wireframe/2_Home.pdf)
- [Item Details 1](./assets/wireframe/2.5_ItemDetails.pdf)
- [Item Details 2](./assets/wireframe/2.75_ItemDetailsSelectUser.pdf)
- [My Feed](./assets/wireframe/3_MyFeed.pdf)
- [Create Post](./assets/wireframe/createPost.pdf)

## Dependencies and Tools

<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/>
<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img  align="left"alt="Semantic UI" width="26px" src="./icons/semantic.png"/>
<img align="left" alt="Auth0" width="26px" src="./icons/auth0-logo.png">
<img  align="left" alt="Axios" width="26px" src="./icons/axiosimage.png"/>

</br>
<br>
<pre>
<b>Javascript ➡ React ➡ Semantic Ui ➡ Auth0 ➡ Axios </b>
</pre>

## Getting started

- Clone down this repo
- Install dependencies: `npm install`
- Create Auth0 Account: https://auth0.com/ in order to get Domain & Client ID
  - Create New Application
  - Fill out "Allowed Callback URL's" & "Allowed Logout URLs" section
- Create .env file with the following:

```
REACT_APP_API=http://localhost:5000
REACT_APP_SECRET=***this is used for verifying JWT Token and must match backend***
REACT_APP_REDIRECT=http://localhost:3000
REACT_APP_AUTHZERO_DOMAIN=**get from Auth0 website**
REACT_APP_AUTHZERO_CLIENTID=**get from Auth0 website**
```

- Clone down back-end repo and install dependencies: [Back-End Repository](https://github.com/daveeS987/buy-nothing-backend)
- Start backend server: `nodemon index.js`
- Start front end: `npm start`

## Notes while developing

```
During local production, .env file should have:
REACT_APP_API=http://localhost:5000

Switch >>>>>>>>>>>>

When Testing backend change .env:
REACT_APP_API=https://buynothingbackend.herokuapp.com or whatever your deployed backend url is

```
