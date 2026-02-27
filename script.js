let hasKey = false;
let saved = false;
let playerLives = 3;
let bossLives = 3;

const scenario = {
    one: {
      image: './images/Dark_corridor.jpg',
      text: 'You find yourself in a dungeon of sorts. It is dark around you, the light of your torch only lights a few feet in front of you. You currently are in a narrow hallway, and you can barely make out an intersection in front of you. Do you go left or right?',
    
    buttons: [
      { name: 'Follow left path.', action: 'advanceTo(scenario.two)' },
      { name: 'Follow right path.', action: 'advanceTo(scenario.three)' },
    ],
    sound: './sound/horror-background.mp3',
    },
    two: {
      image: './images/rustykey.jpg',
      text: "It’s a dead end. However, you can see a metal key glimmering in the light of your torch on the floor. Pick it up?",
      buttons: [
        {name: 'Yes.', action: 'pickUpKey()'},
        {name: 'No.', action: 'advanceTo(scenario.one)'},
      ],
      sound: './sound/horror-background.mp3',
    },
    three: {
      image: './images/dungeon_start.jpg',
      text: 'You enter a small room. To your left, you can make out a wooden door with a metal lock. The rest of the room is still shrouded in darkness. Do you move into the room or go to the door?',
      buttons: [
        { name: 'Go to the Door.', action: 'advanceTo(scenario.door)' },
        { name: 'Move further into the room.', action: 'advanceTo(scenario.rest)' },
        { name: 'Go back.', action: 'advanceTo(scenario.one)' },
      ],
      sound: './sound/horror-background.mp3',
    },
    rest: {
      image: './images/Bed.jpg',
      text: 'You see a small bedframe with a dirty straw mattress in the corner of the room, as well as a small rusty tap that’s dripping steadily into the basin below it. The water looks clean and refreshing. Take a rest?',
      buttons: [
        { name: 'Yes', action: 'advanceTo(scenario.saved)'},
        { name: 'No', action: 'advanceTo(scenario.three)' }
      ],
      sound: './sound/flowing-water-sound-effect.mp3',
    },
    saved: {
      image: './images/Bed.jpg',
      text: 'You feel refreshed and energized.',
      buttons: [
        { name: 'Go Back.', action: 'advanceTo(scenario.three)'},
      ],
      sound: './sound/flowing-water-sound-effect.mp3',
    },
    door: {
      image: './images/EndingDoor.jpg',
      text: 'It appears to be locked. You can see a small sliver of light along the edges of the wooden door. Open it?',
      buttons: [
        {name: 'Yes.', action: 'checkForKey()'},
        {name: 'No.', action: 'returnToSavePoint()'}
      ],
      sound: './sound/door_creaking.mp3',
    },
    noKey: {
      image: './images/EndingDoor.jpg',
      text: "You cannot open the door, because you don't have a key. There has to be one around here somewhere...",
      buttons: [
        {name: "Go back", action: 'advanceTo(scenario.three)'}
      ],
    },
    five: {
      image: './images/Feast.jpg',
      text: 'You unlock the door using the key you picked up and you cautiously move into the room. Curiously, in the center of the room, there appears to be a banquet full of delicacies. A spit-roast pig, platters full of roast potatoes, grilled vegetables, and exotic fruits, saucepans full of gravy and chalices almost overflowing with wine and mead fill the table. There are chairs at each end of the table, one of them occupied with what used to be a person, but now is nothing more than rotting cloth and bones. The other one is empty. Do you sit? ',
      buttons: [
        { name: 'Sit.', action: 'advanceTo(scenario.six)' },
        { name: 'Leave.', action: 'advanceTo(scenario.three)' },
      ],
    },
    six: {
      image: './images/skeleton_table.jpg',
      text: 'Suddenly, the remains come to life! “Traveler”, the body says with a creaking voice “release me! Please! I beg you! I have been cursed to remain here for eternity, until I finish all the dishes on this table. Now, since I haven’t the facilities to accomplish this task anymore, I’ll ask you, Traveler, to help me…you look a bit hungry…” You swear he is staring directly into your eyes with those empty eye sockets of his.………you do feel a bit hungry…Sit at the table?',
      buttons: [
        { name: 'Yes.', action: 'advanceTo(scenario.seven)' },
        { name: 'No.', action: 'returnToSavePoint()' },
      ],
      sound: './sound/suspense-2.mp3',
    },
    seven: {
      image: './images/skeleton_table.jpg',
      text: 'You decide to sit in the empty chair. You look at the living skeleton in front of you, and despite the fact that he no longer has any skin or muscles to show any facial expressions, you feel as though he is grinning slightly. “You see,”, he says. “I was trapped here by the King of Thieves, because I was after his bounty. You want this treasure too, don’t you?” Indeed you do, you entered this dungeon in search of the riches rumored to still remain in the depths of this dungeon. “Come then, help me break this curse and I’ll tell you where you can find the treasure.” ',
      buttons: [
        { name: '"Okay."', action: 'advanceTo(scenario.eight)' },
        { name: '"...Sure"', action: 'advanceTo(scenario.eight)' },
      ],
    },
    eight: {
      image: './images/skeleton_table.jpg',
      text: '“Great! It is quite simple, really – all you have to do is drink the contents of this chalice in one go, and I can finally rest.” A cup appears in front of you, filled to the brim with a dark liquid. You can see your face reflected in the liquid’s surface. Drink it?',
      buttons: [
        { name: 'Yes', action: 'advanceTo(scenario.ten)' },
        { name: 'No', action: 'advanceTo(scenario.nine)' },
      ],
    },
    nine: {
      image: './images/chalice.jpg',
      text: 'Drink it?',
      buttons: [
        { name: 'Yes', action: 'advanceTo(scenario.ten)' },
        { name: 'Yes', action: 'advanceTo(scenario.ten)' },
      ],
      sound: './sound/pouring.mp3',
    },
    ten: {
      image: './images/chalice.jpg',
      text: 'You tentatively lift the chalice to your lips. As soon as the liquid touches your mouth, you start to feel…..strange. Yet, you keep drinking. Gulping down this dark, viscous liquid, you notice out of the corner of your eyes, how the remains that were just talking to you had changed. Bones and dusty, rotting clothes no longer, something that almost resembles a person is sitting in front of you…somehow, even though you want to, you can’t seem to stop drinking, and the liquid in the cup seems to not diminish in the slightest.',
      buttons: [
        { name: 'Look', action: 'advanceTo(scenario.eleven)' },
      ],
      sound: './sound/pouring.mp3',
    },
    eleven: {
      image: './images/Skeleton_table.jpg',
      text: 'The person sitting across from you is no longer dead. A beaming image of vitality is looking – laughing even – at you! The King of Thieves stands, and moves over to you. “Thank you, Traveler.” He rests a hand on your bony shoulder. “Before I go, I should tell you the following: The King of Thieves is the one who can break the curse.”',
      buttons: [
        { name: 'Reach for your weapon', action: 'advanceTo(scenario.bossFight1)' },
        { name: 'Run', action: 'returnToSavePoint()' },
      ],
      sound: './sound/BossBattle.mp3',
    },
    bossFight1: {
      image: './images/BossBattle.jpeg',
      text: 'You now face the King of Thieves, with his power restored. Although you are a skilled fighter yourself, the liquid in the cup seems to have weakened you...you can only take a few hits. Prepare to fight!',
      buttons: [
        { name: 'Fight!', action: 'advanceTo(scenario.bossFight2)' },
      ],
      sound: './sound/BossBattle.mp3',
    },
    bossFight2: {
      image: './images/BossBattle.jpeg',
      text: 'What do you want to do?',
      buttons: [
        { name: 'Attack', action: 'throwHands("attack")' },
        { name: 'Defend', action: 'throwHands("defend")' },
        { name: 'Spin Attack', action: 'throwHands("spin attack")' },
      ],
      sound: './sound/BossBattle.mp3',
    },
    gameOver: {
      image: './images/GameOver.jpg',
      text: 'You were not able to break the curse...',
      buttons: [
        {name: 'Try again?', action: 'reset()'}
      ]
    },
    ending: {
      image: './images/EndingDoor.jpg',
      text: 'The King of Thieves falls to your sword, and suddenly you feel your energy restore. You can finally rest and return to the world, knowing that the curse is broken.',
      buttons: [{ name: 'To be continued...', action: 'reset()' }],
      sound: './sound/finish.mp3',
    }
};

