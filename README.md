# Random Rijks API
The Vue.js front-end that consumes the Flask API. This Vue.js app is responsible for displaying the art object information that is returned by the Flask API.
## Where can I find the app?
You can find the app here: [https://randomrijks.com/](https://randomrijks.com/)

## Where does the data come from?
The data is retrieved via the [Rijks Museum API](https://data.rijksmuseum.nl/object-metadata/api/)

## How is the app built?
The Random Rijks web app consists of two parts:

- [The Fask API](https://github.com/StefanVDWeide/randomrijks-backend)
- The Vue.js front-end

The front-end makes a request to the backend API which in turn generates a random art object ID and uses this to retrieve the associated infromation from the Rijks Museum API. It then sends to data back to the front-end as a JSON object. The front-end then finally renders for the user.

## Why did you build this? 
While the Rijks Museum is quite large, most of its collection is not readily available to see for the general public. This project allows people to take a deep dive and see objects they might never see otherwise. Also, being that a random object is shown, people are taken out of their normal 'comfort zone' and might discover a new type of art they are interested in.
## To-Do's

 - Look into optimizing the size of the images