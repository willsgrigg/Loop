loop = new Loop({
	delay: 400,
	infinite: true,
	execute: function(instance) {
		console.log(instance);
		$('img').toggleClass('transition');
	},
	lastExecute: function(instance) {
		console.log(instance);
		$('img').toggleClass('transition');
	}
});