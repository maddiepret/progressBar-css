const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
    //get current width
    const computedStyle = getComputedStyle(progressBar)
        //set to integer
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
        //set property to new value using width
    progressBar.style.setProperty('--width', width + .1)
        //increase every 5 mili-seconds
}, 5)

// const progressBar = document.getElementsByClassName('progress-bar')[0]
// setInterval(() => {
//     const computedStyle = getComputedStyle(progressBar)
//     const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
//     progressBar.style.setProperty('--width', width + .1)
// }, 5)