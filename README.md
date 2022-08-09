# Foodies

**USER STORY**
As a user i want to enter my current location zip Code in the search bar. It should later show a list a of nearby restaurants as well, it should present a video url to click on where then i can decide as a user to go to a restaurant or try the recipe out at home.  

This app will run in the browser and feature dynamically updated HTML and CSS powered by Javascript. 
We have used Bulma to create the layout and the cards to dislay the restaurants information.

The app is using 2 API Query URLs taken from RapidAPI website:

- Restaurants Near Me (https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/)

- Tasty (https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138)

The app does the following:

- When I enter the zip code in the restaurant finder search bar, it retrieves the first 5 nearby restaurants.

- The restaurants details include the name, address, city, and the website to that restaurant.

- The restaurants website link is clickable and takes to the respective website page.

- The same search pulls a list of recipe videos from another API. It only shows the recipes that have the videos associated to them.

- The videos lists include the name of the recipe and the link to watch the video on how to make the dish.

- The video link is clickable and plays the video in mp4 format in a new tab.

- All the restaurants listed are stored in the local storage.


# Website URL:
https://niralikap.github.io/Foodies/ 

# GitHub URL:
https://github.com/niralikap/Foodies 

# Screenshot:
<img width="1738" alt="Screen Shot 2022-08-02 at 7 30 07 PM" src="https://user-images.githubusercontent.com/105409104/182517864-f333040f-de06-4a4e-8354-9951b125a461.png">