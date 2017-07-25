var mountainHeights = [9,8,7,3,6,2,5,4,1];
var tallestToShortest;
var fireOn;
var mountainsLeft = 9;

function destroyMountains() {
	// game loop
	while (mountainsLeft) {
	    // for (var i = 0; i < 8; i++) {
	    //     var mountainH = parseInt(readline()); // represents the height of one mountain.
	    //     //add mountain heights to array
	    //     mountainHeights.push(mountainH);
	    // }
	    
	    console.log(mountainHeights);
	    
	    //order mountains from tallest to shortest
	    tallestToShortest = mountainHeights.slice();
	    
	    tallestToShortest.sort(function(a, b) {
	      return b - a;
	    });
	    
	    console.log(tallestToShortest);
	    console.log(mountainHeights);
	    console.log(tallestToShortest[0]);
	    
	    // Write an action using print()
	    fireOn = mountainHeights.indexOf(tallestToShortest[0]);
	    console.log(fireOn);
	    mountainHeights.splice(fireOn, 1); // The index of the mountain to fire on.
	    
	    // To debug: printErr('Debug messages...');
	    mountainsLeft--;
	}
}

destroyMountains();