const content = document.getElementById('content')
const size = document.getElementById('size')

document.addEventListener('paste', e => {
	const text = e.clipboardData.getData('text').replace(/\n+/g, '<br /><br />')
	content.innerHTML = text
	e.stopPropagation()
	e.preventDefault()
})

size.addEventListener('input', e => {
	content.style.fontSize = e.target.value + 'px'
})
