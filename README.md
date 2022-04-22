<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Buiding Microservices with Node.js</h3>

  <p align="center">
   
   **Understanding microservices**
   Microservices became necessary due to the shortcomings of the monolithic pattern of software development. In a microservice, each software application feature is separated from the other, in most cases with their respective servers and databases. Applications built with this kind of architecture are loosely coupled, also referred to as distributed applications. - [Frank Joseph](https://blog.logrocket.com/building-microservices-node-js/)

   <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project


This was a tutorial done by [Frank Joseph](https://blog.logrocket.com/author/frankjoseph/) on [logrocket](https://logrocket.com/)
See tutorial [here:](https://blog.logrocket.com/building-microservices-node-js/)

![node logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcolorlib.com%2Fwp%2Fwp-content%2Fuploads%2Fsites%2F2%2Fnodejs-frameworks.png&f=1&nofb=1)

You can use any programming language, like Java, C#, or Python to develop a microservice, but Node.js is an outstanding choice for a few reasons.

For one, Node.js uses an event-driven architecture and enables efficient, real-time application development. Node.js single-threading and asynchronous capabilities enable a non-blocking mechanism. Developers using Node.js to build microservices have an uninterrupted flow, with Node.js code being fast, highly scalable, and easy to maintain.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://nodejs.org/en/)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Fork then clone this repo:
![fork](https://camo.githubusercontent.com/fe5e7ac515cecda6a51832901249b14d76de7f163772f8f239faf7f5378b0492/68747470733a2f2f692e696d6775722e636f6d2f39653545684b622e706e67)
![clone](https://camo.githubusercontent.com/454ca75258584be02d96a8f6c13364eb5585b0eb20eaa79756e8ae672911009b/68747470733a2f2f692e696d6775722e636f6d2f4f4961747561672e706e67)

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node.js
  ```sh
  node -v
  ```
- express.js
  ```sh
  npm i express
  ```

- Basic knowledge of JavaScript and Node.js

### Installation

1. Get a free API Key at [openweathermap](https://openweathermap.org/)
1a. Make sure you have cloned the repo
   ```sh
   git clone https://github.com/tedtalksbits/nodejs-microservices.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install nodemon
   ```sh
   npm install nodemon
   ```
   Locate `package.json` and add confirm it looks like this: 

   ```js
   {
      "name": "weather-microservice",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "type": "module",
      "scripts": {
         "start": "nodemon index.js",
         "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "Tedane Blake",
      "license": "ISC",
      "dependencies": {
         "dotenv": "^16.0.0",
         "express": "^4.17.3",
         "request": "^2.88.2"
      }
   }

   ```
4. in the root folder, create .env file. Paste your API key in the  `.env`
   ```
   API_KEY=1234YOURAPIKEY;
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] initialize project
- [x] spin up a local express server
- [x] test api endpoints


See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Tedane Blake - [@iam_tcb](https://twitter.com/iam_tcb) 


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments
![Frank Joseph](https://blog.logrocket.com/wp-content/uploads/2021/12/0-150x150.jpeg?crop=1)
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.finsmes.com%2Fwp-content%2Fuploads%2F2019%2F11%2FLogRocket-768x768.png&f=1&nofb=1" height="100" />

This was a tutorial done by [Frank Joseph](https://blog.logrocket.com/author/frankjoseph/) on [logrocket](https://logrocket.com/)
See tutorial [here:](https://blog.logrocket.com/building-microservices-node-js/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
