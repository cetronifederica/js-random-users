const add = document.getElementById('addUser');
//console.log(add);
add.addEventListener('click', addUser);


//funzione che aggiunge un user alla gallery
function addUser(){
    console.log('aggiungo un user');
    //con axios chiamo l'api degli user 
    axios.get('https://randomuser.me/api/')
      .then(function (response) {
        // handle success
         
        //console.log(response);
        const userImg = response.data.results[0].picture.thumbnail;
        console.log(userImg);
        const userName = response.data.results[0].name.first;
        console.log(userName);
        const userSurname = response.data.results[0].name.last;
        console.log(userSurname);
        createUser(userImg, userName, userSurname);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    }


    function createUser(url, name, surname){

        //creo il tag immagine 
        let image = document.createElement('img');
        image.src = url;
        image.className = 'img-fluid p-2';

        //inserisco nome e cognome nella card
        let body = document.createElement("h4");
        body.innerText = name + " " + surname;
        body.className = "fst-italic";
        let cardBody = document.createElement("div");
        cardBody.className= "card-body";
        cardBody.appendChild(body);

        //creo la sezione card e ci inserisco immagine e card body
        let cardDiv = document.createElement("div");
        cardDiv.className = "card col-4";
        cardDiv.appendChild(image);
        cardDiv.appendChild(cardBody);

        //aggiungo la sezione card al card holder
        let holder = document.getElementById("galleryUser");
        holder.appendChild(cardDiv);
    }