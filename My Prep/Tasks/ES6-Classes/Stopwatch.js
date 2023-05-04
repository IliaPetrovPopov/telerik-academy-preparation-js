const _startTime = new WeakMap();
const _endTime = new WeakMap();
const _hasStarted = new WeakMap();
const _duration = new WeakMap();

class Stopwatch {
    constructor() {
        _startTime.set(this, null);
        _endTime.set(this, null);
        _hasStarted.set(this, false);
        _duration.set(this, 0);
    }

    start() {
        _startTime.set(this, (new Date).getTime());
        _hasStarted.set(this, true);
    }

    stop() {

        if(_hasStarted.get(this) === false) {
            throw new Error("The stopwatch isn't started!");
        }

        _endTime.set(this, (new Date()).getTime());
        _hasStarted.set(this, true);

        _duration.set(this, (_endTime.get(this) - _startTime.get(this)) / 1000);
    }

    reset() {
        _startTime.set(this, null);
        _endTime.set(this, null);
        _hasStarted.set(this, false);
        _duration.set(this, 0);
    }

    duration() {
        return _duration.get(this);
    }
}

let s = new Stopwatch();