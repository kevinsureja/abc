This application is a Family Tree application. It was developed in React as Frontend and Node as Backend with MySql database. In React, I developed an application with help of function/class components, redux store, reducer and actions and uses axios to call remote api. In Node, I created an API on MVC base architecture that uses sequelize ORM library to manage DB query.

There are following steps to how to run application : 

How to Run React App:
Step 1 : Open terminal
Step 2 : Go to UI Foder and set .env params value 
         evn params like that 
         PORT = set port umber where application will run on this port Ex. 7000
         REACT_APP_API_URL = Set API route url where API was running Ex. http://localhost:7001
Step 3 : Run command "npm install" to  Install npm depadecies 
Step 4 : Run command "npm start" command to run application on PORT which are mention in .env file

How to Run Node App: 
Step 1 : Open terminal
Step 2 : Go to Server Foder and set .env params value 
        env params like that
        PORT = 7001  set port number where node API will running
        DB_HOST = localhost  host of DB
        DB_PORT = 3306 port of DB
        DB_USERNAME = root  user name of DB
        DB_PASSSWORD = '' password of DB
        DB_NAME = family-info  name of database
Step 3 : Create database which name are given in .evn file and tables will create automatically when node server wil start.
Step 4 : Run command "npm install" to  Install npm depadecies 
Step 5 : Run command "npm start" command to run application on PORT which are mention in .env file.
          

UI should be open on : http://localhost:7000
Node Api should be run on http://localhost:7001
