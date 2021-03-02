# Random Rijks
A web app which returns a random art object form the Rijks Museum collection

## Where can I find the app?
You can find the app here: [http://iscoronavoorbij.nl/](http://iscoronavoorbij.nl/)

## Where does the data come from?
The data for the number cards comes from [Worldometers](https://www.worldometers.info/coronavirus/) and the data for the chart come from [Johns Hopkins University](https://www.jhu.edu/). Both datasets are retrieved via the [disease.sh API](https://github.com/disease-sh/API)
## How is the app built?
The front end is made with Vue.js and Bootstrap for the styling. The backend is a super simple Express server which really only serves the html entrypoint for Vue.js

## Why did you build this? 
The domain name was still availble and it's always good to practice :)
## To-Do's
 - Optimize styling of the chart on the home page. Currently it isn't very easy to read
 - Finish this README.md