// ==============================================================

// Grab references to important HTML elements
const images = document.querySelector('#images');
const text = document.querySelector('#text');
//const input = document.querySelector('#input');
const controls = document.querySelector('#controls');
const greetingArea = document.querySelector('#greeting');
const gameArea = document.querySelector('#gameArea');

let playerName;
let currSound = new Audio();

function changeImage(img) {
    images.style.backgroundImage = `url(${img})`
}

function changeText(txt) {
    text.innerHTML = txt.replace('PLAYER', playerName);
}

function changeSound(sound) {
    // If we dont have a sound for a scenario we dont want
    // the code to break, so we add a if statement to check it
    if (sound === undefined) {
        return;         // Immediately stops the function
    }

    currSound = new Audio(sound);
    currSound.play();
}

function changeButtons(buttonArray) {
    // Clear previous buttons on scenario change
    controls.innerHTML = ''; // Clear previous buttons

  if (!buttonArray) return;

  for (let i = 0; i < buttonArray.length; i++) {
    const button = document.createElement('button');
    button.textContent = buttonArray[i].name;
    button.className = 'btn btn-primary btn-sm';

    // Attach event listeners directly
    //ngl i had to google so much of this function 
    if (buttonArray[i].action.startsWith('playerAction')) {
      const actionType = buttonArray[i].action.match(/playerAction\("([^"]+)"\)/)[1]; 
      button.addEventListener('click', () => throwHands(actionType));
    } else {
      button.setAttribute('onclick', buttonArray[i].action);
    }

    controls.appendChild(button);
  }
}

