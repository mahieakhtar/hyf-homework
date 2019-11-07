let ul = document.querySelector('ul');
const user1 = fetch('https://api.github.com/search/repositories?q=user:Nazaqat');
const user2 = fetch('https://api.github.com/search/repositories?q=user:HouriaDanesh');
const user3 = fetch('https://api.github.com/search/repositories?q=user:Sreelatha-Vallabhaneni');

Promise.all([user1, user2, user3])
    .then(responses => {
        const jsonResponses = responses.map(response => response.json());
        console.log(jsonResponses);
        return Promise.all(jsonResponses);
    })
    .then(responses => {
        console.log(responses);
        responses.map((user) => {
            console.log(user.items[0].owner.login);
            let li = document.createElement('li')
            li.innerHTML = user.items[0].owner.login;
            ul.appendChild(li);
            user.items.map((data) => {
                console.log(data.name + ': ' + data.html_url)
                let newUl = document.createElement('ul');
                let newli = document.createElement('li');
                newli.innerHTML = data.name + ':' + data.html_url;
                newUl.appendChild(newli);
                li.appendChild(newUl)
            });
        })
    })

