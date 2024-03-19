let timer;
let studyMinutes = 25;
let breakMinutes = 5;
let seconds = 0;
let isBreak = false;
let cycles = 0;
let isPaused = false;

function startTimer() {
    if (!timer || isPaused) {
        studyMinutes = parseInt(document.getElementById('studyTime').value, 10) || 25;
        breakMinutes = parseInt(document.getElementById('breakTime').value, 10) || 5;

        timer = setInterval(updateTimer, 1000);
        document.getElementById('startButton').disabled = true;
        document.getElementById('pauseButton').disabled = false;
        document.getElementById('resetButton').disabled = false;
        isPaused = false;
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
    isPaused = true;
    document.getElementById('startButton').disabled = false;
    document.getElementById('pauseButton').disabled = true;
}

function updateTimer() {
    if (studyMinutes === 0 && seconds === 0) {
        clearInterval(timer);
        if (isBreak) {
            cycles++;
            if (cycles < 4) {
                // Break is over, start a new study session
                studyMinutes = parseInt(document.getElementById('studyTime').value, 10) || 25;
                isBreak = false;
                document.getElementById('timer').style.color = '#000';
                startTimer();
            } else {
                // All cycles completed, reset
                resetTimer();
            }
        } else {
            // Study session is over, start a break
            studyMinutes = parseInt(document.getElementById('studyTime').value, 10) || 25;
            isBreak = true;
            document.getElementById('timer').style.color = '#00F';
            startTimer();
        }
    } else {
        // Update timer display
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            studyMinutes--;
        }

        // Add leading zero to seconds if less than 10
        let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('timer').innerHTML = studyMinutes + ':' + displaySeconds;
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    studyMinutes = parseInt(document.getElementById('studyTime').value, 10) || 25;
    breakMinutes = parseInt(document.getElementById('breakTime').value, 10) || 5;
    seconds = 0;
    isBreak = false;
    cycles = 0;
    document.getElementById('timer').innerHTML = studyMinutes + ':00';
    document.getElementById('timer').style.color = '#000';
    document.getElementById('startButton').disabled = false;
    document.getElementById('pauseButton').disabled = true;
    document.getElementById('resetButton').disabled = true;
    isPaused = false;
}
