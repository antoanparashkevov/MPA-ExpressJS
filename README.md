# Accommodation Service
Type `npm i` to install all dependencies locally, then `npm start` to start the development server provided by <strong>nodemon</strong>. Then go to http://localhost:8000
   
# Table of Contents
- <a href="#about">About</a>
- <a href="#features">Features</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#tools">Tools</a>
- <a href="#application-pictures">Application Pictures</a>


# <p id="about">About this project</p>

Accommodation service provides quick and easy access to hotel listings in and outside Bulgaria. Any user can register to the website and then to host your own poster. 

# <p id="features">Features</p>

- <strong>Authentication</strong>
    - Login
        - log in with existing account

    - Register
        - create new account

- <strong>Accommodations</strong>
    - User
        - browse all listed posters
        - search for a certain post by providing a name
        - search for a certain post by location
        - search for a certain post by lowest and highest price
        - host own post
        - view detailed information about each post
        - edit a post (creator)
        - delete a post (creator)
        - create facility which can be used globally on each accommodation post (it must have <strong>admin</strong> role)

    - Guest
        - browse all listed posters
        - search for a certain post by providing a name
        - search for a certain post by location
        - search for a certain post by lowest and highest price
        - view detailed information about each post

- <strong>Facility</strong>
    - User
        - add as many facilities as he/she want to their posts
    - Guest
        - no access
    - Admin role
      - create facility/ies which can be used globally on each accommodation post

# <p id="project-structure">Project Structure</p>
- Server
    - config - configuring the application
    - controllers - folder, where we can separate the route and the controller function
    - models - stores database schemas
    - routes - contains various application routes
    - services - for each feature service
    - util - error parser 
    - views - a template handled by handlebars for all application pages
    - middleware - code running before specific request to block access for certain conditions
# <p id="tools">Tools</p>

- <a href="https://nodejs.org/en/">Node</a>
- <a href="https://expressjs.com/">Express</a>
- <a href="https://www.npmjs.com/package/nodemon">nodemon</a>
- <a href="https://www.mongodb.com/">MongoDB</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://jwt.io/">jwt</a>
- <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>

# <p id="application-pictures">Application Pictures</p>

## Desktop
![home](https://user-images.githubusercontent.com/80749603/209820866-9cdbf519-d495-46a9-b815-5e96ca2e098b.png)
![details](https://user-images.githubusercontent.com/80749603/209820991-5a970e3c-8a4c-49ba-a095-f911a6a87478.png)
![facility](https://user-images.githubusercontent.com/80749603/209821019-199359e2-5ed4-43fd-8212-019ed85cff49.png)
![list](https://user-images.githubusercontent.com/80749603/209821049-8f38348b-b775-42f4-9ed7-bd777978cd62.png)
![new](https://user-images.githubusercontent.com/80749603/209821089-5acb311d-4aac-4121-b9ba-e1110965ba97.png)
![signup](https://user-images.githubusercontent.com/80749603/209821149-17482ccf-958c-4d59-b40b-07c92a24135f.png)
![login](https://user-images.githubusercontent.com/80749603/209821177-9d68f20a-4809-428f-8f0a-9f2d95fd9089.png)
## Tablet
![m_home](https://user-images.githubusercontent.com/80749603/209821250-02378d35-253a-45c5-908f-a2e20b2b3473.png)
![m_list](https://user-images.githubusercontent.com/80749603/209821329-cdcb9c84-c2f3-4bf1-aa3e-ed88a4a0ec15.png)
![m_facility](https://user-images.githubusercontent.com/80749603/209821351-d15a533c-3e35-4e4a-811f-34b2024c946a.png)
![m_details](https://user-images.githubusercontent.com/80749603/209821437-0d10113e-039c-4dda-862e-c2e8da2b15c8.png)
![m_login](https://user-images.githubusercontent.com/80749603/209821476-5b22210b-db9c-4a85-bb77-2ce978920035.png)
