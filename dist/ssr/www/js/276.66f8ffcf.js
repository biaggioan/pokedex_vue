(self["webpackChunkpokedex_vue"]=self["webpackChunkpokedex_vue"]||[]).push([[276],{7651:(s,t,e)=>{"use strict";e.d(t,{Z:()=>a});const a={name:"pokemonType",props:["name"]}},6035:(s,t,e)=>{"use strict";e.d(t,{Z:()=>i});var a=e(7678),o=e(8501);const i={name:"Pokemon Info",propos:["id"],components:{Type:o.Z},data:()=>({pokemonInfo:{}}),methods:{fetchData(s){a.Z.get("/pokemon/"+s).then((s=>{let t=s.data;this.pokemonInfo=t,console.log(t)})).catch((s=>{console.log(s)}))}},created(){this.fetchData(this.$route.params.id)}}},6642:(s,t,e)=>{"use strict";e.d(t,{s:()=>i});var a=e(3673),o=e(2323);function i(s,t,e,i,n,c){return(0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(e.name+" type")},[(0,a._)("p",null,(0,o.zw)(e.name),1)],2)}},7248:(s,t,e)=>{"use strict";e.d(t,{s:()=>T});var a=e(3673),o=e(2323),i=e(4183),n=e.n(i);const c={class:"container"},M=(0,a._)("a",{href:"/#/",class:"link-home"},[(0,a._)("img",{src:n()})],-1),L={class:"row"},l={class:"col-12 col-md-6 img-container"},r={class:"pokemon-img"},u=["src"],d={class:"col-12 col-md-6 details-container"},w={class:"row pokemon-details"},m={class:"col-6"},p={class:"detail"},A=(0,a._)("p",{class:"detail-name"},"Height:",-1),C={class:"detail-info"},g={class:"detail"},j=(0,a._)("p",{class:"detail-name"},"Weight:",-1),k={class:"detail-info"},y=(0,a._)("div",{class:"col-6"},null,-1),I=(0,a._)("p",{class:"title"},"Type:",-1),v={class:"types-list"};function T(s,t,e,i,n,T){const h=(0,a.up)("Type");return(0,a.wg)(),(0,a.iD)("div",c,[M,(0,a._)("h1",null,[(0,a.Uk)((0,o.zw)(s.pokemonInfo.name)+" ",1),(0,a._)("span",null,"Nº"+(0,o.zw)(s.$route.params.id),1)]),(0,a._)("div",L,[(0,a._)("div",l,[(0,a._)("div",r,[(0,a._)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+s.$route.params.id+".png"},null,8,u)])]),(0,a._)("div",d,[(0,a._)("div",w,[(0,a._)("div",m,[(0,a._)("div",p,[A,(0,a._)("p",C,(0,o.zw)(s.pokemonInfo.height/10)+" m",1)]),(0,a._)("div",g,[j,(0,a._)("p",k,(0,o.zw)(s.pokemonInfo.weight/10)+" kg",1)])]),y]),I,(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.pokemonInfo.types,((s,t)=>((0,a.wg)(),(0,a.iD)("article",{key:"type"+t},[(0,a.Wm)(h,{name:s.type.name},null,8,["name"])])))),128))])])])])}},7678:(s,t,e)=>{"use strict";e.d(t,{Z:()=>n});var a=e(52),o=e.n(a);const i=o().create({baseURL:"https://pokeapi.co/api/v2",timeout:1e3,headers:{"X-Custom-Header":"foobar"}}),n=i},8501:(s,t,e)=>{"use strict";e.d(t,{Z:()=>i});var a=e(6642),o=e(6965);o.Z.render=a.s;const i=o.Z},7276:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>i});var a=e(3508),o=e(3567);o.Z.render=a.s;const i=o.Z},4183:s=>{s.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjYgMjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiI+CiAgPGc+CiAgICA8cGF0aCBkPSJtMTMsMGMtNy4yLDAtMTMsNS44LTEzLDEzczUuOCwxMyAxMywxMyAxMy01LjggMTMtMTMtNS44LTEzLTEzLTEzem0wLDIyYy01LDAtOS00LTktOXM0LTkgOS05IDksNCA5LDktNCw5LTksOXoiLz4KICAgIDxwYXRoIGQ9Im0xNi43LDEwLjRjMC4yLTAuMiAwLjMtMC40IDAuMy0wLjcgMC0wLjIgMC0wLjQtMC4xLTAuNWwtMS0xLjdjLTAuMi0wLjMtMC41LTAuNS0wLjktMC41LTAuMiwwLTAuMywwLTAuNSwwLjFsLS4xLC4xLTYsNWMtMC4yLDAuMi0wLjQsMC41LTAuNCwwLjhzMC4xLDAuNiAwLjQsMC44bDYsNSAuMSwuMWMwLjIsMC4xIDAuMywwLjEgMC41LDAuMSAwLjMsMCAwLjctMC4yIDAuOS0wLjVsMS0xLjdjMC4xLTAuMSAwLjEtMC4zIDAuMS0wLjUgMC0wLjMtMC4xLTAuNS0wLjMtMC43bC0yLjEtMS44Yy0wLjUtMC40LTAuNS0xLjEgMC0xLjVsMi4xLTEuOXoiLz4KICA8L2c+Cjwvc3ZnPgo="},6965:(s,t,e)=>{"use strict";e.d(t,{Z:()=>a.Z});var a=e(7651)},3567:(s,t,e)=>{"use strict";e.d(t,{Z:()=>a.Z});var a=e(6035)},3508:(s,t,e)=>{"use strict";e.d(t,{s:()=>a.s});var a=e(7248)}}]);