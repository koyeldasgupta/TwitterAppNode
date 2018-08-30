# TwitterAppNode and Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##how to run

From the parent folder , in a terminal / command prompt run node index.js whcih will make the bakend node API ready for tweet service.

Now from another terminal go to the client folder , if you are using 
dev server , use `ng serve` which will open the front end on `http://localhost:4200/`.

For Prod version , one Dist folder has been made and uplaoded whcih will have the compiled and transfucated version , you can deploy the folder to any server. Say if SimpleHTTPServer for python. (Python 2.7).

In this case , you need to run `python -m SimpleHTTPServer` which will open the app on `http://localhost:8000/`.

Please note that you need to replace the URL of front end server to avoid CORS issue . For which you can check on `index.js` and change the below as per your URL .

var corsOptions = {
    origin: 'http://localhost:8000', /*change the port with your front end port number . for DEV server using Angular CLI make it http://localhost:4200/ */
    optionsSuccessStatus: 200 
  }

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
