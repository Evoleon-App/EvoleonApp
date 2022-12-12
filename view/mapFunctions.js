import {getuserIsAuthenticated, addChargerToUserFavouriteListInFirestore, evChargerLocationIsInFavourites} from '../web/firebase' 

export const getChargerLocationAmenityAvailable = (evChargerLocationVal) => {
    
    var amenityListString = "Available: "
    var count = 0;

    if(evChargerLocationVal.Restroom == true){
      amenityListString += "restroom, ";
      count++;
    }
    if(evChargerLocationVal.Park == true){
      amenityListString += "park, ";
      count++;
    }
    if(evChargerLocationVal.Dining == true){
      amenityListString += "dining, ";
      count++;
    }
    if (count == 0){
      amenityListString = "";
    }
    return amenityListString;
  }


  export const addEvChargerLocationToUserFavouritesInDatabase = (evChargerLocationVal) => {
    if(getuserIsAuthenticated()){
      addChargerToUserFavouriteListInFirestore(evChargerLocationVal);
      console.log("Charger added to favourites");
    } else {
      console.log("User needs to sign in to add charger to favourites");
    }
  }


    //Find the correct images for the map markers and the favourite icon in the popup
    const locationInFavourites = require('../assets/Favourited.png');
    const locationNotInFavourites = require('../assets/Favourite.png');
    const mapMarkers = require('../assets/EvoleonFinal.png');
    export let currentFavouriteIconInPopup = locationNotInFavourites;
  
    export let getCorrectIconIfLocationInFavourites= (val) => {
      if(evChargerLocationIsInFavourites(val) == true){
        currentFavouriteIconInPopup = locationInFavourites;
        return locationInFavourites;
      } else {
        currentFavouriteIconInPopup = locationNotInFavourites;
        return mapMarkers;
      }
    }
  