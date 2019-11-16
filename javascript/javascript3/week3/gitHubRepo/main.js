let ul = document.querySelector('ul');
const user1 = fetch('https://api.github.com/search/repositories?q=user:Nazaqat').then(response => response.json());
const user2 = fetch('https://api.github.com/search/repositories?q=user:HouriaDanesh').then(response => response.json());
const user3 = fetch('https://api.github.com/search/repositories?q=user:Sreelatha-Vallabhaneni').then(response => response.json());

Promise.all([user1, user2, user3])
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


function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));
        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
}