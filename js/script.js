console.log('Empezamos!!')


const url = 'https://restcountries.com/v3.1/all?fields=name,flags,car,population,capital'


async function infoPaises (){

   try{
    response = await fetch (url)
    data= await response.json()
    return data
   } catch (error) {
    mostrar(error)
    return nada
   }
}

infoPaises().then(data => console.log(data))






























