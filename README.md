# Backstage

Backstage is a collaboration platform for independent musicians and local venues. Venues can share equipment lists and stage configurations through a unique, Zoom-style link. Artists can save custom, drag-and-drop stageplots to a PDF and share with the venue.


## Special Features

 - Users enjoy their own dashboard with saved stages, equipment, and events
 - Users can create events and generate a unique link to share with collaborators
 - Unique link copy-to-clipboard in one click
 - Drag-and-drop stage plot creation
 - PDF Download
 

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`



## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.


## APIs and frameworks
- Sendgrid for signup email functionality
- TailwindCSS and PostCSS for the front-end component design
- Cloudinary to upload and manage user images
- JWT-based token authentication, bcrypt, and Passport for user authentication and password hashing


## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`
