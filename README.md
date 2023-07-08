# Currency Converter

#### This application will allow users to convert USD to the provided currencies in the drop down form.

#### By Jase Grable

## Technologies Used

- JavaScript
- ESLint
- webpack
- webpack plugin
- webpack-cli
- Jest
- Babel
- Test-Driven Development
- npm
- GitHub
- MDN
- ExchangeRate-API

## Description

## Setup/Installation Requirements

#### To access the code in a source code editor of your desire:

- Use "Code" button to clone this repository
- Navigate to appropriate folder on your machine and use `git clone`
- Navigate to top level directly and run `npm install`
- After installing npm, run `npm run build` in your terminal. This will bundle the appropriate files into index.html in the distribution folder.
- Then run the command `npm run start` to start the project server and view the application (use ctrl(cmd) + c to exit server in terminal)
- Open the code with the code editor of your choice.
- To test the code use the command `npm test`

````
- After cloning the repo to your desired location go to https://exchangerate-api.com/ and sign up for a free account.
- Once you have a free account you can access your API Key in your dashboard.
- Go back to your gitBash and do the following steps.
```bash
$ touch .env
$ code .
````

- In the .env file, you will place the API key by using this method API_KEY={Your_API_KEY_FROM_YOUR_DASHBOARD}.
- Save the file and don't forget to add .env to your .gitignorefile so your API Key isn't shared with internet strangers.

#### To install the required environment after cloning from the above link:

```bash
$ npm install
$ npm run build
$ npm run start
$ npm run test
$ npm run lint
```

## Troubleshooting

- If you receive errors regarding the web pack run, 'npm install webpack@4.46.0 --save-dev --save-exact'
- If you continue to have issues setting up the environment, try deleting the package-lock.json file and the node_modules folder from the project. Then rebuild the environment by running `npm install` again.

## Known Bugs

- No known bugs at this time.

## License

MIT License
Copyright (c) 2023 Jase Grable
