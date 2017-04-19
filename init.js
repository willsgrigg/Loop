loop = new Loop({
	delay: 400,
	slowRate: 50,
	loops: 6,
	slowLoops: 6,
	execute: function(instance) {
		console.log('Execute ',instance);
		$('img').toggleClass('transition');
	},
	lastExecute: function(instance) {
		console.log('Last execute ',instance);
		$('img').toggleClass('transition');
	}
});