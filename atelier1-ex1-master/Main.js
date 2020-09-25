var one1;
var two2;
var isHit = false;
function preload() {
	one1 = loadImage('assets/bird.png');
	two2 = loadImage('assets/bird2.png');

}

function setup() {


	console.log("loaded image");
	createCanvas(windowWidth - 250, windowHeight - 100, WEBGL);
	console.log("Trying image");
	//image(img,0,0);
	console.log("Setup image");
	// This is a link to player1.js && player2.js
	playerOne = new Player1();

	playerTwo = new Player2();
}

function draw(){

		//camera(one.position.x,one.position.y);
		if(keyIsDown('69')){
			one.position.rotate(PI /3.0);
		}
		if(keyIsDown(LEFT_ARROW)){
			one.position.x = one.position.x - 6;

		}
		if(keyIsDown(RIGHT_ARROW)){
			one.position.x = one.position.x + 6;
		}
		if(keyIsDown(UP_ARROW)){
			one.position.y = one.position.y - 6;
		}
		if(keyIsDown(DOWN_ARROW)){
			one.position.y = one.position.y + 6;
		}



// resets the scene to prevent mouse drawing
clear();
background(255,204,0);
one.addImage(one1);
two.addImage(two2);


//two.position.x = mouseX;
//two.position.y = mouseY;

if (one.collide(two)){
	if(isHit) {
		background(255, 204, 0);
		isHit = !isHit;
	}else{
		background(0);
		isHit = !isHit;
	}
	}

two.collide(one);

// preview colliders
one.debug = mouseIsPressed;
two.debug = mouseIsPressed;

drawSprites();

}