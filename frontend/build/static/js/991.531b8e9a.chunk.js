"use strict";(self.webpackChunkmicroapps=self.webpackChunkmicroapps||[]).push([[991],{5991:function(e,t,r){r.r(t),r.d(t,{diagram:function(){return l}});var n=r(8575),a=r(6642),o=r(2488),l=(r(8221),r(504),r(8703),r(8433),r(8584),r(7351),r(9175),{parser:n.p,db:n.f,renderer:a.f,styles:a.a,init:function(e){e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.f)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),a.f.setConf(e.flowchart),n.f.clear(),n.f.setGen("gen-2")}})},6642:function(e,t,r){r.d(t,{a:function(){return g},f:function(){return w}});var n=r(7762),a=r(8433),o=r(8221),l=r(8575),i=r(2488),c=r(3385),s=r(2725),d=r(4354),p=r(881),b={},f=function(e,t,r,a,o,l){var s=a.select('[id="'.concat(r,'"]'));Object.keys(e).forEach((function(r){var a=e[r],p="default";a.classes.length>0&&(p=a.classes.join(" "));var b,f=(0,c.m)(a.styles),u=void 0!==a.text?a.text:a.id;if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var w={label:u.replace(/fa[blrs]?:fa-[\w-]+/g,(function(e){return"<i class='".concat(e.replace(":"," "),"'></i>")}))};(b=(0,d.a)(s,w).node()).parentNode.removeChild(b)}else{var g=o.createElementNS("http://www.w3.org/2000/svg","text");g.setAttribute("style",f.labelStyle.replace("color:","fill:"));var h,y=u.split(i.d.lineBreakRegex),k=(0,n.Z)(y);try{for(k.s();!(h=k.n()).done;){var v=h.value,x=o.createElementNS("http://www.w3.org/2000/svg","tspan");x.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),x.setAttribute("dy","1em"),x.setAttribute("x","1"),x.textContent=v,g.appendChild(x)}}catch(_){k.e(_)}finally{k.f()}b=g}var m=0,S="";switch(a.type){case"round":m=5,S="rect";break;case"square":case"group":default:S="rect";break;case"diamond":S="question";break;case"hexagon":S="hexagon";break;case"odd":case"odd_right":S="rect_left_inv_arrow";break;case"lean_right":S="lean_right";break;case"lean_left":S="lean_left";break;case"trapezoid":S="trapezoid";break;case"inv_trapezoid":S="inv_trapezoid";break;case"circle":S="circle";break;case"ellipse":S="ellipse";break;case"stadium":S="stadium";break;case"subroutine":S="subroutine";break;case"cylinder":S="cylinder";break;case"doublecircle":S="doublecircle"}t.setNode(a.id,{labelStyle:f.labelStyle,shape:S,labelText:u,rx:m,ry:m,class:p,style:f.style,id:a.id,link:a.link,linkTarget:a.linkTarget,tooltip:l.db.getTooltip(a.id)||"",domId:l.db.lookUpDomId(a.id),haveCallback:a.haveCallback,width:"group"===a.type?500:void 0,dir:a.dir,type:a.type,props:a.props,padding:(0,i.g)().flowchart.padding}),i.l.info("setNode",{labelStyle:f.labelStyle,shape:S,labelText:u,rx:m,ry:m,class:p,style:f.style,id:a.id,domId:l.db.lookUpDomId(a.id),width:"group"===a.type?500:void 0,type:a.type,dir:a.dir,props:a.props,padding:(0,i.g)().flowchart.padding})}))},u=function(e,t,r){i.l.info("abc78 edges = ",e);var n,a,l=0,s={};if(void 0!==e.defaultStyle){var d=(0,c.m)(e.defaultStyle);n=d.style,a=d.labelStyle}e.forEach((function(r){l++;var d="L-"+r.start+"-"+r.end;void 0===s[d]?(s[d]=0,i.l.info("abc78 new entry",d,s[d])):(s[d]++,i.l.info("abc78 new entry",d,s[d]));var p=d+"-"+s[d];i.l.info("abc78 new link id to be used is",d,p,s[d]);var f="LS-"+r.start,u="LE-"+r.end,w={style:"",labelStyle:""};switch(w.minlen=r.length||1,"arrow_open"===r.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}var g="",h="";switch(r.stroke){case"normal":g="fill:none;",void 0!==n&&(g=n),void 0!==a&&(h=a),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;";break;case"invisible":w.thickness="invisible",w.pattern="solid",w.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){var y=(0,c.m)(r.style);g=y.style,h=y.labelStyle}w.style=w.style+=g,w.labelStyle=w.labelStyle+=h,void 0!==r.interpolate?w.curve=(0,c.n)(r.interpolate,o.c_6):void 0!==e.defaultInterpolate?w.curve=(0,c.n)(e.defaultInterpolate,o.c_6):w.curve=(0,c.n)(b.curve,o.c_6),void 0===r.text?void 0!==r.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType="text",w.label=r.text.replace(i.d.lineBreakRegex,"\n"),void 0===r.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=p,w.classes="flowchart-link "+f+" "+u,t.setEdge(r.start,r.end,w,l)}))},w={setConf:function(e){for(var t=0,r=Object.keys(e);t<r.length;t++){var n=r[t];b[n]=e[n]}},addVertices:f,addEdges:u,getClasses:function(e,t){i.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(r){return}},draw:function(e,t,r,d){i.l.info("Drawing flowchart"),d.db.clear(),l.f.setGen("gen-2"),d.parser.parse(e);var b=d.db.getDirection();void 0===b&&(b="TD");var w,g=(0,i.g)(),h=g.securityLevel,y=g.flowchart,k=y.nodeSpacing||50,v=y.rankSpacing||50;"sandbox"===h&&(w=(0,o.Ys)("#i"+t));var x,m="sandbox"===h?(0,o.Ys)(w.nodes()[0].contentDocument.body):(0,o.Ys)("body"),S="sandbox"===h?w.nodes()[0].contentDocument:document,_=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:b,nodesep:k,ranksep:v,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}})),C=d.db.getSubGraphs();i.l.info("Subgraphs - ",C);for(var T=C.length-1;T>=0;T--)x=C[T],i.l.info("Subgraph - ",x),d.db.addVertex(x.id,x.title,"group",void 0,x.classes,x.dir);var A=d.db.getVertices(),E=d.db.getEdges();i.l.info("Edges",E);var N=0;for(N=C.length-1;N>=0;N--){x=C[N],(0,o.td_)("cluster").append("text");for(var L=0;L<x.nodes.length;L++)i.l.info("Setting up subgraphs",x.nodes[L],x.id),_.setParent(x.nodes[L],x.id)}f(A,_,t,m,S,d),u(E,_);var B=m.select('[id="'.concat(t,'"]')),D=m.select("#"+t+" g");if((0,s.r)(D,_,["point","circle","cross"],"flowchart",t),c.u.insertTitle(B,"flowchartTitleText",y.titleTopMargin,d.db.getDiagramTitle()),(0,p.s)(_,B,y.diagramPadding,y.useMaxWidth),d.db.indexNodes("subGraph"+N),!y.htmlLabels){var z,M=S.querySelectorAll('[id="'+t+'"] .edgeLabel .label'),j=(0,n.Z)(M);try{for(j.s();!(z=j.n()).done;){var I=z.value,G=I.getBBox(),P=S.createElementNS("http://www.w3.org/2000/svg","rect");P.setAttribute("rx",0),P.setAttribute("ry",0),P.setAttribute("width",G.width),P.setAttribute("height",G.height),I.insertBefore(P,I.firstChild)}}catch(Y){j.e(Y)}finally{j.f()}}Object.keys(A).forEach((function(e){var r=A[e];if(r.link){var n=(0,o.Ys)("#"+t+' [id="'+e+'"]');if(n){var a=S.createElementNS("http://www.w3.org/2000/svg","a");a.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),a.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),a.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===h?a.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&a.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);var l=n.insert((function(){return a}),":first-child"),i=n.select(".label-container");i&&l.append((function(){return i.node()}));var c=n.select(".label");c&&l.append((function(){return c.node()}))}}}))}},g=function(e){return".label {\n    font-family: ".concat(e.fontFamily,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n  .cluster-label text {\n    fill: ").concat(e.titleColor,";\n  }\n  .cluster-label span {\n    color: ").concat(e.titleColor,";\n  }\n\n  .label text,span {\n    fill: ").concat(e.nodeTextColor||e.textColor,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ").concat(e.mainBkg,";\n    stroke: ").concat(e.nodeBorder,";\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ").concat(e.arrowheadColor,";\n  }\n\n  .edgePath .path {\n    stroke: ").concat(e.lineColor,";\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ").concat(e.lineColor,";\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ").concat(e.edgeLabelBackground,";\n    rect {\n      opacity: 0.5;\n      background-color: ").concat(e.edgeLabelBackground,";\n      fill: ").concat(e.edgeLabelBackground,";\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ").concat(e.clusterBkg,";\n    stroke: ").concat(e.clusterBorder,";\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ").concat(e.titleColor,";\n  }\n\n  .cluster span {\n    color: ").concat(e.titleColor,";\n  }\n  /* .cluster div {\n    color: ").concat(e.titleColor,";\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ").concat(e.fontFamily,";\n    font-size: 12px;\n    background: ").concat(e.tertiaryColor,";\n    border: 1px solid ").concat(e.border2,";\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(e.textColor,";\n  }\n")}}}]);
//# sourceMappingURL=991.531b8e9a.chunk.js.map