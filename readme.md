### Hi! So I created a web app in vanilla javascript that fetches data from the github api and displays it in a dashboard. The images respond to click by giving some information about the framework. There are buttons that will order the frameworks based on their amount of watchers, forks and issues. Finally there is a recommendation button that will give a recommendation based on a ranking algorithm that assigns a point value to on each framework's ranking respective to the other frameworks compared on each given attribute.

### I used node to manage dependancies, but did not serve the page. I used browserify to bundle modules and take advantage of es6 features.

### This app can be run by forking the repo, cloning down the project then running npm install. Then the command : npm run build will run browserify to create the bundle.js file. Then use your favorite browser to open the index.html file. You will need internet access to hit the github api to receive data for the app.
