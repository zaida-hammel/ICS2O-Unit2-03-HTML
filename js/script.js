// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and street number and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parsInt(document.getElementbyId("street-number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + streetName + streetNumber + "."
}
