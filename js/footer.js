document.addEventListener('DOMContentLoaded', (event) => {
    var whatyearisit = document.getElementById("whatyearisit");
    var year = new Date().getFullYear();

    whatyearisit.innerText = year;
});