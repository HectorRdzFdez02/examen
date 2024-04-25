window.addEventListener('load', initScene)

const tiroteables= [
    {x: 7, y:8, z:-10},
    {x: 12, y:10, z:-8},
    {x: 5, y:17, z:-6},
    {x: 6, y:10, z:-10},
    {x: 3, y:19, z:-14},
    {x: 0, y:10, z:-18},
    {x: -2, y:12, z:-11},
    {x: -4, y:4, z:-3},
    {x: -9, y:10, z:-19},
    {x: -8, y:3, z:-10},
    {x: -12, y:10, z:-10}
]

let enemigos, score=0

function initScene(){
    let lineas= document.querySelectorAll('.shootline')

    lineas.forEach(shootline => {

        tiroteables.forEach(pos => {

            enemigos = document.createElement('a-image');

            enemigos.setAttribute('src', '#enemigo');
            enemigos.setAttribute('width', 2);
            enemigos.setAttribute('height', 2);

            enemigos.setAttribute('class', 'enemigos')

            enemigos.setAttribute('destruir', '')

            enemigos.object3D.position.set(pos.x, pos.y, pos.z)

            shootline.appendChild(enemigos)

        })
    })

}

    AFRAME.registerComponent('destruir', {
        init: function() {
            this.el.addEventListener('click', () =>{
                console.log('Destruido')
                this.el.parentNode.removeChild(this.el)

                document.querySelector('[text]').setAttribute('value', `${++score} ENEMIGOS ELIMINADOS`)
            })
        }
    })


