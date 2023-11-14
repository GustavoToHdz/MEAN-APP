const cors = require('cors');
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');
const path = require('path');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 4200);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middlewars = funciones que se ejecutan antes que cualquier accion del cliente
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(indexRoutes);
app.use('/api',tasksRoutes);

//static files
app.use(express.static(path.join(__dirname,'dist')))

//start server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});