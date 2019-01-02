
//Global variables
	//color list - to hold randomized rgb values
		var colorList = [];

	//hard or easy - 6 or 3
		var size = 6;

	//div-square objects - holds color squares, divs, in an array
		var squares = document.querySelectorAll("div#colors div");

	//random color - will randomly choose from colorList; will be objective
		var random = {
			position: 0, 
			backgroundColor: 'r'
		};

	//buttons & titles - objects that will change
		var title = document.querySelector(".title");
		var maintitle = document.querySelector(".maintitle");
		var newButton = document.getElementById("new");
		var message = document.getElementById("message");
		var easyButton = document.getElementById("easy");
		var hardButton = document.getElementById("hard");



//Functions
	//create random rgb values - place into colorList
		function set_rgb_list() {
			for (var i = 0; i < size; i++) {
				colorList[i] = [];
				for (var j = 0; j < 3; j++) {
					colorList[i][j] = Math.floor(Math.random() * 256);
				}
			}
		}

	//insert rgb values into objects
		function set_background_colors() {
			for (var i = 0; i < size; i++) {

				//set color to random rgb from colorList
					squares[i].style.backgroundColor = "rgb(" + colorList[i][0] + ", " + colorList[i][1] + ", " + colorList[i][2] + ")";

				//add event listener for a click to each object
					squares[i].addEventListener("click", function() {
						if ((this.style.backgroundColor) === random.backgroundColor) {
							correct_click();
						}
						else {
							wrong_click(this);
						}
					})
			}
		}

	//choose random object
		function set_random() {
			random.position = Math.floor(Math.random() * size);
			random.backgroundColor = "rgb(" + colorList[random.position][0] + ", " + colorList[random.position][1] + ", " + colorList[random.position][2] + ")";
			maintitle.innerHTML = random.backgroundColor;
		}

	//calles previous 3 functions (list, background and random)
		function reset_game() {
			set_rgb_list();
			set_background_colors();
			set_random();
			newButton.innerHTML = "new colors";
			message.innerHTML = "";
			title.style.backgroundColor = "steelblue";
		}

	//removes second row of colors
		function remove_row_2() {
			for (var i = 0; i < 3; i++) {
				squares[i + 3].classList.remove("square");
			}
		}

	//add back second row of colors
		function add_row_2() {
			for (var i = 0; i < 3; i++) {
				squares[i + 3].classList.add("square");
			}
		}

	//wrong click
		function wrong_click(object) {
			message.innerHTML = "Try Again";
			object.style.backgroundColor = "#232323";
		}

	//correct click
		function correct_click() {
			message.innerHTML = "Correct";
			for (var i = 0; i < size; i++) {
				squares[i].style.backgroundColor = random.backgroundColor;
			}
			title.style.backgroundColor = random.backgroundColor;
			newButton.innerHTML = "play again?";
		}



//Event Listeners
	//click new
		newButton.addEventListener("click", function() {
			if (newButton.innerHTML == "play again?") {
				newButton.innerHTML = "new colors";
			}
			reset_game();
		});

	//click easy
		easyButton.addEventListener("click", function() {
			if (size == 6) {
				size = 3;
				remove_row_2();
			}
			reset_game();
			hardButton.style.backgroundColor = "";
			hardButton.style.color = "";
			easyButton.style.backgroundColor = "steelblue";
			easyButton.style.color = "white";
		})

	//click hard
		hardButton.addEventListener("click", function() {
			if (size == 3) {
				size = 6;
				add_row_2();
			}
			reset_game();
			easyButton.style.backgroundColor = "";
			easyButton.style.color = "";
			hardButton.style.backgroundColor = "steelblue";
			hardButton.style.color = "white";
		})



//MAIN()
	//basically calls the functions
	set_rgb_list();
	set_background_colors();
	set_random();
	hardButton.style.backgroundColor = "steelblue";
	hardButton.style.color = "white";