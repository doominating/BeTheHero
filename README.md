# Be The Hero (NodeJS, ReactJS & React-Native)

Rocketseat OminiStack Week #11 Challenge Project

- [Be The Hero (NodeJS, ReactJS & React-Native)](#be-the-hero-nodejs-reactjs--react-native)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Roadmap](#roadmap)
  - [License](#license)

## Usage

On the web app, ONGs can register their profile and add incidentes, allowing people to donate for it at the App.

## Technologies

This app features all the latest tools and practices in javascript stack!

- ⚛️ **React JS** — A JavaScript library for building user interfaces - [site](https://reactjs.org/)
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS - [site](https://facebook.github.io/react-native/)
- 💹 **Node JS** — A web framework for Node Js - [site](https://nodejs.org/)
- 📄 **Knex** — A SQL Query Builder for Javascript - [site](http://knexjs.org/)
- 📄 **SQLite** — SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine - [site](https://www.sqlite.org/)
- ♻️ **Socket IO** — A library for realtime web applications - [site](https://socket.io/)
- **Express** - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications - [site](https://expressjs.com/pt-br/)
- **Nodemon** - A utility that will monitor for any changes in the source code and automatically restart the server - [site](https://nodemon.io/)

## Installation

Clone the project with the following command:

```sh
git clone https://github.com/doominating/BeTheHero.git
```

Then, get in the project dir and install the dependencies for each enviroment (backend, frontend and mobile):

```sh
cd BeTheHero/backend
npm install

cd BeTheHero/frontend
npm install

cd BeTheHero/mobile
npm install
```

Finally, you can start the applications (backend/frontend/mobile) with:

```sh
npm start
```

If you are in development environment, you can use the development server for backend (that runs nodemon for watches files modification and automatic re-start server):

```sh
npm dev
```

## Roadmap

- (**In Progress**) Create backend, frontend and mobile just like the OmniStack Challenge;
- Add update ONGs infos feature;
- Add update Incidents infos feature;
- Refactoring to improve the code readability;

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
