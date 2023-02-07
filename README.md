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


## AIM

To create a habit tracking app which will encourage good behaviour with regards to taking breaks during the working day, to avoid burn-out and stress. Our target audience is software developers who spend their working days on computers and find it difficult to tear themselves away from the screen.

## MVP

The user will be able to:
- see how many breaks, glasses of water & cups of coffee they have had in a day
- add a break, glass of water & cup of coffee
- write a daily comment about how they are feeling
- view previous comments and update these

## IDEAS FOR EXTENSIONS 

- select different faces to show mood on diary section.
- add a random tips and suggestions section
- have an alert tell you to have a break or say brake is over
- exercise section
- fill in an image when drunk all the amount of waters.
- delete diary entry
- user can comment on old diary posts with new feelings

 ## PIE CHART

source = Highcharts.com
 - head over to highcharts.com for assistance/help if needed
 - set up useEffect to pull the data through for the chart. (to display data)
 - set up a fetch function
 - cd into client - npom install highcharts
 - npm install highcharts-react-official
 - back to vs code and into file
 - import Highcharts from "highcharts"
 - import Highchartsreact from 'highcharts-react-official'
 - head over to highcharts.com for assistance/help if needed
 - add a div and the <Highchart> (in the documentaion on highcharts.com)
 - graph should show now on the web page
 - edit the graph as per preference