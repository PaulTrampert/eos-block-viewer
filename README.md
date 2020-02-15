## Instructions to Run Locally
#### Run Tests
To run the tests in watch mode, run the following in the terminal.
```
npm install
npm test
```

To run a single run, use `npm run test-ci`.

#### Run with NPM
Run the following commands in the terminal:
```
npm install
npm start
```

This should start the site on http://localhost:3000.


#### Run with Docker
Run the following commands in the terminal
```
docker build -t eos-block-viewer .
docker run --name eos -p 80:80 eos-block-viewer
```

This should start the site on http://localhost/

## View Live Deployment
The live deployment of this project can be found at https://eos.ptrampert.com/. This will always reflect the latest `master`.