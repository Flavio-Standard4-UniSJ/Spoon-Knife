document.querySelector('button').addEventListener('click', function(){
    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let result = document.querySelector('#result');
    
    if(nome !== '' && email !== ''){
      result.innerHTML = `${nome} <br> ${email}`;
      result.style.color = '#2c745c';
    } else {
      result.innerHTML = "Preencha todos os dados solicitados!";
      result.style.color = 'red';
    }
  
  });