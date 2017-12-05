const content = document.getElementById('content')
const font = document.getElementById('font')
const size = document.getElementById('size')

function readjust_content() {
  content.style.height = content.scrollHeight
}

document.addEventListener('paste', e => {
  const text = e.clipboardData.getData('text').replace(/\n+/g, '\n\n')
  content.value = text
  readjust_content()
  e.stopPropagation()
  e.preventDefault()
})

size.addEventListener('input', e => {
  content.style.fontSize = e.target.value + 'px'
  content.style.height = content.scrollHeight
  readjust_content()
})

font.addEventListener('input', e => {
  const choice = e.target.value
  content.style.fontFamily = choice
  readjust_content()
})

