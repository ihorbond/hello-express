const express = require('express');

const app = express();

app.set('view engine', 'ejs');

//get static assets from public folder
app.use(express.static('public'));
//ROUTE
// is an address (url) that you can visit on this application
let visitCount = 0;
//localhost:3000/ aka the home page of this app
app.get('/', (request, response, next) => {
  //anon function determines the code that is run
  // when you visit the address (url)
  visitCount += 1;
  console.log(visitCount + ' people visited');
  // response.send('Hello, world!'); //when u visit the address u will see this
  response.render('home.ejs');
});

app.get('/about', (request, response, next) =>  {
//triggered when localhost:3000/about webpage requested
// response.send ('<h1> About us </h1>');
response.render('about.ejs');
});

app.get('/contact', (request, response, next) => {

  response.render('contact-us.ejs');
});

app.listen(3000);
