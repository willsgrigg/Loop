;(function(window) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Loop(options) {
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this.el;
		this.transitionEvent;
		this._init();
	}

	Loop.prototype.options = {
		// delay in milliseconds
		delay: 400,
		// slow rate in milliseconds
		slowRate: 50,
		// number of loops to make, integer or range as array [min,max]
		loops: 6,
		// number of loops to slow down in
		slowLoops: 6,
		// function to run on each loop
		execute: function() {return false;}
	};

	Loop.prototype._init = function() {
		this.el = document.createElement("DIV");
    	document.body.appendChild(this.el);
    	this.el.style.transition = 'transform 0s';

    	this.options.transitionEvent = this._whichTransitionEvent();
	};

	Loop.prototype.go = function() {
		var i = 0,
			delay = this.options.delay,
			slowRate = this.options.slowRate,
			slowLoops = this.options.slowLoops,
			self = this;

		if(Array.isArray(this.options.loops)) {
			var loops = Math.floor(Math.random()
					* (this.options.loops[1] - this.options.loops[0])
					+ this.options.loops[0]);
		} else {
			var loops = this.options.loops;
		}

		this.el.style.transitionDelay = delay + 'ms';

        this.el.style.transform = 'translate3d(1px,0,0)';

    	var _bindLoop = function() {

    		self.options.execute(self);

			i++;

			if(i > loops && (i - loops) < slowLoops) {
				delay += slowRate;
				slowRate += self.options.slowRate;
			} else if(i >= (loops + slowLoops)) {
				delay += slowRate;
				slowRate += self.options.slowRate;
				self.el.removeEventListener(self.options.transitionEvent, _bindLoop);
			}

			self.el.style.transitionDelay = delay + 'ms';

			self.el.style.transform = 'translate3d('+(i+1)+'px,0,0)';

		}

        this.el.addEventListener(this.options.transitionEvent, _bindLoop);
	}

	Loop.prototype._whichTransitionEvent = function() {
		var t,
			el = document.createElement("fakeelement");

		var transitions = {
			"transition"      : "transitionend",
			"OTransition"     : "oTransitionEnd",
			"MozTransition"   : "transitionend",
			"WebkitTransition": "webkitTransitionEnd"
		}

		for (t in transitions){
			if (el.style[t] !== undefined){
				return transitions[t];
			}
		}
	};

	window.Loop = Loop;

})(window);