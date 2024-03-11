<h1 align="center">Welcome to One Dionys - HTTP Client! 👋 </h1>

<p align="center">A package for making HTTP requests to a server with easy-to-understand syntax. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-http-client?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-http-client?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-http-client?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-http-client?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-http-client.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-http-client?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-http-client?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { HttpClient } = require('./src/http-client');

const httpClient = new HttpClient();

// GET
httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log('GET Response:', response);
})
.catch(error => {
    console.error('Error:', error);
});

// POST
httpClient.post('https://jsonplaceholder.typicode.com/posts', data)
.then(response => {
    console.log('POST Response:', response);
})
.catch(error => {
    console.error('Error:', error);
});
```

#### Explanation

* This package provides a simple HTTP client for making GET and POST requests using Axios library.

#### Return Value

* The methods get() and post() return a Promise that resolves with an object containing the HTTP status code and response data. If an error occurs during the request, it returns an object with the HTTP status code and error response data.

## 📆 Release Date

* v1.0.0 : 07 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - HTTP Client is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - HTTP Client? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
