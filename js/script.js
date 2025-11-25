console.log('Empezamos!!')

const paisesContainer = document.getElementById("paises-container")
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,car,population,capital'


async function infoPaises() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

infoPaises().then(paises => {
    if (paises) {
        paises.sort((a, b) => a.name.common.localeCompare(b.name.common))
        renderCountries(paises)
    }
})



function createCountryCard(pais) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = pais.flags.png
    img.alt = "Bandera de " + pais.name.common

    const titulo = document.createElement('h3')
    titulo.textContent = pais.name.common

    card.appendChild(img)
    card.appendChild(titulo)

    card.addEventListener('click', () => openModal(pais))

    return card
}

function openModal(pais) {
    const overlay = document.createElement('div')
    overlay.classList.add('modal-overlay')

    const modal = document.createElement('div')
    modal.classList.add('modal')

    const closeBtn = document.createElement('button')
    closeBtn.textContent = '❌'
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay)
    })

    const img = document.createElement('img')
    img.src = pais.flags.png
    img.alt = "Bandera de " + pais.name.common

    const titulo = document.createElement('h2')
    titulo.textContent = pais.name.common

    const capital = document.createElement('p')
    capital.textContent = 'Capital: ' + (pais.capital ? pais.capital[0] : 'N/A')

    const poblacion = document.createElement('p')
    poblacion.textContent = 'Población: ' + pais.population.toLocaleString()

    const circulacion = document.createElement('p')
    circulacion.textContent = 'Circulación: ' + pais.car.side

    modal.appendChild(closeBtn)
    modal.appendChild(img)
    modal.appendChild(titulo)
    modal.appendChild(capital)
    modal.appendChild(poblacion)
    modal.appendChild(circulacion)

    overlay.appendChild(modal)
    document.body.appendChild(overlay)
}


function renderCountries(paises) {
    paisesContainer.innerHTML = ""

    paises.forEach(pais => {
        const card = createCountryCard(pais)
        paisesContainer.appendChild(card)
    })
}
