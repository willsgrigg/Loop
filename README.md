# Loop
Replacement for setInterval using CSS transition delays and event listeners.

As well as emulating a setInterval Loop allows for easy slowing down of the loop to a point where it stops similar to the slowing down of a slot machine.

var loop = new Loop({
		delay: 400,     // delay in milliseconds
		slowRate: 50,		// slow rate in milliseconds
		loops: 6,		    // number of loops to make, integer or range as array [min,max]
		slowLoops: 6,		// number of loops to slow down in
    execute: function(instance) {		// function to run on each loop
        console.log(instance);
    }
});
