const today = document.querySelector("#date");

function getDate() {
    const todayDate = new Date();
    const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const year = String(todayDate.getFullYear());
    const month = String(todayDate.getMonth()).padStart(2, "0");
    const date = String(todayDate.getDate()).padStart(2, "0");
    const day = weekDay[todayDate.getDay()];

    today.innerText = `${year}.${month}.${date} ${day}`;
}

getDate();
