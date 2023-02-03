cd server.js
step 1
npm start

# -> App running on port 9000
You should now be able to navigate to http://localhost:9000 in the browser and our string should be displayed.

We've given ourselves a bit of a problem, however. If we change our code, and refresh the page:

step 2
npm install --save-dev nodemon

step 3 
cd ../client
npm install
npm start

step 4 
cd ../server
npm install --save-dev cors
