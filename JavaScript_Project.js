// Quiz Questions
//Character should be the Musical Muse, She will quiz you on your musical knowledge


const questions = [
    {
        question: "What is a spectrum?",
        optionA: "Stick",
        optionB: "Showel",
        optionC: "Matchstick",
        optionD: "Guitar pick",
        optionE: "banjo string",
        correctOption: "optionD"
    },

    {
        question: "How many strings does a ukelele have?",
        optionA: "3",
        optionB: "6",
        optionC: "2",
        optionD: "8",
        optionE: "4",
        correctOption: "optionE"
    },

    {
        question: "What else can a marimba be reffered to as?",
        optionA: "Balafon",
        optionB: "Lagguta",
        optionC: "Bass xylophone",
        optionD: "Txalaparta",
        optionE: "mobile phone",
        correctOption: "optionC"
    },

    {
        question: "Name the first person to appear on the Rolling Stones",
        optionA: "Waylon Jennings",
        optionB: "Jerry Lee",
        optionC: "Johnny Cash",
        optionD: "Bob Dylan",
        optionE: "Elvis Presly",
        correctOption: "optionC"
    },

    {
        question: "Which year did Elvis have his first UK song at No.1?",
        optionA: "The 1950's",
        optionB: "The 1970's",
        optionC: "The 1940's",
        optionD: "The 1930's",
        optionE: "The 1960's",
        correctOption: "optionA"
    },

    {
        question: "Which singer has had a billboard No.1 hit in each of the last four decades?",
        optionA: "Justin Bieber",
        optionB: "Ariana Grande",
        optionC: "Mariah Carey",
        optionD: "Shawn Mendez",
        optionE: "Miley Cyrus",
        correctOption: "optionC"
    },

    {
        question: "What was Freddie Mercury's real name?",
        optionA: "Freddie Saturn",
        optionB: "Frederick Arnold",
        optionC: "Ahmed Bulsara",
        optionD: "Farrokh Bulsara",
        optionE: "Christopher Mercury",
        correctOption: "optionD"
    },

    {
        question: "What is the minimun number of band members for a band to be considered a Big Band?",
        optionA: "10",
        optionB: "12",
        optionC: "14",
        optionD: "21",
        optionE: "11",
        correctOption: "optionA"
    },

    {
        question: "Who was the oldest member of The Jackson 5?",
        optionA: "Tito Jackson",
        optionB: "Jermaine Jackson",
        optionC: "Marlon Jackson",
        optionD: "Micheal Jackson",
        optionE: "Jackie Jackson",
        correctOption: "optionE"
    },

    {
        question: "What is the note that an orchestra tunes to?",
        optionA: "B",
        optionB: "A",
        optionC: "C",
        optionD: "E",
        optionE: "D",
        correctOption: "optionB"
    },

    {
        question: "How many musicians are required to make up a nonet?",
        optionA: "45",
        optionB: "9",
        optionC: "12",
        optionD: "16",
        optionE: "4",
        correctOption: "optionB"
    },

    {
        question: "Which classic band recorded the following songs: 'I Wanna Hold Your Hand 'and 'Hey Jude?",
        optionA: "The Beatles",
        optionB: "Led Zeppelin",
        optionC: "Gorillaz",
        optionD: "Rush",
        optionE: "Arctic Monkeys",
        correctOption: "optionA"
    },


    {
        question: "What was the name of Micheal Jackson's pet monkey?",
        optionA: "Champagne",
        optionB: "Fizz",
        optionC: "Shampoo",
        optionD: "Charles",
        optionE: "Bubbles",
        correctOption: "optionE"
    },

    {
        question: "Beyonce was the lead singer of which girl group in the late 1990's?",
        optionA: "Spice Girls",
        optionB: "SWV",
        optionC: "Hush Hush",
        optionD: "TLC",
        optionE: "Destiny's Child",
        correctOption: "optionE"
    },

    {
        question: "Which of the following musical terms is used to describe music that is soft in volume?",
        optionA: "Fortisimo",
        optionB: "Legato",
        optionC: "Allegro",
        optionD: "Piano",
        optionE: "Forte",
        correctOption: "optionD"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionB"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionC"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionA"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionA"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionE"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionB"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionD"
    },

    {
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionC"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionE"
    },

    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        optionE: "",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    document.getElementById("option-five-label").innerHTML = currentQuestion.optionE;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-model').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //delay question number till next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Do you even care? Try Again."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Disappointing, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Nice Job, Keep going and you'll be a master yet!"
        remarkColor = "yellow"
    }
    else if (playerScore = 10) {
        remark = "You've done it! You have beaten my challenge!"
        remarkColor = "green"
    }


    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-model').style.display = "flex"

}

//closes score model, resets game and reshuffles questions
function closeScoreModel() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-model').style.display = "none"
}

//function to close warning model
function closeOptionModel() {
    document.getElementById('option-model').style.display = "none"
}
