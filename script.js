let container = document.createElement("div");
container.setAttribute("class","container");

let nav=document.createElement("nav");
nav.classList.add("navbar","navbar-expand-lg","navbar-dark","bg-dark");

let div=document.createElement("div")
div.setAttribute("class","container-fluid")

let title=document.createElement("a");
title.setAttribute("class","navbar-brand")
title.setAttribute("href","#");
title.style.marginLeft="40%"
title.innerHTML="POKEMON CARDS"

var row = document.createElement("div");
row.classList.add("row", "m-3");



let pagination1 = document.createElement("div")
pagination1.setAttribute("id","pagination-wrapper")
pagination1.classList.add("container","buttons")
// pagination.classList.add("container","buttons")

document.body.append(container,pagination1);
container.append(nav,row);
nav.append(div);
div.append(title);

const fetchpokemons =async()=>{
  for(let i=1;i<=50;i++){
    await getpokemon(i);
  }
}

let getpokemon = async  id=>{
    var url= ` https://pokeapi.co/api/v2/pokemon/${id}`;

    var res= await fetch(url)
    var res1 = await res.json()
    console.log(res1);
    console.log(res1.sprites)
   row.innerHTML+=`
   <div class="col-lg-4 col-sm-12 ">
   <div class="card border-success mb-3" style="max-width: 18rem; margin:50px 30px;">
    <div class="card-header text-dark" id="pokemonName" style="text-align:center; font-size:20px;"><b>Name :${res1.species.name}</b></div>
    <div class="card-body text-dark "style="text-align:center; ">
    <img src = "${res1.sprites.back_default}" style="width:100px">
      <h5 class="card-title"> </h5>
      <h5 class="card-title"> Weight :${res1.weight}</h5>
      <h5 class="card-title"> Ability :${res1.abilities[0].ability.name}</h5>
      <h5 class="card-title"> Moves :${res1.moves[0].move.name}</h5>
   </div>
  </div>
  </div>
  `
 
}

fetchpokemons();