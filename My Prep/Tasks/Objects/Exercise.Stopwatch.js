function Stopwatch() {
    let start, end, running;
    let duration = 0;

    this.start = function() {
        if(running) {
            throw new Error("Stopwatch has already started");
        }

        start = (new Date()).getTime();
        running = true;
    };

    this.stop = function() {
        if(!running) {
            throw new Error("Stopwatch has not started");
        }

        end = (new Date()).getTime();
        duration += (end - start) / 1000;
        running = false;
    };

    this.reset = function() {
        start = null;
        end = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
    }
  })
}

let stopwatch = new Stopwatch();
