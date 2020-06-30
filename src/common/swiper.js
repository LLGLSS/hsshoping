export default function (div, width, number) {
  let count = 0
  let nowWidth = 0
  const totalbanner = document.getElementById(div)
  let timer = setInterval(moveauto, 1000)
  totalbanner.onclick = handmove
  function handmove () {
    clearInterval(timer)
    if (nowWidth <= -number * width + width) {
      reset(0.6)
    } else {
      move()
    }
    timer = setInterval(moveauto, 1000)
  }
  function moveauto () {
    count++
    if (nowWidth <= -number * width) {
      reset(0)
    }
    if (count % 2 === 0) {
      move()
    }
  }
  function reset (time) {
    nowWidth = 0
    totalbanner.style.marginLeft = '-' + nowWidth + 'px'
    totalbanner.style.transition = time + 's'
  }
  function move () {
    nowWidth = nowWidth - width
    totalbanner.style.marginLeft = nowWidth + 'px'
    totalbanner.style.transition = 0.6 + 's'
  }
}
