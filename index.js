document.addEventListener('DOMContentLoaded', function(){
    
})
function renderCards(ninja){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
        
        <div class="content">
         <h4>${ninja.name}<h4>
         <p>Weapon: ${ninja.weapon} <p>
        </div>
    `
    document.querySelector('#turtles-list').appendChild(card)

}

function getNinjaTurtles(){
    fetch(" http://localhost:3000/Ninja_Turtles")
    .then(res => res.json())
    .then(ninjaTurtleData => ninjaTurtleData.forEach(turtle => renderCards(turtle)));

}

function initalize(){
    getNinjaTurtles()

}

function postTurtle(){
    const ninjaObj = {
        name: 'Kevin McElhinney',
        weapon: 'Assasian Hidden Blade'
    }
    console.log(JSON.stringify(ninjaObj))

    fetch('http://localhost:3000/Ninja_Turtles',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ninjaObj)
    })
    .then(() => {getNinjaTurtles()})

}
initalize()
