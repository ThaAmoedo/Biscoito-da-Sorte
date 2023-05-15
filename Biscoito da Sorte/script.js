

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnReset = document.querySelector("#btnReset");

const biscoito = document.querySelector("#biscoito");

const p = document.querySelector("#mensagemID")

//let listOfMessages = []; 

/*eventos*/
biscoito.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enter)



biscoito.addEventListener('click', function() {
    
    toggleScreen

  });

 

  
  
  /*funções*/
  function handleTryClick(event){
      event.preventDefault() 
      
      toggleScreen()
      //mensagens()
      escolherFraseAleatoria()
      
    }
    function toggleScreen(){
      screen1.classList.toggle('escondido')
      screen2.classList.toggle('escondido')
  
    }  

    
 
   
   function enter(e){ //para poder dar Enter (quando ver o botão de tentar)
       if(e.key == 'Enter' && screen1.classList.contains('escondido')){
           handleResetClick()  
       }
      } 
            function handleResetClick(){  //resetar o click
            toggleScreen()
    
                } 


    
    
      


    function escolherFraseAleatoria() {
        let frases = [
          "Seja independente como um gato, mas também saiba quando buscar apoio e afeto.",
          "Seja curioso como um gato e nunca deixe de explorar novos horizontes.",
          "O sucesso é a soma de pequenos esforços repetidos diariamente.",
          "Acredite em si mesmo e tudo será possível.",
          "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
          "Aprenda com os gatos a encontrar conforto e paz nos pequenos momentos da vida.",
          "Não tenha medo de arriscar, como um gato saltando com confiança para o desconhecido.",
          "A curiosidade é a chave para o crescimento pessoal, então mantenha-se curioso como um gato.",



        ];
      
        let indiceAleatorio = Math.floor(Math.random() * frases.length); //Math.floor() para arredondar para baixo e obter um índice aleatório válido para acessar uma frase na lista
        let fraseAleatoria = frases[indiceAleatorio];
        
        document.querySelector('#mensagemID').innerText = fraseAleatoria
        
        //return fraseAleatoria;
      }
      
      // Exemplo de uso
      //let fraseEscolhida = escolherFraseAleatoria();
      //console.log(escolherFraseAleatoria());
      