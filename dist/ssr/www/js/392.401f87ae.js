"use strict";(self["webpackChunkpokedex_vue"]=self["webpackChunkpokedex_vue"]||[]).push([[392],{8574:(e,t,o)=>{o.d(t,{Z:()=>n});var s=o(7678);const n={name:"PokemonList",props:[],data:()=>({pokemons:[]}),methods:{fetchData(){s.Z.get("/pokemon/").then((e=>{console.log(e);let t=e.data;t.results.forEach((e=>{e.id=e.url.split("/").filter((function(e){return e})).pop(),this.pokemons.push(e)}))})).catch((e=>{console.log(e)})).then((()=>{}))}},created(){this.fetchData()}}},1991:(e,t,o)=>{o.d(t,{Z:()=>n});var s=o(9278);const n={name:"PageIndex",components:{PokemonList:s.Z}}},2737:(e,t,o)=>{o.d(t,{s:()=>i});var s=o(3673),n=o(2323);const r={class:"list"},a=["href"],c=["src"];function i(e,t,o,i,d,p){return(0,s.wg)(),(0,s.iD)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.pokemons,((e,t)=>((0,s.wg)(),(0,s.iD)("article",{key:"poke"+t},[(0,s._)("a",{href:"/#/pokemon/"+e.id},[(0,s._)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+e.id+".png",width:"100",height:"100"},null,8,c),(0,s._)("h3",null,(0,n.zw)(e.name),1)],8,a)])))),128))])}},5384:(e,t,o)=>{o.d(t,{s:()=>r});var s=o(3673);const n={class:"container"};function r(e,t,o,r,a,c){const i=(0,s.up)("PokemonList");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(i)])}},7678:(e,t,o)=>{o.d(t,{Z:()=>a});var s=o(52),n=o.n(s);const r=n().create({baseURL:"https://pokeapi.co/api/v2",timeout:1e3,headers:{"X-Custom-Header":"foobar"}}),a=r},9278:(e,t,o)=>{o.d(t,{Z:()=>r});var s=o(9127),n=o(7808);n.Z.render=s.s;const r=n.Z},1392:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var s=o(9372),n=o(4473);n.Z.render=s.s;const r=n.Z},7808:(e,t,o)=>{o.d(t,{Z:()=>s.Z});var s=o(8574)},4473:(e,t,o)=>{o.d(t,{Z:()=>s.Z});var s=o(1991)},9127:(e,t,o)=>{o.d(t,{s:()=>s.s});var s=o(2737)},9372:(e,t,o)=>{o.d(t,{s:()=>s.s});var s=o(5384)}}]);