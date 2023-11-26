document.addEventListener('DOMContentLoaded', function() {
    let patient = document.querySelector('.patient');
    let targetPosition = {
        left: 60,
        bottom: 10
    };

    let interval = setInterval(function() {
        let patientPosition = patient.getBoundingClientRect();
        let hospitalPosition = document.querySelector('.hospital').getBoundingClientRect();

        if (patientPosition.left < hospitalPosition.left + (targetPosition.left / 100 * hospitalPosition.width)) {
            patient.style.left = patientPosition.left + 1 + "px";
        } else if (patientPosition.bottom < window.innerHeight - (targetPosition.bottom / 100 * window.innerHeight)) {
            patient.style.bottom = patientPosition.bottom - window.innerHeight + 1 + "px";
        } else {
            clearInterval(interval);
        }
    }, 10);
});
