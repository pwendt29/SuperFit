document.addEventListener('DOMContentLoaded', () => {
    const monthYearDisplay = document.getElementById('monthYear');
    const calendarDays = document.getElementById('calendarDays');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const workoutButton = document.getElementById('workoutButton');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    function renderCalendar() {
        calendarDays.innerHTML = '';
        monthYearDisplay.textContent = `${months[currentMonth]} ${currentYear}`;

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.appendChild(document.createElement('div'));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;

            if (
                day === currentDate.getDate() &&
                currentMonth === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear()
            ) {
                dayDiv.classList.add('current-date');
            }

            calendarDays.appendChild(dayDiv);
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    

    // === Today's Workout Popup ===
const popupContainer = document.getElementById('popupContainer');
const popupText = document.getElementById('popupText');
const closePopup = document.getElementById('closePopup');

workoutButton.addEventListener('click', () => {
    // Replace this with your real workout-generating function
    popupText.textContent = "Here is your workout for today!"
    popupContainer.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

    renderCalendar();
});
