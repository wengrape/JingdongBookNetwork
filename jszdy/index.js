$('.article_right_div01 ul li').click(function () {
    console.log(this.index)
})

const article_right_div01 = document.querySelector('.article_right_div01')
const ul = article_right_div01.querySelector('ul')
const li = ul.querySelectorAll('li')
const right_div02 = document.querySelectorAll('.right_div02 ')
console.log(li.length)
console.log(right_div02.length)
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function () {

        for (let j = 0; j < right_div02.length; j++) {
            right_div02[j].style.display = 'none';
        }

        right_div02[i].style.display = 'block';
    })
}




