const accordion = () => {
    const items = document.querySelectorAll('.accordion__item')

    items.forEach(el => {
        el.addEventListener('click', (e) => {
            const item = e.currentTarget
            const question = item.querySelector('.accordion__question')
            const answer = item.querySelector('.accordion__answer')

            question.classList.toggle('open')
            answer.classList.toggle('open')
            answer.classList.contains('open') ? answer.style.maxHeight = answer.scrollHeight + 'px' : answer.style.maxHeight = '0'
        })
    })
}
accordion()

const seeAllCard = () => {
    const cards = document.querySelectorAll('.popular-collection__card')
    const button = document.querySelector('.popular-collection__top-button')

    button.addEventListener('click', (e) => {
        cards.forEach(el => {
            el.classList.add('open')
            el.style.maxHeight = el.scrollHeight + 'px'
        })
        button.style.display = 'none'
    })
}
seeAllCard()

const miniTimer = () => {
    // just a stub, not a real timer implementation
    const days = document.querySelectorAll('.timer__amount-days')
    const hours = document.querySelectorAll('.timer__amount-hours')
    const minutes = document.querySelectorAll('.timer__amount-minutes')
    const seconds = document.querySelectorAll('.timer__amount-seconds')

    allTimers.forEach( (el) => {

    })
}
miniTimer()
setInterval(miniTimer,1000)