//adds key to "inventory" (kind of)
function pickUpKey() {
  hasKey = true;
  advanceTo(scenario.three);
}

//check for key pickup
function checkForKey() {
  if(hasKey === false) {
    advanceTo(scenario.noKey);
  } else {
    advanceTo(scenario.five);
  }
}

//easier returns to savepoint
function gameSaved() {
  saved = true;
  advanceTo(scenario.three);
  alert('Game saved!')
}

function returnToSavePoint() {
  if(saved === true) {
    advanceTo(scenario.three);
  } else {
    advanceTo(scenario.gameOver);
  }
}


function throwHands(action) {
  //simple bossfight mechanics similar to rock paper scissors
  let bossMoves = ["attack", "defend", "spin attack"];
  bossMoves = bossMoves[Math.floor(Math.random() * bossMoves.length)];
  let resultText = `<p>You chose to ${action}, and the King of Thieves chose to ${bossMoves}.</p>`;

  if (action === "attack" && bossMoves !== "defend") {
    bossLives--;
    resultText += '<p>You hit the King of Thieves! He loses 1 life.</p>';
  } else if (action === "special" && bossMoves !== "special") {
    bossLives--;
    resultText += '<p>Your special move was effective! The King of Thieves loses 1 life.</p>';
  } else if (bossMoves === "attack" && action !== "defend") {
    playerLives--;
    resultText += '<p>The King of Thieves strikes you! You lose 1 life.</p>';
  } else {
    resultText += '<p>No damage taken by either side.</p>';
  }

  resultText += `<p>Player Lives: ${playerLives}, Boss Lives: ${bossLives}</p>`;
  changeText(resultText);

  
  //win/lose conditions
  if (playerLives <= 0) {
    advanceTo(scenario.gameOver);
  } else if (bossLives <= 0) {
    advanceTo(scenario.ending);
  }
}  

/*
  The main game driving function. It allows us to move
  through the scenarios while also calling other
  functions like one that changes the image, etc. 
*/
function advanceTo(scenario) {
    // Stop the current sound
    currSound.pause();

    // Functions to change image, text, buttons and sound
    changeImage(scenario.image);
    changeText(scenario.text);
    // changeSound(scenario.sound);
    changeButtons(scenario.buttons);
}

// Start game function
function startGame() {
    // Hide greeting area
    greetingArea.style.display = 'none';

    // Show game area
    gameArea.style.display = 'flex';

    // Start first scenario
    advanceTo(scenario.one);
}

// Reset game function
function reset() {
    // Stop the sound
    currSound.pause();

    // Revert everything
    greetingArea.style.display = 'flex';
    gameArea.style.display = 'none';
    //input.style.display = 'inline';
}


// Add event listener to start button
document.querySelector('#btnStart')
    .addEventListener('click', startGame);

// Add event listener to input
/*input.addEventListener('change', function(event) {
    playerName = event.target.value;
    input.style.display = 'none';
    input.value = '';

    // Got scenario two
    advanceTo(scenario.two);
});*/
