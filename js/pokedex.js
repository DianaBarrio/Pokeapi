var listaPokemonView = document.getElementById("container");

const getPokedex = async () => {

  for(var pokemonBuscado=1;pokemonBuscado<151 ;pokemonBuscado++){

    const pokeApi = await fetch("http://pokeapi.co/api/v2/pokemon/"+pokemonBuscado);
    const pokeRes = await pokeApi.json();
    var li=document.createElement("li");
   li.innerHTML='<div class="card"><img src="'+ pokeRes.sprites.front_default +'" alt="Avatar" class="card-image"><h5 class="card-title">'+pokeRes.name+'</h5><p>Peso:'+pokeRes.weight+'</p><p>Tamaño:'+pokeRes.height+'</p></div>';   
   document.getElementById("pokedex").appendChild(li);
  
  }
  
};


getPokedex();