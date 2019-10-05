const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function findShortestWord(){

    let shortestWords = undefined;

    if(danishWords.length>0) {

        for (let i=0;i<danishWords.length;i++){

            if(shortestWords==undefined ||  danishWords[i].length < shortestWords.length) {
                shortestWords = danishWords[i];
            }
        }
        return shortestWords;
    }

    //console.log(shortestWords);
    
}
    //findShortestWord(danishWords);

    //DOM
    
    let btn = document.querySelector('button');
    let word = document.getElementById('word');
    btn.addEventListener("click", function(){
       word.innerHTML = findShortestWord(danishWords);
      });
    