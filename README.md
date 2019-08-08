# tinyapp

As an avid twitter poster, I wonder “How can I fit more non-link text in my tweets?” 
As a twitter reader, I want to be able to visit sites via shortened links, so that I can read interesting content.

TinyApp is a application used to shorten links, developed in Node.js,


## Getting Started

In order to get started with this project, you will need to run one one server (your comuputer) for the back-end (Node.js/Express). You need to run `npm install` to install all dependencies for back-end. Then navigate to `http://localhost:8080` to view the the TinyApp app. 

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

Clone project and make sure to install all dependencies. 

## Running the tests

- Unit tests: run `npm test` to run unit tests written using mocha and chai. 
Because many of the utility functions are used to encryption, generating random alphanumeric string, only selected utility functions have been tested. 
- Integration tests:  perfomed to ensure the app works with external resources. 
- Regression test: after implementing new features (enable user authentication, enable cookies, etc) or bug fixes, the past code has been re-tested to make sure no new bugs are introduced or fixed if any. 

## Deployment

This app has't been deployed yet as of now. 

## Versioning

Everything Calgary version 1.0.0

## Authors

* Declan Wu: Express | JavaScript | Node | EJS | Bootstrap | Mocha + Chai


## License

This project is licensed under the MIT License

## Acknowledgments

* To all libraries that were used to create this project
* Mentors, friends for their support (coding and otherwise)

## App Flow

__Welcome to TinyApp! - A web app that shortens URL for you__
!["Login"]()

__Register__
!["Register"]()

__Create New URLS__
!["Create New URLS"]()

__Edit and Copy URLS__
!["Edit and Copy URLS"]()

__My URLs__
!["MyURLs"]()

__Error Pages__
!["error pages"]()
