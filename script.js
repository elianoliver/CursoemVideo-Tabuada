function tabuada() {
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')

    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''

        while (c<=10){
            let item = document.createElement('option')

            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }




}