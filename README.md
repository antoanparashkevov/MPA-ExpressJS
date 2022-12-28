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

## Tabled
