function startTime() {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', })
    .replace(/(:\d{2})$/, "");
    setTimeout(startTime, 1000);
}
