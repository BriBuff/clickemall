(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Dragonair",image:"./imgs/dragonair.png"},{id:2,name:"Dratini",image:"./imgs/dratini.png"},{id:3,name:"Eevee",image:"./imgs/eevee.png"},{id:4,name:"Growlithe",image:"./imgs/growlithe.png"},{id:5,name:"Houndor",image:"./imgs/houndor.png"},{id:6,name:"Jolteon",image:"./imgs/jolteon.png"},{id:7,name:"Mew",image:"./imgs/mew.png"},{id:8,name:"Ninetails",image:"./imgs/ninetails.png"},{id:9,name:"Pikachu",image:"./imgs/pikachu.png"},{id:10,name:"Suicune",image:"./imgs/suicune.png"},{id:11,name:"Umbreon",image:"./imgs/umbreon.png"},{id:12,name:"Vulpix",image:"./imgs/vulpix.png"}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(3),m=n.n(c),o=n(4),r=n(5),s=n(7),l=n(6),u=n(8);n(15);var g=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,className:"actualImg",id:e.id,onClick:function(){return e.handleImgClick(e.id)}})))};n(16);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};n(17);var h=function(){return i.a.createElement("div",{className:"img-head"},i.a.createElement("img",{alt:"headerImg",src:"./imgs/coverphoto.jpg",className:"headerImg"}))};n(18);var f=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("a",{href:"https://github.com/BriBuff/clickemall"},"Github Repo"))},p=n(1),k=(n(19),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={Pokemons:p,count:0,bestScore:0,ids:[]},n.showPokemon=function(){n.setState({Pokemons:p})},n.handleIncrement=function(){n.setState({count:n.state.count+1})},n.bestScoreUpdate=function(){n.state.count>=n.state.bestScore?n.setState({bestScore:n.state.count}):n.setState({count:0})},n.resetGame=function(){n.setState({count:0}),n.setState({ids:[]})},n.handleImgClick=function(e){console.log("click"),n.setState({Pokemons:n.shufflePokemon(p)}),console.log(e),n.state.ids.includes(e)?n.resetGame():(n.handleIncrement(),n.bestScoreUpdate())},n.shufflePokemon=function(e){for(var t=e.length-1;t>0;){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a,t--}return e},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement("h1",{className:"title"},"Gotta Click'em All:"),i.a.createElement("h2",null,"Score: ",this.state.count,"  | Best Score: ",this.state.bestScore," "),i.a.createElement(d,null,i.a.createElement("div",{className:"grid-container"},this.state.Pokemons.map(function(t){return i.a.createElement(g,{key:t.id,id:t.id,name:t.name,image:t.image,handleImgClick:e.handleImgClick})}))),i.a.createElement(f,null))}}]),t}(i.a.Component));n(20);m.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3f768cb0.chunk.js.map