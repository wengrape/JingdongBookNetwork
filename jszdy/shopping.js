const shopping_delete = document.querySelectorAll('.shopping_delete');
for (var j = 0; j < shopping_delete.length; j++) {

    shopping_delete[j].addEventListener('mousedown', function () {
        this.parentNode.parentNode.remove()
        console.log(this.parentNode.parentNode)
        console.log(shopping_tr02.length)
    })

}

const shopping_table = document.querySelector(".shopping_table02");
const shopping_tr02 = shopping_table.querySelectorAll('.shopping_table_td02');
const shopping_tr04 = shopping_table.querySelectorAll('.shopping_table_td04');
const shopping_tr05 = shopping_table.querySelectorAll('.shopping_table_td05');
const shopping_js = document.querySelector('.shopping_js')
const shopping_jf = document.querySelector('.shopping_jf')
const shopping_total = document.querySelector('.shopping_total')

const shpping_scj = document.querySelectorAll('.shpping_scj');
const shpping_ddj = document.querySelectorAll('.shpping_ddj');
const shopping_settlement = document.querySelector('.shopping_settlement')




let sum_jf = 0
let sum_total = 0
let sum_js = 0




console.log(1)


shopping_settlement.addEventListener('mousedown', function () {

    for (let i = 0; i < shopping_tr02.length; i++) {

        if (shopping_tr04[i].value <= 0) {
            shopping_tr04[i].value = 0
        }

        sum_jf += parseFloat(shopping_tr02[i].innerHTML)
        sum_total += parseFloat(shpping_ddj[i].innerHTML) * (shopping_tr04[i].value)
        sum_js += parseFloat(shpping_scj[i].innerHTML) * (shopping_tr04[i].value)
        if (i == shopping_tr02.length - 1) {
            shopping_jf.innerHTML = Math.floor(sum_jf * 100) / 100
            shopping_total.innerHTML = Math.floor(sum_total * 100) / 100
            shopping_js.innerHTML = Math.floor(sum_js * 100) / 100 - Math.floor(sum_total * 100) / 100
            sum_jf = 0
            sum_total = 0
            sum_js = 0

        }
    }
})

