console.log('Empezamos!!')

const paisesContainer = document.getElementById("paises-container")
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,car,population,capital'


async function infoPaises (){

   try{
    const response = await fetch (url)
    const data= await response.json()
    return data
   } catch (error) {
    console.log(error)
    return null
   }
}

infoPaises().then(data => console.log('INFOPAISES: ',data))

function createCountryCard(){
    const card = document.createElement('div')
    card.classList.add('card')
    const img= document.createElement('img')
    img.src= pais.flags.png
    img.alt="bandera de" + pais.name.common
    const titulo = document.createElement('h3')
    titulo.textContent=pais.name.common
    card.appendChild(img)
    card.appendChild(titulo)
    card.addEventListener('click',()=>openModal(pais))
    return card
}







function renderCountries() {
    paisesContainer.innerHTML=""
    paises.forEach(pais => {
        
        paisesContainer.appendChild

    });
}





























