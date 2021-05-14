const express = require('express');
const morgan = require('morgan');
const path = require('path')
const handlebars = require('express-handlebars');
const { query } = require('express');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

//Connect db
db.connect();


app.use(express.static(path.join(__dirname,'public')));
//HTTP logger
//app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, '/resources/views'))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Route init
route(app);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});