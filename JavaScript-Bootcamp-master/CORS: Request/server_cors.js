const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (evt) => {
    if (evt.target.readystate ===  4 && evt.target.status === 200) {
        console.log(evt.target);
    }
})

request.open("GET", "http://localhost:3000/musicbands");
request.send();
