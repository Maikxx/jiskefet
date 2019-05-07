# Jiskefet

## Installation

* Make sure to install [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com).
* Make sure the **port** specified in the [package.json](package.json) is available (defaults to 3000).

* Clone the repository: `git clone git@github.com:Maikxx/jiskefet.git`
* Navigate into the directory: `cd jiskefet`
* Install dependencies: `yarn` or `npm install`
* Start the client with: `yarn start-client` or `npm run start-client`
* Build the server with `yarn build-server` or `npm run build-server`

You may have perform the following steps if you get errors running the commands above:

* `npm install typescript -g`
* `npm install ts-node-dev -g`
* `npm install parcel-bundler -g`

* Rename the process environment file to `.env` by doing `cp ./server/.env.example ./server/.env`

The port that now opens is `localhost:3000`.

### Folder structure

Both the clients `src/sass` and `src/scripts` folders should have the following structure:

* components
    * atoms
    * molecules
    * organisms

## Docs

* You can find the atomic design principles [here](./docs/ATOMIC.md).
* You can view the project overview [here](./docs/PROJECT_OVERVIEW.md).

## License

This repository is licensed as [MIT](LICENSE) by [Maikel van Veen](https://github.com/maikxx).