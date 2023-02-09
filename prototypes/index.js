const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
	orangePetNames(petData) {
		// Return an array of just the names of kitties who are orange e.g.
				// ['Tiger', 'Snickers']

		const orangePetNames = petData.filter(pet => pet.color === 'orange')
									.map(pet => pet.name)
			return orangePetNames

		// Annotation:
		// Write your annotation here as a comment
	},

	sortByAge(petData) {
		// Sort the kitties by their age

		return petData.sort((a, b) => b.age - a.age)

		// Annotation:
		// .sort is interesting... a, b are comparisons of items in the array where a is the first and b is each item after. You must use dot notation to tell .sort where to find the values you want to sort by. a and b are evaluated to return 1, -1, or 0. 1 means a is greater than b, -1 means a is less than b and 0 means they are equal.
	},

	growUp(petData) {
		// Return an array of kitties who have all grown up by 2 years e.g.
		// [{
		//   name: 'Felicia',
		//   age: 4,
		//   color: 'grey'
		// },
		// {
		//   name: 'Tiger',
		//   age: 7,
		//   color: 'orange'
		// },
		// ...etc]

		const oldPets = petData.map(pet => {
			pet.age = pet.age + 2
			return pet
		})
		return oldPets

		// How do I get this to work??
		// const oldPets = petData.map(pet => pet.age = pet.age + 2)
		//   return oldPets
	}
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
	membersBelongingToClubs(data) {
		// Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
		// Create an object whose keys are the names of people, and whose values are
		// arrays that include the names of the clubs that person is a part of. e.g.
		// {
		//   Louisa: ['Drama', 'Art'],
		//   Pam: ['Drama', 'Art', 'Chess'],
		//   ...etc
		// }

		let names = data.map(club => club.members).flat()
    	let noDuplicates = [...new Set(names)]


    	let membership = noDuplicates.reduce((acc, name) => {
      		acc[name] = []
      		data.forEach((club, index) => {
        		club.members.forEach(member => {
          			if(member === name) {
            			acc[name].push(data[index].club)
          			}
        		})
      		})
      		return acc
    	}, {})

		return membership
		// Annotation:
		// I am confident there is a better way to do this but here's my solution. First I get an array of every unique name by iterating through the clubs array and mapping every name value from the members key. I then flatten the array (remove all the inner brackets) with .flat(). I then create a new set inside an array using the spread operator which removes all the duplicate names. Then I run reduce to first set up an object where each key is the name and the value is a blank array. Then I run nested forEachs to go back through the clubs array, into the members array and push the club names into the blank name value array where the current name and the name in the members array match.
	}
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
	studentsPerMod() {
		// Return an array of objects where the keys are mod (the number of the module)
		// and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
		// [
		//   { mod: 1, studentsPerInstructor: 9 },
		//   { mod: 2, studentsPerInstructor: 11 },
		//   { mod: 3, studentsPerInstructor: 10 },
		//   { mod: 4, studentsPerInstructor: 8 }
		// ]

		/* CODE GOES HERE */

		let ratio = mods.map(modObj => {
			return {mod: modObj.mod, studentsPerInstructor: (modObj.students /modObj.instructors)}
		})

		// let ratio = mods.reduce((acc, modObj) => {
		//   acc.push({mod: modObj.mod, studentsPerInstructor: (modObj.students /modObj.instructors)})
		//   return acc
		// }, [])

		return ratio
		// Annotation:
		// I first solved it using a reduce iterator but it seemed kind of silly to start with a blank array and push into every time when map does that already. So I re-wrote it so that map returns a new object for every instance of mod where mod is equal to the value of mod and then there's a new property called studentsPerInstructor thats set to the students divided by the instructors.
	}
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
	stockPerCake() {
		// Return an array of objects that include just the flavor of the cake and how
		// much of that cake is in stock e.g.
		// [
		//    { flavor: 'dark chocolate', inStock: 15 },
		//    { flavor: 'yellow', inStock: 14 },
		//    ..etc
		// ]

		return cakes.map(cake => ({flavor: cake.cakeFlavor, inStock: cake.inStock}))

		// Annotation:
		// Write your annotation here as a comment
	},

	onlyInStock() {
		// Return an array of only the cakes that are in stock
		// e.g.
		// [
		//   {
		//   cakeFlavor: 'dark chocolate',
		//   filling: null,
		//   frosting: 'dark chocolate ganache',
		//   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
		//   inStock: 15
		// },
		// {
		//   cakeFlavor: 'yellow',
		//   filling: 'citrus glaze',
		//   frosting: 'chantilly cream',
		//   toppings: ['berries', 'edible flowers'],
		//   inStock: 14
		// },
		// ..etc
		// ]

		return cakes.filter(cake => cake.inStock > 0)

		// Annotation:
		// Write your annotation here as a comment
	},

	totalInventory() {
		// Return the total amount of cakes in stock e.g.
		// 59

		return cakes.reduce((a, cV) => a += cV.inStock, 0)

		// Annotation:
		// Write your annotation here as a comment
	},

	allToppings() {
		// Return an array of all unique toppings (no duplicates) needed to bake
		// every cake in the dataset e.g.
		// ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

		let allToppings = cakes.map(cake => cake.toppings).flat()
		let noDups = [...new Set(allToppings)]
		return noDups

		// Annotation:
		// Write your annotation here as a comment
	},

	groceryList() {
		// I need to make a grocery list. Please give me an object where the keys are
		// each topping, and the values are the amount of that topping I need to buy e.g.
		// {
		//    'dutch process cocoa': 1,
		//    'toasted sugar': 3,
		//    'smoked sea salt': 3,
		//    'berries': 2,
		//    ...etc
		// }

		// let allTops = cakePrompts.allToppings()

		// return allTops.reduce((acc, cV) => {
		// 	let count = 0
		// 	cakes.forEach(cake => cake.toppings.forEach(topping => {
		// 		if (topping === cV) {
		// 			count++
		// 		}
		// 	}))
		// 	acc[cV] = count
		// 	return acc
		// }, {})

		const newList = cakes.flatMap(cake => cake.toppings)

		const groceryList = {}

		newList.forEach(topping => {
		groceryList[topping] = (groceryList[topping] || 0) + 1
		})

		return groceryList

		// Annotation:
		// My solution is commented out. And a craftier solution was provided by another student. Here is my own explanation of it:
		// This line makes a new flat array of all cake toppings including duplicates (didn't know flatMap was a thing.. gonna start using that lol
		// const newList = cakes.flatMap(cake => cake.toppings)
		// Then a new blank object is initialized
		// const gA = {}
		// Then he iterates through each topping in the array and starts creating key value pairs. Here's where it gets tricky. If the key value pair doesn't exist yet, a new one is created and the value defaults to 0 + 1 because ga[topping] doesn't exist yet. If the key value pair does already exist then it reassigns the value of that key to be the value + 1.
		// newList.forEach(topping => {
		//   gA[topping] = (gA[topping] || 0) + 1
		// })
		// Like if the gA object is blank, then the first key value pair is
		// 'dutch process cocoa': 0 + 1
		// but then when it gets to this point:
		// {
		//   'dutch process cocoa': 1,
		//   'toasted sugar': 1
		// }
		// when it gets to the next value of 'toasted sugar' in the newList array, it looks at the gA object, sees that 'toasted sugar' is already a key value pair and says ok I'm going to reassign it to
		// 'toasted sugar': 1 + 1
	}
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
	feClassrooms() {
		// Create an array of just the front-end classrooms. e.g.
		// [
		//   { roomLetter: 'A', program: 'FE', capacity: 32 },
		//   { roomLetter: 'C', program: 'FE', capacity: 27 },
		//   { roomLetter: 'E', program: 'FE', capacity: 22 },
		//   { roomLetter: 'G', program: 'FE', capacity: 29 }
		// ]

		return classrooms.filter(room => room.program === 'FE')

		// Annotation:
		// Write your annotation here as a comment
	},

	totalCapacities() {
		// Create an object where the keys are 'feCapacity' and 'beCapacity',
		// and the values are the total capacity for all classrooms in each program e.g.
		// {
		//   feCapacity: 110,
		//   beCapacity: 96
		// }

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	sortByCapacity() {
		// Return the array of classrooms sorted by their capacity (least capacity to greatest)

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	}
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
	removeViolence() {
		// Your function should access the books data through a parameter (it is being passed as an argument in the test file)
		// return an array of all book titles that are not horror or true crime. Eg:

		//  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
		//   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
		//   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
		//   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
		//   'Catch-22', 'Treasure Island']


		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment

	},
	getNewBooks() {
		// return an array of objects containing all books that were
		// published in the 90's and 00's. Inlucde the title and the year Eg:

		// [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
		//  { title: 'Life of Pi', year: 2001 },
		//  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	getBooksByYear(books, year) {
		// return an array of objects containing all books that were
		// published after the specified year without the author or genre data. 
		// The published property should be changed to year for the returned books.
		// e.g. given 1990, return

		// [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
		//  { title: 'Life of Pi', year: 2001 },
		//  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	}

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
	getAverageTemps() {
		// return an array of all the average temperatures. Eg:
		// [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

		return weather.map(city => (city.temperature.high + city.temperature.low) / 2)

		// Annotation:
		// Map returns an array of the same length so is the best choice for this case
	},

	findSunnySpots() {
		// Return an array of sentences of the locations that are sunny
		// and mostly sunny. Include the location and weather type. Eg:
		// [ 'Atlanta, Georgia is sunny.',
		// 'New Orleans, Louisiana is sunny.',
		// 'Raleigh, North Carolina is mostly sunny.' ]

		return weather.filter(city => city.type === 'sunny' || city.type === 'mostly sunny').map(city => `${city.location} is ${city.type}.`)

		// Annotation:
		// Filter will give us only the city objects that are sunny or mostly sunny and then map will give us a new array with the info we want. The value after the arrow in map will be whatever you want returned.
	},

	findHighestHumidity() {
		// Return the location with the highest humidity. Eg:
		// {
		//   location: 'Portland, Oregon',
		//   type: 'cloudy',
		//   humidity: 84,
		//   temperature: { high: 49, low: 38 }
		// }

		return weather.sort((aCity, bCity) => bCity.humidity - aCity.humidity)[0]

		// Annotation:
		// First instinct was to use find since we're only looking for one object back but having to compare each humidty temp to each other makes me think sort or reduce is the answer. I used sort to create a new array where the cities are ranked in order from highest humidity to lowest humidity. Then I return the first value from that new array. Sort takes two values and compares them to each other based off how you tell it to. In this case we are comparing b - a which will sort a behind b based off whether the value of b - a is negative or not. If b - a is positive, a gets sorted after b. If b - a is negative, b gets sorted after a.

	}
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
	getParkVisitList() {
		/// Return an object containing the names of which parks I need to visit
		// and the ones I have already visited eg:
		// {
		//   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
		//   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
		//}

		return {
			parksToVisit: nationalParks.filter(park => !park.visited).map(park => park.name),
			parksVisited: nationalParks.filter(park => park.visited).map(park => park.name)
			}

		// Annotation:
		// At first I wanted to use reduce since we want a new object back. However, since it's a different size with unique keys it didn't work because I kept resetting the key to a blank state with every iteration of reduce. So I just returned a new object with the values set to a map of filtered object data.
	},

	getParkInEachState() {
		// Return an array of objects where the key is the state and the value is its National Park
		// eg: [ { Colorado: 'Rocky Mountain' },
		// { Wyoming: 'Yellowstone' },
		// { Montana: 'Glacier' },
		// { Maine: 'Acadia' },
		// { Utah: 'Zion' },
		// { Florida: 'Everglades' } ]
		
		return nationalParks.map(park => ({[park.location]: park.name}))
		// This was my first solution but I didn't realize I needed to wrap the key in brackets. I guess it takes it literally if you don't? aka park.location would be park.location: 'Rocky Mtn' instead of colorado: 'rocky Mtn'


		// return nationalParks.map(({location, name}) => ({[location]: name}))

		// Annotation:
		// // array.map(({ key, value }) => ({ [key]: value }))
		// which actually means array.map(array.key1, array.key2) return an object of {array.key1's value: array.key2's value}
		// This is a crazy cool example of destructuring. Basically since we want an array thats the same length as nationalParks and we want keys and values that are the same as values from each object in the array, we can use minimal syntax to say use the values of these keys and create a new object with them.
	},

	getParkActivities() {
		// Return an array of all the activities I can do
		// in a National Park. Make sure to exclude duplicates. eg:
		// [ 'hiking',
		//   'shoeshoing',
		//   'camping',
		//   'fishing',
		//   'boating',
		//   'watching wildlife',
		//   'cross-country skiing',
		//   'swimming',
		//   'bird watching',
		//   'canyoneering',
		//   'backpacking',
		//   'rock climbing' ]

		return [...new Set(nationalParks.map(park => park.activities).flat())]

		// Annotation:
		// Missing






	}
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
	getBeerCount() {
		// Return the total beer count of all beers for every brewery e.g.
		// 40

		return breweries.reduce((acc, cV) => acc += cV.beers.length, 0)

		// Annotation:
		// Write your annotation here as a comment
	},

	getBreweryBeerCount() {
		// Return an array of objects where each object has the name of a brewery
		// and the count of the beers that brewery has e.g.
		// [
		//  { name: 'Little Machine Brew', beerCount: 12 },
		//  { name: 'Ratio Beerworks', beerCount: 5},
		// ...etc.
		// ]

		return breweries.map(brewery => ({name: brewery.name, beerCount: brewery.beers.length}))

		// Annotation:
		// Write your annotation here as a comment
	},

	getSingleBreweryBeerCount(breweryName) {
		// Return a number that is the count of beers that the specified
		// brewery has e.g.
		// given 'Ratio Beerworks', return 5

		return breweries.find(brewery => brewery.name === breweryName).beers.length

		// Annotation:
		// Write your annotation here as a comment
	},

	findHighestAbvBeer() {
		// Return the beer which has the highest ABV of all beers
		// e.g.
		// { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

		let highToLow = breweries.map(brewery => brewery.beers).flat()

		return highToLow.sort((a, b) => b.abv - a.abv)[0]

		// Annotation:
		// Write your annotation here as a comment
	}
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: boardGames from './datasets/boardGames

const boardGamePrompts = {
	listGames(type) {
		// Return an array of just the names of the games within a specified type. 
		// e.g. given an argument of "strategy", return
		// ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

		return boardGames[type].map(game => game.name)

		// Annotation:
		// Write your annotation here as a comment
	},

	listGamesAlphabetically(type) {
		// Return an array of just the names of the games within a specified 
		// type, sorted alphabetically. 
		// e.g. given an argument of "childrens", return
		// ["Candy Land", "Connect Four", "Operation", "Trouble"]

		return boardGames[type].map(game => game.name).sort()

		// Annotation:
		// Write your annotation here as a comment
	},

	findHighestRatedGamesByType(type) {
		// Return an object which is the highest rated game within the specified type.
		// e.g. given the argument of 'party', return
		// { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

		return boardGames[type].sort((a, b) => b.rating - a.rating)[0]

		// Annotation:
		// Write your annotation here as a comment
	},

	averageScoreByType(type) {
		// Return the average score for the specified type.
		// e.g. given the argument of "strategy", return 7
		// note: do not worry about rounding your result.

		return boardGames[type].reduce((acc, cV) => acc += cV.rating, 0) / boardGames[type].length

		// Annotation:
		// Write your annotation here as a comment
	},

	averageScoreByTypeAndPlayers(type, maximumPlayers) {
		// Return the average score of any games that match the specified type
		// and maximum number of players.
		// e.g. given the arguments of "strategy" and 2, return 6.16666666667
		// note: do not worry about rounding your result.

		let filtered =  boardGames[type].filter(game => game.maxPlayers === maximumPlayers)
		
		return filtered.reduce((acc, cV) => acc += cV.rating, 0) / filtered.length

		// Annotation:
		// Write your annotation here as a comment
	}
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
	studentsForEachInstructor() {
		// Return an array of instructors where each instructor is an object
		// with a name and the count of students in their module. e.g.
		// [
		//  { name: 'Pam', studentCount: 21 },
		//  { name: 'Robbie', studentCount: 18 }
		// ]

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	studentsPerInstructor() {
		// Return an object of how many students per teacher there are in each cohort e.g.
		// {
		// cohort1806: 9,
		// cohort1804: 10.5
		// }

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	modulesPerTeacher() {
		// Return an object where each key is an instructor name and each value is
		// an array of the modules they can teach based on their skills. e.g.:
		// {
		//     Pam: [2, 4],
		//     Brittany: [2, 4],
		//     Nathaniel: [2, 4],
		//     Robbie: [4],
		//     Leta: [2, 4],
		//     Travis: [1, 2, 3, 4],
		//     Louisa: [1, 2, 3, 4],
		//     Christie: [1, 2, 3, 4],
		//     Will: [1, 2, 3, 4]
		//   }

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	curriculumPerTeacher() {
		// Return an object where each key is a curriculum topic and each value is
		// an array of instructors who teach that topic e.g.:
		// {
		//   html: [ 'Travis', 'Louisa' ],
		//   css: [ 'Travis', 'Louisa' ],
		//   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
		//   recursion: [ 'Pam', 'Leta' ]
		// }

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	}
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
	bossLoyalty() {
		// Create an array of objects that each have the name of the boss and the sum
		// loyalty of all their sidekicks. e.g.:
		// [
		//   { bossName: 'Jafar', sidekickLoyalty: 3 },
		//   { bossName: 'Ursula', sidekickLoyalty: 20 },
		//   { bossName: 'Scar', sidekickLoyalty: 16 }
		// ]

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	}
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
	starsInConstellations() {
		// Return an array of all the star objects that appear in any of the constellations
		// listed in the constellations object e.g.
		// [
		//   { name: 'Rigel',
		//     visualMagnitude: 0.13,
		//     constellation: 'Orion',
		//     lightYearsFromEarth: 860,
		//     color: 'blue' },
		//   { name: 'Betelgeuse',
		//     visualMagnitude: 0.5,
		//     constellation: 'Orion',
		//     lightYearsFromEarth: 640,
		//     color: 'red' },
		//   {
		//     name: 'Achernar',
		//     visualMagnitude: 0.46,
		//     constellation: 'The Plow',
		//     lightYearsFromEarth: 140,
		//     color: 'blue'
		//   },
		//   {
		//     name: 'Hadar',
		//     visualMagnitude: 0.61,
		//     constellation: 'The Little Dipper',
		//     lightYearsFromEarth: 350,
		//     color: 'blue'
		//   }
		// ]

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	starsByColor() {
		// Return an object with keys of the different colors of the stars,
		// whose values are arrays containing the star objects that match e.g.
		// {
		//   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
		//   white: [{obj}, {obj}],
		//   yellow: [{obj}, {obj}],
		//   orange: [{obj}],
		//   red: [{obj}]
		// }

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	constellationsStarsExistIn() {
		// Sort the stars by brightness and return an array of the star's constellation names
		// Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
		// e.g.
		//  [ "Canis Major",
		//    "Carina",
		//    "Boötes",
		//    "Auriga",
		//    "Orion",
		//    "Lyra",
		//    "Canis Minor",
		//    "The Plow",
		//    "Orion",
		//    "The Little Dipper" ]


		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	}
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
	totalDamage() {

		// Return the sum of the amount of damage for all the weapons that our characters can use
		// Answer => 113

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	charactersByTotal() {

		// Return the sum damage and total range for each character as an object.
		// ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
	countAwesomeDinosaurs() {
		// Return an object where each key is a movie title and each value is the
		// number of awesome dinosaurs in that movie. e.g.:
		// {
		//   'Jurassic Park': 5,
		//   'The Lost World: Jurassic Park': 8,
		//   'Jurassic Park III': 9,
		//   'Jurassic World': 11,
		//   'Jurassic World: Fallen Kingdom': 18
		// }

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	averageAgePerMovie() {
		/* Return an object where each key is a movie director's name and each value is
				an object whose key is a movie's title and whose value is the average age
				of the cast on the release year of that movie.
			e.g.:
			{
				'Steven Spielberg':
					{
						'Jurassic Park': 34,
						'The Lost World: Jurassic Park': 37
					},
				'Joe Johnston':
					{
						'Jurassic Park III': 44
					},
				'Colin Trevorrow':
					{
						'Jurassic World': 56
					 },
				'J. A. Bayona':
					{
						'Jurassic World: Fallen Kingdom': 59
					}
			}
		*/

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	uncastActors() {
		/*
		Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

		e.g.
			[{
				name: 'Justin Duncan',
				nationality: 'Alien',
				imdbStarMeterRating: 0
			},
			{
				name: 'Karin Ohman',
				nationality: 'Chinese',
				imdbStarMeterRating: 0
			},
			{
				name: 'Tom Wilhoit',
				nationality: 'Kiwi',
				imdbStarMeterRating: 1
			}, {
				name: 'Jeo D',
				nationality: 'Martian',
				imdbStarMeterRating: 0
			}]
		*/

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	},

	actorsAgesInMovies() {
		/*
		Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

		e.g.
		[ { name: 'Sam Neill', ages: [ 46, 54 ] },
			{ name: 'Laura Dern', ages: [ 26, 34 ] },
			{ name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
			{ name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
			{ name: 'Ariana Richards', ages: [ 14, 18 ] },
			{ name: 'Joseph Mazello', ages: [ 10, 14 ] },
			{ name: 'BD Wong', ages: [ 33, 55, 58 ] },
			{ name: 'Chris Pratt', ages: [ 36, 39 ] },
			{ name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
		*/

		/* CODE GOES HERE */

		// Annotation:
		// Write your annotation here as a comment
	}
};

module.exports = {
	breweryPrompts,
	turingPrompts,
	clubPrompts,
	bossPrompts,
	classPrompts,
	modPrompts,
	kittyPrompts,
	cakePrompts,
	astronomyPrompts,
	ultimaPrompts,
	nationalParksPrompts,
	weatherPrompts,
	bookPrompts,
	dinosaurPrompts,
	boardGamePrompts,
};
