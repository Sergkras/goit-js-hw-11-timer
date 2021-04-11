const daysRef = document.querySelector('.value[data-value="days"]');
const hoursRef = document.querySelector('.value[data-value="hours"]');
const minsRef = document.querySelector('.value[data-value="mins"]');
const secsRef = document.querySelector('.value[data-value="secs"]');

function timeRef(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

return {days, hours, mins, secs};
};

function pad(value) {
    return String(value).padStart(2, '0');
};

const CountdownTimer = function ({ selector, targetDate }) {

  this.selector = selector;
  this.targetDate = targetDate;

    this.start = function () {
        const startTime = targetDate;

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const { days, hours, mins, secs } = timeRef(deltaTime);

            daysRef.innerText = days;
            hoursRef.innerText = hours;
            minsRef.innerText = mins;
            secsRef.innerText = secs;
        }, 1000);
    };
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January 01, 2030'),
});
timer.start()

