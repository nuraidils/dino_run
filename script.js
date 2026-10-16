var bg = document.getElementById("board")
const score = document.getElementById("score")

function setBackgroundMoving() {
    setTimeout(function() {
        // background berjalan
        bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';

        // update live score
        score.innerHTML = parseInt(score.innerHTML) + 1

        // memanggil fungsi terus menerus (recursive)
        setBackgroundMoving()
    }, 5)
}

// inisialisasi fungsi background berjalan
setBackgroundMoving();

// untuk setting obstacle moving
function setObstacleMoving() {
    var obstacle = document.getElementById('obstacle'),
    dino = document.getElementById('dino')
    
    setTimeout(function() {
        obstacle.style.marginLeft = (parseInt(obstacle.style.marginLeft.replace('px', '')) - 1) + 'px'
        if (parseInt(obstacle.style.marginLeft.replace('px', '')) < -100) {
            obstacle.style.marginLeft = "600px"
        }
        // memanggil fungsi terus menerus (recursive)
        setObstacleMoving()
    }, 5)
}

// inisialisasi fungsi obstacle bergerak
setObstacleMoving()

window.addEventListener('keyup', function(e) {
    // untuk mendeteksi tombol spasi
    if (e.keyCode == 32) {
        // setting dino untuk loncat
        document.getElementById("dino").style.marginTop = "50px";
        document.getElementById("dino").setAttribute('class', 'freeze');

        // kembalikan dino ke darat
        setTimeout(function() {
            document.getElementById("dino").style.marginTop = "180px";
            document.getElementById("dino").setAttribute('class', '');
        }, 1000)
    }
});