# Buy Nothing

Inspired by Buy Nothing,This is A web application for giving things away for free or finding things for free.

**Contributors**: Davee Sok, Ryan Geddes, Sarah Shatto, Jonathon Lee.

**Version**: 1.0.0
<br>
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/jonnyleealas/ohnologger)

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
- Authentication and Authorization is handled by Auth0. - The backend uses Node and Express to persist to a Mongo Database.
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
<img align="left" alt="Node.js" width="26px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ict.social%2Fimages%2F5728%2Fnodejs_logo.png&f=1&nofb=1"/>
<img align="left" alt="Mongo" width="26px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Fmongodb-3-1175138.png&f=1&nofb=1"/>
<img align="left" alt="Auth0" width="26px" src="./icons/auth0-logo.png">
<img  align="left" alt="Axios" width="26px" src="./icons/axiosimage.png"/>
<img  align="left" alt="Cloudinary" width="26px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcloudinary-res.cloudinary.com%2Fimage%2Fupload%2Fc_scale%2Cfl_attachment%2Cw_500%2Fv1%2Flogo%2Ffor_white_bg%2Fcloudinary_icon_for_white_bg.png&f=1&nofb=1"/>

</br>
</br>
<pre>
<b>Javascript ➡ React ➡ Semantic Ui ➡ NodeJS ➡ MongoDB ➡ Auth0 ➡ Axios ➡ Cloudinary </b>

</pre>

## Getting started

#

# Our notes while developing

```
During local production, .env file should have:
REACT_APP_API=http://localhost:5000
REACT_APP_SECRET= *****
REACT_APP_REDIRECT=http://localhost:3000

Switch >>>>>>>>>>>>

When Testing backend change .env:
REACT_APP_API=https://buynothingbackend.herokuapp.com

```
