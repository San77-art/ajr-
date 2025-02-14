var cards = ["san", "hadassa", "daniel", "talita"];
var currentIndex = 0;

function atualizarCarrossel() {
    cards.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    document.getElementById(cards[currentIndex]).style.display = "flex";
    document.getElementById(cards[currentIndex + 1]).style.display = "flex";

    
    document.getElementById("setaesquerda").style.display = currentIndex === 0 ? "none" : "block";
    document.getElementById("setadireita").style.display = currentIndex >= cards.length - 2 ? "none" : "block";
}

document.getElementById("setadireita").addEventListener("click", function() {
    if (currentIndex < cards.length - 2) {
        currentIndex += 2;
        atualizarCarrossel();
    }
});

document.getElementById("setaesquerda").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex -= 2;
        atualizarCarrossel();
    }
});


atualizarCarrossel();

    san.style.width = "500px";  
    hadassa.style.width = "500px"; 
    daniel.style.width = "500px";  
    talita.style.width = "500px"; 
