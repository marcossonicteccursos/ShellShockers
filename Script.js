repeatimgone();
function repeatimgone() {
    setTimeout(function() {
        document.getElementById('img1').style.display = 'none';
        document.getElementById('img2').style.display = 'block';
        setTimeout(function() {
            document.getElementById('img2').style.display = 'none';
            document.getElementById('img3').style.display = 'block';
            setTimeout(function() {
                document.getElementById('img3').style.display = 'none';
                document.getElementById('img4').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('img4').style.display = 'none';
                    document.getElementById('img1').style.display = 'block';
                    // Chamar repeatimg() novamente após um ciclo completo
                    repeatimgone();
                }, 2000); // 1000 milissegundos = 1 segundo
            }, 2000); // 1000 milissegundos = 1 segundo
        }, 2000); // 1000 milissegundos = 1 segundo
    }, 2000); // 1000 milissegundos = 1 segundo
}
