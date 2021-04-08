

/**** Variables ****/
let number_1 = []
let number_2 = ''
let operator_choice = ''
let screen = document.querySelector('.resultat') // screen
let writing = document.querySelector('.operation') // affichage

// les boutons
let zero = document.querySelector('.btn_0')
let un = document.querySelector('.btn_1')
let deux = document.querySelector('.btn_2')
let trois = document.querySelector('.btn_3')
let quatre = document.querySelector('.btn_4')
let cinq = document.querySelector('.btn_5')
let six = document.querySelector('.btn_6')
let sept = document.querySelector('.btn_7')
let huit = document.querySelector('.btn_8')
let neuf = document.querySelector('.btn_9')
let point = document.querySelector('.btn_')

// Les calculs math
let cos = document.querySelector('.cos')
let sin = document.querySelector('.sin')
let tan = document.querySelector('.tan')
let exp = document.querySelector('.exp')
let deg = document.querySelector('.deg')
let rad = document.querySelector('.rad')



// Les parenthèses
let parenth_1 = document.querySelector('.open_parenth')
let parenth_2 = document.querySelector('.close_parenth')

// Les opérateurs
let div = document.querySelector('.division')
let add = document.querySelector('.addition')
let mul = document.querySelector('.multiplication')
let sous = document.querySelector('.soustraction')
let egual = document.querySelector('.btn_egual')


let clear = document.querySelector('.clear')

let first = ''
let second = ''


parenth_1.addEventListener("click", () => {
    number_1.push(parenth_1.innerHTML)
    writing.innerHTML += parenth_1.innerHTML
})
parenth_2.addEventListener("click", () => {
    number_1.push(parenth_2.innerHTML)
    writing.innerHTML += parenth_2.innerHTML
})
zero.addEventListener("click", () => {
    number_1.push(zero.innerHTML)
    writing.innerHTML += zero.innerHTML
})
un.addEventListener("click", () => {
    number_1.push(un.innerHTML)
    writing.innerHTML += un.innerHTML
})
deux.addEventListener("click", () => {
    number_1.push(deux.innerHTML)
    writing.innerHTML += deux.innerHTML
})
trois.addEventListener("click", () => {
    number_1.push(trois.innerHTML)
    writing.innerHTML += trois.innerHTML
})
quatre.addEventListener("click", () => {
    number_1.push(quatre.innerHTML)
    writing.innerHTML += quatre.innerHTML
})
cinq.addEventListener("click", () => {
    number_1.push(cinq.innerHTML)
    writing.innerHTML += cinq.innerHTML
})
six.addEventListener("click", () => {
    number_1.push(six.innerHTML)
    writing.innerHTML += six.innerHTML
})
sept.addEventListener("click", () => {
    number_1.push(sept.innerHTML)
    writing.innerHTML += sept.innerHTML
})
huit.addEventListener("click", () => {
    number_1.push(huit.innerHTML)
    writing.innerHTML += huit.innerHTML
})
neuf.addEventListener("click", () => {
    number_1.push(neuf.innerHTML)
    writing.innerHTML += neuf.innerHTML
})
point.addEventListener("click", (event) => {
    let nombre_de_click = []
    nombre_de_click.push(event.detail)
    if (nombre_de_click[0] === 1) {
        number_1.push(point.innerHTML)
        writing.innerHTML += point.innerHTML
    }
})


// Affichage des nombres en train d'etre tapé
div.addEventListener("click", () => {
    number_1.push(div.innerHTML)
    writing.innerHTML += '  ' + div.innerHTML + '  '
})
mul.addEventListener("click", () => {
    number_1.push(mul.innerHTML)
    writing.innerHTML += '  ' + mul.innerHTML + '  '
})
add.addEventListener("click", () => {
    number_1.push(add.innerHTML)
    writing.innerHTML += '  ' + add.innerHTML + '  '
})
sous.addEventListener("click", () => {
    number_1.push(sous.innerHTML)
    writing.innerHTML += '  ' + sous.innerHTML + '  '
})

// les calculs math
deg.addEventListener("click", () => {
    number_1.push(deg.innerHTML.toLowerCase())
    writing.innerHTML += ' ' + deg.innerHTML.toLowerCase() + ' '
})

// Effectuation des calculs
egual.addEventListener("click", () => {
    if (number_1.includes('x')) {
        let sign_index = number_1.indexOf('x')
        for (let i = 0; i < sign_index; i++) {
            first += number_1[i]
        }
        second = number_1.slice(sign_index + 1).join().replaceAll(',', '')
        screen.innerHTML = parseFloat(first) * parseFloat(second) // === resultat
        first = ''
        second= ''
        number_1 = []
        writing.innerHTML = ''
    } else if (number_1.includes('-')) {
        let sign_index = number_1.indexOf('-')
        for (let i = 0; i < sign_index; i++) {
            first += number_1[i]
        }
        second = number_1.slice(sign_index + 1).join().replaceAll(',', '')
        screen.innerHTML = parseFloat(first) - parseFloat(second) // === resultat
        first = ''
        second= ''
        number_1 = []
        writing.innerHTML = ''
    } else if (number_1.includes('÷')) {
        let sign_index = number_1.indexOf('÷')
        for (let i = 0; i < sign_index; i++) {
            first += number_1[i]
        }
        second = number_1.slice(sign_index + 1).join().replaceAll(',', '')
        screen.innerHTML = parseFloat(first) / parseFloat(second) // === resultat
        first = ''
        second= ''
        number_1 = []
        writing.innerHTML = ''
    } else if (number_1.includes('+')) {
        let sign_index = number_1.indexOf('+')
        for (let i = 0; i < sign_index; i++) {
            first += number_1[i]
        }
        second = number_1.slice(sign_index + 1).join().replaceAll(',', '')
        screen.innerHTML = parseFloat(first) + parseFloat(second) // === resultat
        first = ''
        second= ''
        number_1 = []
        writing.innerHTML = ''
    }
})


clear.addEventListener("click", () => {
    number_1 = []
    first = ''
    second = ''
    writing.innerHTML = ''
    screen.innerHTML = ''
})

