// Assigning the values to the prototype

// Useless, but good task to see what does it mean 
// to break the abstraction principle

function Stopwatch() {
    let start, end, running;
    let duration = 0;

    Object.defineProperties(this, {
        start: {
            get: function() {
                return start;
            }
        },
        end: {
            get: function() {
                return end;
            }
        },
        running: {
            get: function() {
                return running;
            }
        },
        duration: {
            get: function() {
                return duration;
            },
            set: function(value) {
                duration = value;
            }
        }
    })
}

Stopwatch.prototype.start = function() {
    if(this.running) {
        throw new Error("Stopwatch has already started!");
    }

    this.start = (new Date()).getTime();
    this.running = true;
};

Stopwatch.prototype.stop = function() {
    if(!this.running) {
        throw new Error("Stopwatch has not been started!");
    }

    this.end = (new Date()).getTime();   
    this.duration += (end - start) / 1000;
    this.running = false;
};

Stopwatch.prototype.reset = function() {
    this.start = 0;
    this.end = 0 ; 
    this.duration = 0;
    this.running = false;
}

let stopwatch = new Stopwatch();