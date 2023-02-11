document.getElementById('generate').addEventListener('click', getFact)

const xhr = new XMLHttpRequest()

const paragraph = document.querySelector('#cat-fact')

  xhr.open('GET', 'https://catfact.ninja/fact', true)
  
  xhr.onload = function(){
    if(this.status === 200){
      const fact = JSON.parse(this.responseText)
      paragraph.textContent = fact.fact
    }
  }

  xhr.onerror = function(){
    console.log('something went wrong');
  }

  xhr.send()

function getFact(e){
  e.preventDefault()

  const paragraph = document.querySelector('#cat-fact')

  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://catfact.ninja/fact', true)
  
  xhr.onload = function(){
    if(this.status === 200){
      const fact = JSON.parse(this.responseText)
      paragraph.textContent = fact.fact
    }
  }

  xhr.onerror = function(){
    console.log('something went wrong');
  }

  xhr.send()
}