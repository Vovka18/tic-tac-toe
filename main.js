function chekCombination(idx1, idx2, idx3, xo){
    let box = document.querySelectorAll('.pole')
    if(box[idx1].innerHTML == xo && box[idx2].innerHTML == xo && box[idx3].innerHTML == xo){
        box[idx1].style.background = 'Lime'
        box[idx2].style.background = 'Lime'
        box[idx3].style.background = 'Lime'
        return xo
    }
    else return false
}

function allWinCombination(xo){
    // //Горизонтально
    // if(chekCombination(0, 1, 2, xo) != false) return chekCombination(0, 1, 2, xo)
    // else if(chekCombination(3, 4, 5, xo) != false) return chekCombination(3, 4, 5, xo)
    // else if(chekCombination(6, 7, 8, xo) != false) return chekCombination(6, 7, 8, xo)
    // //Вертикально
    // else if(chekCombination(0, 3, 6, xo) != false) return chekCombination(0, 3, 6, xo)
    // else if(chekCombination(1, 4, 7, xo) != false) return chekCombination(1, 4, 7, xo)
    // else if(chekCombination(2, 5, 8, xo) != false) return chekCombination(2, 5, 8, xo)
    // //наискось
    // else if(chekCombination(2, 4, 6, xo) != false) return chekCombination(2, 4, 6, xo)
    // else if(chekCombination(0, 4, 8, xo) != false) return chekCombination(0, 4, 8, xo)
    // else return false

    let winCombination = ['012', '345', '678', '036', '147', '258', '246', '048']   
    let chekWin = false
    winCombination.forEach(sortComb=>{
        if(chekCombination(sortComb[0], sortComb[1], sortComb[2], xo) != false) chekWin = xo
    })
    return chekWin
}

function clearFiled(){
    for(let filed of document.querySelectorAll('.pole')){
        filed.innerHTML = ''
        filed.style.background = 'white'
    }
}

function findWinCombination(){
    if(allWinCombination('X') != false) return allWinCombination('X')
    else if(allWinCombination('O') != false) return allWinCombination('O')
    else return false
}



let turn = 0

for(const move of document.querySelectorAll('.pole')){
    move.onclick = (event) => {
        turn++
        if(event.target.innerHTML != ''){
            console.log('Нельзя!')
            turn--
        }
        else if(turn % 2 == 1){
            event.target.innerHTML = 'X'
            document.querySelector('h1').innerHTML = 'Ход O'
        }
        else {
            event.target.innerHTML = 'O'
            document.querySelector('h1').innerHTML = 'Ход X'
        }

        if(findWinCombination() != false) {
            document.querySelector('h1').innerHTML = `Победил ${findWinCombination()}`
            setTimeout(clearFiled, 3000);
        }

    }
}