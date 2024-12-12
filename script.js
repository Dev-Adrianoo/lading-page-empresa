window.revelar = ScrollReveal({reset:true}) 

var radio = document.querySelector('.manual-btn')
var count = 1;

document.getElementById('radio1').checked = true;


document.getElementById("BotaoAumentar").addEventListener("click", function(){
    document.body.style.fontSize = "18px";
})

document.getElementById("BotaoDiminuir").addEventListener("click", function(){
    document.body.style.fontSize = "14px";

})

setInterval(() =>{
    nextImg()
}, 5000)

function nextImg(){
    count++;

    if(count > 3){
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}

revelar.reveal('.efeito-texto-topo',{
    duration: 2000,
    distance: '90px'
});

revelar.reveal('.efeito-texto-ToqueFinal',{
    duration: 2000,
    distance: '90px',
    origin: 'right'
});


revelar.reveal('.efeito-imagem-topo',{
    duration: 2000,
    distance: '90px',
    delay: 700
});

revelar.reveal('.efeito-card1',{
    duration: 5000,
    distance: '130px',
    delay: 500
});

revelar.reveal('.efeito-card2',{
    duration: 5000,
    distance: '130px',
    delay: 1000
});

revelar.reveal('.efeito-card3',{
    duration: 5000,
    distance: '130px',
    delay: 1500
});

revelar.reveal('.efeito-card4',{
    duration: 5000,
    distance: '130px',
    delay: 2000
});

revelar.reveal('.efeito-card5',{
    duration: 5000,
    distance: '130px',
    delay: 2000
});

revelar.reveal('.efeito-texto-sobre',{
    duration: 5000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-imagem-sobre',{
    duration: 5000,
    distance: '90px',
    delay: 1000,
    origin: 'right'
});