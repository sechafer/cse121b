/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Samuel Chacon"
let currentYear = new Date().getFullYear()
let profilePicture = "/w02-task/images/samuel_imagen 300.jpg"
let fileName = "profile picture"

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const	yearElement = document.querySelector('#year')
const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
let favFoods = ['apple ', 'banana ', 'uva ', 'orange ']
foodElement.innerHTML = favFoods
let favFood = 'watermelon '
favFoods.push(favFood)
foodElement.innerHTML += `<br>${favFoods}`
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`






/* Step 5 - Array */






