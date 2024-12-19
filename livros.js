window.onscroll = function() 
{
    const scroll = document.getElementById("scroll")

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
        scroll .style.display = "block";
        
    }
    else{
        scroll .style.display = "none";
    }
};
document.getElementById("scroll").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.onpassar1 = function(){

    const carousel = document.querySelector('.carousel');
    const passar1 = document.getElementById('passar1');
    const passar2 = document.getElementById('passar2');

    let index = 0;

    function updateCarousel() {
        const width = document.querySelector('.book1').offsetWidth;
        carousel.style.transform = `translateX(${ -width * livros } px)`;
    }


    passar2.addEventListener('click', () => {
        if (livros < carousel.children.length - 1) {
            livros++;
        } else {
            livros = 0;
        }
        updateCarousel();
    });

    passar1.addEventListener('click', () => {
        if (livros > 0) {
            livros--;
        } else {
            livros = carousel.children.length - 1;
        }
        updateCarousel();
    });

}
window.addEventListener('resize', updateCarousel);

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    if (email) {
      alert('Obrigado por se inscrever! Entraremos em contato em breve.');
      document.getElementById('email').value = '';
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  });