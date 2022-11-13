window.addEventListener('message', (event) => {
    if (event.data.type === 'showText') {
        const element = document.getElementById("screentext")
        //element.classList.add("display");
        $('#screentext').css('background', event.data.color);
        $("#screentext").fadeIn(250);
        element.innerHTML = event.data.text;
    } else if (event.data.type === 'hideText') {
        const element = document.getElementById("screentext")
        $("#screentext").fadeOut(250);
        //element.classList.remove("display");
    }
});