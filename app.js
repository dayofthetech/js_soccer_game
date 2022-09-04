/**
 * This test game will focus on displaying the teams on the premier league
 * using the knowledge learned so from and taking tips from the
 * memory card game from youtube
 *
 * 8/31
 * you might want to use
 * somethingInApp = innerHTML = "Your text" or in this case, name ID, I think
 *
 * 9/1
 *Turn all the names into buttoms and then use classList.add to add a separate class,
 because you need bottoms to click
 *
 */
//everything in inside this code below
document.addEventListener('DOMContentLoaded', () => {
  //creating the teams array
  const teamArray = [
    {
      name: 'Arsenal',
      //you will add an img later
    },
    {
      name: 'Manchester City',
    },
    {
      name: 'Tottenham'
    },
    {
      name: 'Brighton'
    },
    {
      name: 'Leeds'
    },
    {
      name: 'Chelsea'
    },
    {
      name: 'Newcastle'
    },
    {
      name: 'Manchester United'
    },
    {
      name: 'Liverpool'
    },
    {
      name: 'Brentford'
    },
    {
      name: 'Fulham'
    },
    {
      name: 'Crystal Palace'
    },
    {
      name: 'Southhampton'
    },
    {
      name: 'Nottingham'
    },
    {
      name: 'Aston Villa'
    },
    {
      name: 'West Ham'
    },
    {
      name: 'Everton'
    },
    {
      name: 'Wolfes'
    },
    {
      name: 'Leicester'
    }
  ]

  //this is a short cut to sorting an array randomdly
  teamArray.sort(() => 0.5 - Math.random())

  //you are grabbing the div from index.html through its ID
  const grid = document.querySelector('.grid')


  //create your board
  function createBoard() {
    /**8/29/2022
     * So far from this function I got a new array of random teams
     * the next step is to add two teams togueter
     */
    //this is the sintax of a for loop
    //start from 0, as long as i is less than something, then increment byb 1
    for (let i = 18; i < teamArray.length; i++) {
      //js method to create an element, in this it creates an image
      const card = document.createElement('name')

      //once the card img is created, you will get the src and assiant a blank
      //   card.setAttribute('src', 'images/blank.png')
      //this is to keep track of each card, by adding an ID you are adding a number
      card.setAttribute('data-id', i)
      //you are adding an event listener click to each individual card
      //so you click the card, the flipCard function will be called
      //this is a function within a function
      //   card.addEventListener('click', flipCard)
      //you are grabing the grid, which is a div
      //and you are appending a card img
      grid.appendChild(card)
      console.log(teamArray)
      //this prints the last item on the array
      //   console.log(teamArray[i])
    }
  }

  createBoard()
})
