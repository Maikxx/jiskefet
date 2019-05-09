# Jiskefet

This project aims to create a working demo for an enhancement of the ALICE logging system, created in collaboration between the UASA and CERN.

This demo is a collaboration between [Chelsea Doeleman](https://github.com/ChelseaDoeleman), [Robin Stut](https://github.com/RobinStut) and [Maikel van Veen](https://github.com/Maikxx).

## Table of contents

* [Installation](#Installation)
    * [Folder structure](#Folder-structure)
    * [Extra documentation](#Extra-documentation)
* [Process](#Process)
* [Issues](#Issues)

## Installation

* Make sure to install [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com).
* Make sure the **port** specified in the [package.json](package.json) is available (defaults to 5430).

* Clone the repository: `git clone git@github.com:Maikxx/jiskefet.git`
* Navigate into the directory: `cd jiskefet`
* Install dependencies: `yarn` or `npm install`
* Start the client with: `yarn start-client` or `npm run start-client`
* Start the server with `yarn start-server` or `npm run start-server`

You may have perform the following steps if you get errors running the commands above:

* `npm install typescript -g`
* `npm install ts-node-dev -g`
* `npm install parcel-bundler -g`

* Rename the process environment file to `.env` by doing `cp ./server/.env.example ./server/.env`

The port that now opens is `localhost:5430`.

### Folder structure

Both the clients `src/sass` and `src/scripts` folders should have the following structure:

* components
    * atoms
    * molecules
    * organisms

### Extra documentation

* You can find the atomic design principles [here](./docs/ATOMIC.md).
* You can view the project overview [here](./docs/PROJECT_OVERVIEW.md).

## Process

* [ ] Autospelling check for tag names
* [ ] Drag & drop attachment
* [ ] Editing tags
* [ ] Error toasts
* [ ] Enable typing markdown directly
* [X] Restrict tags by name duplicated
* [ ] Tag restriction - only some people can create

## Issues

* Horizontal line styling
* Blockquote styling
* Refactor `collapsible` into it's own component

## License

This repository is licensed as [MIT](LICENSE) by [Chelsea Doeleman](https://github.com/ChelseaDoeleman), [Robin Stut](https://github.com/RobinStut) and [Maikel van Veen](https://github.com/maikxx).