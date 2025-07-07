//Click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p')

questionContainer.addEventListener('click', ()=>{
  questionContainer.classList.toggle("question-clicked")
})
response.classList.add('show-response')

btn1.addEventListener('click', ()=>{
  response.style.backgroundColor = "green";
})
btn2.addEventListener('click', ()=>{
  response.style.backgroundColor = "red"
})

//__________________________________________________________________

const mouseMove = document.querySelector('.mouse-move');
window.addEventListener('mousemove', (e)=>{
  
})