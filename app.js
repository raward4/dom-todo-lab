//console.log('is this mic on?')


const btn = document.querySelector('button')


btn.addEventListener('click', function(evt) {
  const newLi = document.createElement('li')
  const inp = document.querySelector('input')
  newLi.textContent = inp.value
  document.querySelector('ul').appendChild(newLi)
  inp.value= ""
  
  console.log(newLi)
})