const personName = document.querySelector('.person_name')
const personAltura = document.querySelector('.person_altura')
const personMassa = document.querySelector('.person_massa')
const personCabelo = document.querySelector('.person_cabelo')
const personOlhos = document.querySelector('.person_olhos')
const personNascimento = document.querySelector('.person_nascimento')
const personGenero = document.querySelector('.person_genero')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

const fetchPerson = async (star) =>{
    const APIresponse = await fetch(`https://swapi.dev/api/people/${star}/`)
    if (APIresponse.status == 200){
        const data = await APIresponse.json()
        return data
    }
}

const mainPerson = async (star) =>{
    personAltura.innerHTML = 'Carregando...'
    personName.innerHTML = 'Carregando...'
    personMassa.innerHTML = 'Carregando...'
    personCabelo.innerHTML = 'Carregando...'
    personOlhos.innerHTML = 'Carregando...'
    personNascimento.innerHTML = 'Carregando...'
    personGenero.innerHTML = 'Carregando...'

    const data = await fetchPerson(star)
    
    if (data) {
        personName.innerHTML = 'Nome: ' + data.name
        personAltura.innerHTML = 'Altura: ' + data.height
        personMassa.innerHTML = 'Massa: ' + data.mass
        personCabelo.innerHTML = 'Cabelo: ' + data.hair_color
        personOlhos.innerHTML = 'Olhos: ' + data.eye_color
        personNascimento.innerHTML = 'Nascimento: ' + data.birth_year
        personGenero.innerHTML = 'Genero: ' + data.gender
        numberSearch = star
        
    }

}

btnPrev.addEventListener('click', () => {
    if(numberSearch > 1){
        numberSearch -= 1
        mainPerson(numberSearch)
    }
    
})

btnNext.addEventListener('click', () => {
    numberSearch += 1
    mainPerson(numberSearch)
})

mainPerson(1)