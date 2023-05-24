// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculatePressed() {
  // This function takes a date of the week and an age and calculates made-up museum prices
  // Input through textfields
  const age = parseInt(document.getElementById("age").value)
  const dayOfTheWeek = document.getElementById("weekday").value
  let price = null

  // Process
  // pass
  if (age >= 0) {
    if (age <= 9 || age >= 65 || dayOfTheWeek == "Thursday") {
      price = 0 // free admission for people under 10, 65 or older, or on Thursdays
      document.getElementById("answertext").innerHTML =
        "You get free admission!"
    } else if (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
      // this entire if statement is for calculating weekend prices based on age
      if (age <= 17) {
        price = 10 // weekend child pricing (%20 more than 8)
      } else {
        price = 22 // weekend adult pricing (%20 more than 18)
      }
      document.getElementById("answertext").innerHTML =
        "You get weekend prices, which are %20 more than standard prices." // this runs no matter if the price is adult or child
    } else {
      // this entire if statement is for calculating standar prices based on age
      if (age <= 17) {
        price = 8 // child pricing (from 10 to 17)
      } else {
        price = 18 // adult pricing
      }
      document.getElementById("answertext").innerHTML =
        "You pay standard prices."
    }
  } else {
    document.getElementById("answertext").innerHTML = "That age is invalid."
    document.getElementById("answerprice").innerHTML = ""
  }

  // Output
  if (age >= 0) {
    document.getElementById("answerprice").innerHTML = "You pay: $" + price + "."
  }
}
