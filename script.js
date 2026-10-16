let bg = document.getElementById("board")
const score = document.getElementById("score")
const mulai = document.getElementById("mulai")
const mulaiUlang = document.getElementById("restart")
const dino = document.getElementById("dino")
const username = document.getElementById("username")

let isMoving = false;

dino.setAttribute("class", "freeze")

const user = prompt("masukkan nama kamu")
username.innerHTML = "Halo selamat datang, " + user

mulaiUlang.setAttribute("class", "none")

function mulaiGame() {
    if (isMoving) {
        return
    }

    dino.setAttribute("class", "")

    isMoving = true

    // inisialisasi fungsi obstacle bergerak
    setObstacleMoving()
    
    // inisialisasi fungsi background berjalan
    setBackgroundMoving();
}

function mulaiUlangGame() {
    window.location.reload()
}

mulai.addEventListener("click", mulaiGame)
mulaiUlang.addEventListener("click", mulaiUlangGame)

function setBackgroundMoving() {
    if(isMoving == true) {
        setTimeout(function() {
            // background berjalan
            bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';
    
            // update live score
            score.innerHTML = parseInt(score.innerHTML) + 1
    
            // memanggil fungsi terus menerus (recursive)
            setBackgroundMoving()
        }, 5)
    }
}

// untuk setting obstacle moving
function setObstacleMoving() {
    var obstacle = document.getElementById('obstacle'),
    dino = document.getElementById('dino')
    
    setTimeout(function() {
        obstacle.style.marginLeft = (parseInt(obstacle.style.marginLeft.replace('px', '')) - 1) + 'px'
        if (parseInt(obstacle.style.marginLeft.replace('px', '')) < -100) {
            obstacle.style.marginLeft = "600px"
        }

        if(
            dino.offsetTop + 50 >= obstacle.offsetTop && 
            dino.offsetLeft + 50 >= obstacle.offsetLeft &&
            dino.offsetTop + 50 <= obstacle.offsetTop + 50 &&
            dino.offsetLeft <=obstacle.offsetLeft + 50
        ) {
            isMoving = false
            dino.setAttribute("class", "freeze")
            mulai.setAttribute("class", "none")
            mulaiUlang.setAttribute("class", "")
            alert("Game Over! Score " + user + " : " + document.getElementById('score').innerHTML)
            
        } else {
            // memanggil fungsi terus menerus (recursive)
            setObstacleMoving()
        }
        
    }, 5)
}

window.addEventListener('keyup', function(e) {
    // untuk mendeteksi tombol spasi
    if (e.keyCode == 32 && isMoving == true) {
        // setting dino untuk loncat
        dino.style.marginTop = "50px";
        dino.setAttribute('class', 'freeze');

        // kembalikan dino ke darat
        setTimeout(function() {
            dino.style.marginTop = "180px";
            dino.setAttribute('class', '');
        }, 1000)
    }
});



