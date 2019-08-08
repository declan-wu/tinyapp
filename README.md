# tinyapp

As an avid twitter poster, I wonder “How can I fit more non-link text in my tweets?” <br />
As a twitter reader, I want to be able to visit sites via shortened links, so that I can read interesting content. <br />

TinyApp is developed in Node.js with Express for backend, and using EJS to render HTML/CSS page for front end. The project is a learning experiment that serves the purpose of leaning/understanding how servers (Node/Express) work, and routing and handling requests, session cookies etc. The front end pages are served using EJS template by the server. 

## Getting Started

In order to get started with this project, you need to run `npm install` to install all dependencies for back-end (Node.js/Express). 

Then navigate to `http://localhost:8080` to view the the TinyApp app. 

### Prerequisites

What you need to install:

- express,
- bcrypt,
- body-parser,
- cookie-session,
- ejs,
- moment,
- bootstrap, 
- mocha
- chai

### Installing

Clone the project and make sure to install all dependencies. 

## Testing

- Unit tests: run `npm test` to run unit tests written using mocha and chai. 
Because many of the utility functions are used to encryption, generating random alphanumeric string, only selected utility functions have been tested. 
- Integration tests:  perfomed to ensure the app works with external resources. 
- Regression test: after implementing new features (enable user authentication, enable cookies, etc) or bug fixes, the past code has been re-tested to make sure no new bugs are introduced or fixed if any. 

## App Flow

__Welcome to TinyApp! - A web app that shortens URL for you__
!["Login"](https://github.com/declan-wu/tinyapp/blob/master/public/login.png)

__Register__
!["Register"](https://github.com/declan-wu/tinyapp/blob/master/public/register.png)

__Create New URLS__
!["Create New URLS"](https://github.com/declan-wu/tinyapp/blob/master/public/newurl.png)

__Edit and Copy URLS__
!["Edit and Copy URLS"](https://github.com/declan-wu/tinyapp/blob/master/public/editurl.png)

__My URLs__
!["MyURLs"](https://github.com/declan-wu/tinyapp/blob/master/public/myurls.png)

__Error Pages__
!["error pages"](https://github.com/declan-wu/tinyapp/blob/master/public/oops.png)

## Deployment

This app has't been deployed yet as of now. 

## Versioning

TinyApp 1.0.0

## Authors

* Declan Wu: Express | JavaScript | Node | EJS | Bootstrap | Mocha + Chai

## License

This project is licensed under the MIT License

## Acknowledgments

* To all libraries that were used to create this project
* Mentors, friends for their support (coding and otherwise)

