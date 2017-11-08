window.addEventListener('message', (ev) => {
    if (ev.data.name === 'BTDC_ready') {
        enableCharcterCount()
    }
})

let enableCharcterCount = () => {
    let charcterCount = $('.js-character-count')
    let observer = new MutationObserver((records, observer) => showCharcterCount(charcterCount))
    let observe = (observer) => observer.observe(charcterCount.get(0), {attributes: true})
    observe(observer)
    let showCharcterCount = () => {
        observer.disconnect()
        let newClassVal = charcterCount.attr('class').replace('is-hidden', '')
        charcterCount.attr('class', newClassVal)
        observe(observer)
    }
    showCharcterCount(charcterCount)
}
