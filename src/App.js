import React from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pokemons from "./cards.json";
import "./App.css";

class App extends React.Component {
  state = {Pokemons,
  count: 0,
  bestScore: 0,
  ids: []}


showPokemon = () => {
  this.setState({Pokemons});
};


handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
  console.log("new", this.state.count);
};

bestScoreUpdate = () => {
  if(this.state.count >= this.state.bestScore) {
    this.setState({bestScore: this.state.count});
  } else {
    this.setState({count: 0});
  }
};

resetGame =  () => {
  this.setState({ count: 0});
  this.setState({ ids: [] });
}

handleImgClick = (id) => {
console.log("click");
this.setState({Pokemons: this.shufflePokemon(Pokemons) })
console.log(id);
//If Else
if(!this.state.ids.includes(id)) {
 this.state.ids.push(id);
//  this.setState({
//    ids: arr
//  })
// const arr = this.state.ids.push(id);
  this.handleIncrement();
} else{
  this.resetGame();
  this.bestScoreUpdate();
}
}

shufflePokemon = Pokemons => {
  let i = Pokemons.length -1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = Pokemons[i];
    Pokemons[i] = Pokemons[j];
    Pokemons[j] = temp;
    i--;
  }
  return Pokemons
}

render() {
  return (
    <>
    <Header/>
    <h1 className="title">Gotta Click'em All:</h1>
    <h2>Score: {this.state.count}  | Best Score: {this.state.bestScore} </h2> 
    <Wrapper>
       <div className= "grid-container">
        {this.state.Pokemons.map(Pokemon => (
          <PokemonCard
             key={Pokemon.id}
             id={Pokemon.id}
             name={Pokemon.name}
             image={Pokemon.image}
             handleImgClick={this.handleImgClick}/>))}
             </div>
    </Wrapper>
    <Footer></Footer>
    </>
  )
}};

export default App;
