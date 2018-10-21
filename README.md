# scottschmalz.com

[![Build Status](https://travis-ci.com/schmalzs/scottschmalz.svg?branch=master)](https://travis-ci.com/schmalzs/scottschmalz)

### Setup

1. Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.
2. Install project dependencies:
    ```
    $ yarn
    ```

##### Build and Start Server

* `$ yarn build` - Builds the client and server apps.
* `$ yarn build:watch` - Builds the client and server apps, watches for changes, and starts the server.
* `$ yarn build:client` - Builds the client app.
* `$ yarn build:client:watch` - Builds the client app and watches for changes.
* `$ yarn build:server` - Builds the server app.
* `$ yarn build:server:watch` - Builds the server app, watches for changes, and starts the server.
* `$ yarn start` - Starts the server.

##### Deploying App

1. Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) installed.
2. Add the app's remote Heroku repository as a remote in your current repository.
    ```
    $ heroku git:remote -a <project>   # project is the name of the Heroku project
    ```

### Contribution Guidelines

##### ESLint + Prettier
