# exercise_app

This application uses the MERN stack to write a single-page application that tracks exercises completed by the user. Uses React, React Router, Express, MongoDB, Mongoose, REST, HTML, and CSS. 

The application is split into 3 pages:

•	Home page: greets the user and displays the existing record of exercises.
•	Edit page: enables a user to update an exercise entry.
•	Create page: enables the user to create an new exercises entry.

The file structure:

•	“exercises-api”: back-end using REST API structure

  o	Package.json: starts controller.mjs
  o	Controller.mjs: imports data from model.mjs and defines the collection name. Imports Express and defines the port for viewing the model/object on port 3000. Controls post, get, put, delete, and listen functions for the app.
  o	Model.mjs: defines the connection to the database. Defines the scheme and a variables to create a document in the database collection, retrieve/find documents, update, and delete data arrays in the object/model. Exports all of the CRUD functions to be used by React and the controller.mjs file.
  
•	“exercises-ui”: front-end using React SPA structure

  o	Public - index.html: the app’s public home page executes the index.js’s instructions and is rendered on port 8000.
  o	Src
    	Index.js: a ReactDom() script renders the App() function and defines the root.
    	App.js: imports App.css and page functions.
    	App.css: defines global rules for the app’s HTML elements.
    	Pages
      •	Edit: uses state to set data parameters, fetch to update data in the collection, and history to redirect back to home page. Returns a table with edit and delete controls.
      •	Create: uses state to set data parameters, fetch to update data in the collection, and history to redirect back to home page. Returns a table with edit and delete controls.
      •	Home: defines use of History, State, Delete, Edit, Load, and Effect. Provides routines for onDeleteExercise, onEditExercises, and loadExercises, which are including in the HomePage() function. Once CreatePage has been used, then the HomePage() function returns the table component thay includes icon links to Edit and Delete.
    	Components
      •	Navigation: nav with links to home and create pages, according to the routes in app.js.
      •	Row: defines a function for a single table that includes params for exercises, onDelete, and onEdit. When onClick Delete, the row is removed from the database. When onClick Edit, the EditPage.js is launched.
      •	Table: Returns a table that includes a row in the body.

Starting the application:
•	Download both exercises-api and exercises-ui and store them in the same directory.
•	Open separate terminals for each.
•	Install dependencies in each (npm install).
•	Launch each program (npm start).
•	The front end will launch as a tab in your default browser.
