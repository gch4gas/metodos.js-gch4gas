import { clients } from "./DATABASE.JS";

// const cliente =  clients[3];

// console.log(cliente.name)  



const createCard = (user) => {
    //Essa linha 12 está fazendo a desestruturação dos elementos, para que fique mais facil de chama-los depois.

    const {name, email, age, phone} = user;

    const liCard = document.createElement("li");
    const nameClient = document.createElement("h2");
    const emailClient = document.createElement("p");
    const ageClient = document.createElement("p");
    const phoneClient = document.createElement("p");

    //Colocando classe na li.
    liCard.classList.add ("clients__card");

    nameClient.innerText = name;
    emailClient.innerText = `Email: ${email}`;
    ageClient.innerText = `Idade: ${age}`;
    phoneClient.innerText = `Telefone ${phone}`;

    liCard.append(nameClient, emailClient, ageClient, phoneClient);

    return liCard;

    //Segue HOJE(10/04) BORA
    
}

//Utilizando um parametro por Default, isso evita com que a minha lógica quebre quando o parametro não seja passado.
const renderCards = (clientsArray = []) => {
    //Aqui com esse querySelector estamos criando a nossa lista(ul). Proximo passo é percorrer a nossa lista e fazer a renderização do conteudo.

    const ulClients = document.querySelector(".clients__list")

    ulClients.innerHTML = ""
    // for(let i = 0; i < clientsArray.length ; i++){
       //const card = createCard(clientsArray[i]); -->Essa constante aqui utilizamos ela para armezenar o criador dos nossos Cards.
    //     ulClients.appendChild(card);

    // }
    
    //**------forEach------** (Para cada - TRADUÇÃO)

    //Como a função forEach percorre cada elemento do array, temos que utilizar o nome do parametro em singular.
    clientsArray.forEach((client) =>{
        const card = createCard(client);
        
        ulClients.append(card)
    }) 

}

renderCards(clients);

//Map
const updateClient = (clientsArray) => {
    const updated = clientsArray.map(client => {
        const newAge = {
            ...client,
            age: client.age - 2
        }
        return newAge;
    })
    console.log(updated);
}

updateClient(clients)


const addFilterEvents = () => {
    const btnBellow = document.querySelector("#filterBellow30")
    const btnOver = document.querySelector("#filterOver30")

        btnBellow.addEventListener("click" , () => {
            const filtered = clients.filter(client => {
                return client.age <= 30;    //Retorno implícito.
            })

            renderCards(filtered)
        })

        btnOver.addEventListener("click", () => {
            const filtered = clients.filter(client => {
                return client.age > 30;
            })//Esse client foi estabelecido na funçao renderCards, como parametro.
            renderCards(filtered)
        })
}
addFilterEvents()
