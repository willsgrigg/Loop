# Loop
Replacement for setInterval using CSS transition delays and event listeners.

As well as emulating a setInterval Loop allows for easy slowing down of the loop to a point where it stops similar to the slowing down of a slot machine.

There is some example markup in the index.html and a simple initialisation in init.js.

## Getting Started

Loop will execute the normal callback for the number of loops plus slow loops before running the last callback, i.e. with 6 loops and 6 slow loops it will loop normally 12 times then loop once more with the last callback for a total of 13 loops.

You can specify an array of loops in which case it will choose a random number from the range each time it starts looping, generating a new number on each subsequent start.

```
new Loop({
	// delay in milliseconds
	delay: 400,
	// slow rate in milliseconds
	slowRate: 50,
	// number of loops to make, integer or range as array [min,max]
	loops: 6,
	// number of loops to slow down in
	slowLoops: 6,
	// run infinitely
	infinite: false,
	// function to run on each loop
	execute: function() {},
	// function to run on last loop
	lastExecute: function() {}
});
```

Start looping:

```
loop.go();
```

Stop loop:

```
loop.stop();
```