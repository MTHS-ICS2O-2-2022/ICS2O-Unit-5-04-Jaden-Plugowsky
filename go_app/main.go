// Created by: Jaden Plugowsky
// Created on: May 2023
//
// This program takes a day of the week and an age and calculates made-up museum prices

package main

import "fmt"

var age int
var weekday int
var price string

func main() {
	// This function takes a day of the week and an age and calculates made-up museum prices
	// Input
	fmt.Println("This program takes a user-given day of the week and age and calculates made-up museum prices.")
	fmt.Println("\nEnter an age: ")
	fmt.Scanln(&age)
	fmt.Println("\nEnter a day of the week with a number from 1-7. Any other inputs are invalid, including names.")
	fmt.Println("Sunday: 1, Monday: 2, Tuesday: 3, Wednesday: 4, Thursday: 5, Friday, 6, Saturday: 7.")
	fmt.Println("Enter a day of the week:")
	fmt.Scanln(&weekday)

	// Process
	if age >= 0 && weekday >= 1 && weekday <= 7 {
		if age <= 9 || age >= 65 || weekday == 5 {
			price = "$0"
			fmt.Println("\nYou get free admission!")
		} else if weekday == 7 || weekday == 1 {
			if age <= 17 {
				price = "$10"
			} else {
				price = "$22"
			}
			fmt.Println("\nYou pay weekend prices, which are 20% more than standard prices.")
		} else {
			if age <= 17 {
				price = "$8"
			} else {
				price = "$18"
			}
			fmt.Println("\nYou pay standard prices.")
		}
	} else {
		fmt.Println("\nThat input is invalid. Please enter a possible age (any positive number) or day of the week (number between 1 and 7).")
		fmt.Println("Try again by re-typing the command.")
	}

	// Output
	fmt.Println("This means you pay:", price)

	fmt.Println("\nDone.")
}
