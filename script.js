document.addEventListener('DOMContentLoaded', function() {
    const currentTimeDisplay = document.getElementById('current-time');
    const alarmSound = document.getElementById('alarm-sound');
    const uploadImageInput = document.getElementById('upload-image');
    const previewImage = document.getElementById('preview');
    const backgroundSelect = document.getElementById('background-select');
    const body = document.body;

    // Alarm 1
    const alarmTimeInput1 = document.getElementById('alarm-time-1');
    const alarmToneSelect1 = document.getElementById('alarm-tone-1');
    const setAlarmButton1 = document.getElementById('set-alarm-1');
    const stopAlarmButton1 = document.getElementById('stop-alarm-1');

    // Alarm 2
    const alarmTimeInput2 = document.getElementById('alarm-time-2');
    const alarmToneSelect2 = document.getElementById('alarm-tone-2');
    const setAlarmButton2 = document.getElementById('set-alarm-2');
    const stopAlarmButton2 = document.getElementById('stop-alarm-2');

    // Alarm 3
    const alarmTimeInput3 = document.getElementById('alarm-time-3');
    const alarmToneSelect3 = document.getElementById('alarm-tone-3');
    const setAlarmButton3 = document.getElementById('set-alarm-3');
    const stopAlarmButton3 = document.getElementById('stop-alarm-3');

    let alarmTime1 = null;
    let alarmTime2 = null;
    let alarmTime3 = null;

    // Update current time every second
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

        // Check Alarm 1
        if (alarmTime1 && now >= alarmTime1) {
            alarmSound.src = alarmToneSelect1.value;
            alarmSound.play();
            stopAlarmButton1.disabled = false;
            setAlarmButton1.disabled = true;
            alarmTime1 = null;
        }

        // Check Alarm 2
        if (alarmTime2 && now >= alarmTime2) {
            alarmSound.src = alarmToneSelect2.value;
            alarmSound.play();
            stopAlarmButton2.disabled = false;
            setAlarmButton2.disabled = true;
            alarmTime2 = null;
        }

        // Check Alarm 3
        if (alarmTime3 && now >= alarmTime3) {
            alarmSound.src = alarmToneSelect3.value;
            alarmSound.play();
            stopAlarmButton3.disabled = false;
            setAlarmButton3.disabled = true;
            alarmTime3 = null;
        }
    }

    setInterval(updateTime, 1000);

    // Set Alarm 1
    setAlarmButton1.addEventListener('click', function() {
        const alarmTimeValue = alarmTimeInput1.value;
        if (alarmTimeValue) {
            const now = new Date();
            const [hours, minutes] = alarmTimeValue.split(':');
            alarmTime1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

            if (alarmTime1 <= now) {
                alarmTime1.setDate(alarmTime1.getDate() + 1);
            }

            setAlarmButton1.disabled = true;
            stopAlarmButton1.disabled = false;
        }
    });

    // Stop Alarm 1
    stopAlarmButton1.addEventListener('click', function() {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        stopAlarmButton1.disabled = true;
        setAlarmButton1.disabled = false;
    });

    // Set Alarm 2
    setAlarmButton2.addEventListener('click', function() {
        const alarmTimeValue = alarmTimeInput2.value;
        if (alarmTimeValue) {
            const now = new Date();
            const [hours, minutes] = alarmTimeValue.split(':');
            alarmTime2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

            if (alarmTime2 <= now) {
                alarmTime2.setDate(alarmTime2.getDate() + 1);
            }

            setAlarmButton2.disabled = true;
            stopAlarmButton2.disabled = false;
        }
    });

    // Stop Alarm 2
    stopAlarmButton2.addEventListener('click', function() {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        stopAlarmButton2.disabled = true;
        setAlarmButton2.disabled = false;
    });

    // Set Alarm 3
    setAlarmButton3.addEventListener('click', function() {
        const alarmTimeValue = alarmTimeInput3.value;
        if (alarmTimeValue) {
            const now = new Date();
            const [hours, minutes] = alarmTimeValue.split(':');
            alarmTime3 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

            if (alarmTime3 <= now) {
                alarmTime3.setDate(alarmTime3.getDate() + 1);
            }

            setAlarmButton3.disabled = true;
            stopAlarmButton3.disabled = false;
        }
    });

    // Stop Alarm 3
    stopAlarmButton3.addEventListener('click', function() {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        stopAlarmButton3.disabled = true;
        setAlarmButton3.disabled = false;
    });

    // Upload and display personalized image
    uploadImageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Change background
    backgroundSelect.addEventListener('change', function() {
        const selectedBackground = backgroundSelect.value;
        body.style.backgroundImage = `url('${selectedBackground}')`;
    });
});