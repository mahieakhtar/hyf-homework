function fetchAstronersData() {
    fetch('http://api.open-notify.org/astros.json')
        .then(response => {
            return response.json();
        })
        .then(astronautsList => {
            let outPut = " ";
            outPut = '<h1>There are ' + astronautsList.people.length + ' astronauts in space.</h1>';
            outPut += '<h2>They are:</h2>';
            outPut += '<ul>';
            astronautsList.people.forEach(function (people) {
                outPut += '<li>';
                outPut += people.name;
                outPut += '</li>';
            });
            outPut += '</ul>';
            document.getElementById("response").innerHTML = outPut;
        })
}

document.getElementById("btn").addEventListener('click', fetchAstronersData);