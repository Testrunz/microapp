"use strict";(self.webpackChunkmicroapps=self.webpackChunkmicroapps||[]).push([[725],{7351:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(316);var i=function(e){return(0,r.Z)(e,4)},a=n(2790),d=n(4625);n(3121);function l(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:o(e),edges:s(e)};return a.Z(e.graph())||(t.value=i(e.graph())),t}function o(e){return d.Z(e.nodes(),(function(t){var n=e.node(t),r=e.parent(t),i={v:t};return a.Z(n)||(i.value=n),a.Z(r)||(i.parent=r),i}))}function s(e){return d.Z(e.edges(),(function(t){var n=e.edge(t),r={v:t.v,w:t.w};return a.Z(t.name)||(r.name=t.name),a.Z(n)||(r.value=n),r}))}},2725:function(e,t,n){n.d(t,{r:function(){return S}});var r=n(7762),i=n(3433),a=n(8584),d=n(7351),l=n(8864),o=n(2488),s=n(8433),c=n(8221),h={},g={},f={},u=function(e,t){return o.l.trace("In isDecendant",t," ",e," = ",g[t].includes(e)),!!g[t].includes(e)},v=function e(t,n,r,i){o.l.warn("Copying children of ",t,"root",i,"data",n.node(t),i);var a=n.children(t)||[];t!==i&&a.push(t),o.l.warn("Copying (nodes) clusterId",t,"nodes",a),a.forEach((function(a){if(n.children(a).length>0)e(a,n,r,i);else{var d=n.node(a);o.l.info("cp ",a," to ",i," with parent ",t),r.setNode(a,d),i!==n.parent(a)&&(o.l.warn("Setting parent",a,n.parent(a)),r.setParent(a,n.parent(a))),t!==i&&a!==t?(o.l.debug("Setting parent",a,t),r.setParent(a,t)):(o.l.info("In copy ",t,"root",i,"data",n.node(t),i),o.l.debug("Not Setting parent for node=",a,"cluster!==rootId",t!==i,"node!==clusterId",a!==t));var l=n.edges(a);o.l.debug("Copying Edges",l),l.forEach((function(e){o.l.info("Edge",e);var a=n.edge(e.v,e.w,e.name);o.l.info("Edge data",a,i);try{!function(e,t){return o.l.info("Decendants of ",t," is ",g[t]),o.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(g[t]?g[t].includes(e.v)||u(e.v,t)||u(e.w,t)||g[t].includes(e.w):(o.l.debug("Tilt, ",t,",not in decendants"),!1))}(e,i)?o.l.info("Skipping copy of edge ",e.v,"--\x3e",e.w," rootId: ",i," clusterId:",t):(o.l.info("Copying as ",e.v,e.w,a,e.name),r.setEdge(e.v,e.w,a,e.name),o.l.info("newGraph edges ",r.edges(),r.edge(r.edges()[0])))}catch(d){o.l.error(d)}}))}o.l.debug("Removing node",a),n.removeNode(a)}))},w=function e(t,n){var a,d=n.children(t),l=(0,i.Z)(d),o=(0,r.Z)(d);try{for(o.s();!(a=o.n()).done;){var s=a.value;f[s]=t,l=[].concat((0,i.Z)(l),(0,i.Z)(e(s,n)))}}catch(c){o.e(c)}finally{o.f()}return l},p=function e(t,n){o.l.trace("Searching",t);var i=n.children(t);if(o.l.trace("Searching children of id ",t,i),i.length<1)return o.l.trace("This is a valid node",t),t;var a,d=(0,r.Z)(i);try{for(d.s();!(a=d.n()).done;){var l=e(a.value,n);if(l)return o.l.trace("Found replacement for",t," => ",l),l}}catch(s){d.e(s)}finally{d.f()}},y=function(e){return h[e]&&h[e].externalConnections&&h[e]?h[e].id:e},x=function(e,t){!e||t>10?o.l.debug("Opting out, no graph "):(o.l.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(o.l.warn("Cluster identified",t," Replacement id in edges: ",p(t,e)),g[t]=w(t,e),h[t]={id:p(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){var n=e.children(t),r=e.edges();n.length>0?(o.l.debug("Cluster identified",t,g),r.forEach((function(e){e.v!==t&&e.w!==t&&(u(e.v,t)^u(e.w,t)&&(o.l.warn("Edge: ",e," leaves cluster ",t),o.l.warn("Decendants of XXX ",t,": ",g[t]),h[t].externalConnections=!0))}))):o.l.debug("Not a cluster ",t,g)})),e.edges().forEach((function(t){var n=e.edge(t);o.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),o.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));var r=t.v,i=t.w;if(o.l.warn("Fix XXX",h,"ids:",t.v,t.w,"Translating: ",h[t.v]," --- ",h[t.w]),h[t.v]&&h[t.w]&&h[t.v]===h[t.w]){o.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),o.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=y(t.v),i=y(t.w),e.removeEdge(t.v,t.w,t.name);var a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});var d=JSON.parse(JSON.stringify(n)),l=JSON.parse(JSON.stringify(n));d.label="",d.arrowTypeEnd="none",l.label="",d.fromCluster=t.v,l.toCluster=t.v,e.setEdge(r,a,d,t.name+"-cyclic-special"),e.setEdge(a,i,l,t.name+"-cyclic-special")}else(h[t.v]||h[t.w])&&(o.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=y(t.v),i=y(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v&&(n.fromCluster=t.v),i!==t.w&&(n.toCluster=t.w),o.l.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name))})),o.l.warn("Adjusted Graph",d.c(e)),m(e,0),o.l.trace(h))},m=function e(t,n){if(o.l.warn("extractor - ",n,d.c(t),t.children("D")),n>10)o.l.error("Bailing out");else{var i,a=t.nodes(),l=!1,c=(0,r.Z)(a);try{for(c.s();!(i=c.n()).done;){var g=i.value,f=t.children(g);l=l||f.length>0}}catch(X){c.e(X)}finally{c.f()}if(l){o.l.debug("Nodes = ",a,n);var u,w=(0,r.Z)(a);try{for(w.s();!(u=w.n()).done;){var p=u.value;if(o.l.debug("Extracting node",p,h,h[p]&&!h[p].externalConnections,!t.parent(p),t.node(p),t.children("D")," Depth ",n),h[p])if(!h[p].externalConnections&&t.children(p)&&t.children(p).length>0){o.l.warn("Cluster without external connections, without a parent and with children",p,n);var y="TB"===t.graph().rankdir?"LR":"TB";h[p]&&h[p].clusterData&&h[p].clusterData.dir&&(y=h[p].clusterData.dir,o.l.warn("Fixing dir",h[p].clusterData.dir,y));var x=new s.k({multigraph:!0,compound:!0}).setGraph({rankdir:y,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));o.l.warn("Old graph before copy",d.c(t)),v(p,t,x,p),t.setNode(p,{clusterNode:!0,id:p,clusterData:h[p].clusterData,labelText:h[p].labelText,graph:x}),o.l.warn("New graph after copy node: (",p,")",d.c(x)),o.l.debug("Old graph after copy",d.c(t))}else o.l.warn("Cluster ** ",p," **not meeting the criteria !externalConnections:",!h[p].externalConnections," no parent: ",!t.parent(p)," children ",t.children(p)&&t.children(p).length>0,t.children("D"),n),o.l.debug(h);else o.l.debug("Not a cluster",p,n)}}catch(X){w.e(X)}finally{w.f()}a=t.nodes(),o.l.warn("New list of nodes",a);var m,b=(0,r.Z)(a);try{for(b.s();!(m=b.n()).done;){var N=m.value,E=t.node(N);o.l.warn(" Now next level",N,E),E.clusterNode&&e(E.graph,n+1)}}catch(X){b.e(X)}finally{b.f()}}else o.l.debug("Done, no node has children",t.nodes())}},b=function e(t,n){if(0===n.length)return[];var r=Object.assign(n);return n.forEach((function(n){var a=t.children(n),d=e(t,a);r=[].concat((0,i.Z)(r),(0,i.Z)(d))})),r},N=function(e){return b(e,e.children())},E={rect:function(e,t){o.l.trace("Creating subgraph rect for ",t.id,t);var n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=n.insert("rect",":first-child"),i=n.insert("g").attr("class","cluster-label"),a=i.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0)),d=a.getBBox();if((0,o.j)((0,o.g)().flowchart.htmlLabels)){var s=a.children[0],h=(0,c.Ys)(a);d=s.getBoundingClientRect(),h.attr("width",d.width),h.attr("height",d.height)}var g=0*t.padding,f=g/2,u=t.width<=d.width+g?d.width+g:t.width;t.width<=d.width+g?t.diff=(d.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,o.l.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-u/2).attr("y",t.y-t.height/2-f).attr("width",u).attr("height",t.height+g),i.attr("transform","translate("+(t.x-d.width/2)+", "+(t.y-t.height/2)+")");var v=r.node().getBBox();return t.width=v.width,t.height=v.height,t.intersect=function(e){return(0,l.i)(t,e)},n},roundedWithTitle:function(e,t){var n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=n.insert("g").attr("class","cluster-label"),a=n.append("rect"),d=i.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0)),s=d.getBBox();if((0,o.j)((0,o.g)().flowchart.htmlLabels)){var h=d.children[0],g=(0,c.Ys)(d);s=h.getBoundingClientRect(),g.attr("width",s.width),g.attr("height",s.height)}s=d.getBBox();var f=0*t.padding,u=f/2,v=t.width<=s.width+t.padding?s.width+t.padding:t.width;t.width<=s.width+t.padding?t.diff=(s.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-v/2-u).attr("y",t.y-t.height/2-u).attr("width",v+f).attr("height",t.height+f),a.attr("class","inner").attr("x",t.x-v/2-u).attr("y",t.y-t.height/2-u+s.height-1).attr("width",v+f).attr("height",t.height+f-s.height-3),i.attr("transform","translate("+(t.x-s.width/2)+", "+(t.y-t.height/2-t.padding/3+((0,o.j)((0,o.g)().flowchart.htmlLabels)?5:3))+")");var w=r.node().getBBox();return t.height=w.height,t.intersect=function(e){return(0,l.i)(t,e)},n},noteGroup:function(e,t){var n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");var d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.intersect=function(e){return(0,l.i)(t,e)},n},divider:function(e,t){var n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("class","divider").attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);var d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,l.i)(t,e)},n}},X={},C=function e(t,n,r,i){o.l.info("Graph in recursive render: XXX",d.c(n),i);var s=n.graph().rankdir;o.l.trace("Dir in recursive render - dir:",s);var c=t.insert("g").attr("class","root");n.nodes()?o.l.info("Recursive render XXX",n.nodes()):o.l.info("No nodes found for",n),n.edges().length>0&&o.l.trace("Recursive edges",n.edge(n.edges()[0]));var g=c.insert("g").attr("class","clusters"),f=c.insert("g").attr("class","edgePaths"),u=c.insert("g").attr("class","edgeLabels"),v=c.insert("g").attr("class","nodes");n.nodes().forEach((function(t){var a=n.node(t);if(void 0!==i){var d=JSON.parse(JSON.stringify(i.clusterData));o.l.info("Setting data for cluster XXX (",t,") ",d,i),n.setNode(i.id,d),n.parent(t)||(o.l.trace("Setting parent",t,i.id),n.setParent(t,i.id,d))}if(o.l.info("(Insert) Node XXX"+t+": "+JSON.stringify(n.node(t))),a&&a.clusterNode){o.l.info("Cluster identified",t,a.width,n.node(t));var c=e(v,a.graph,r,n.node(t)),g=c.elem;(0,l.u)(a,g),a.diff=c.diff||0,o.l.info("Node bounds (abc123)",t,a,a.width,a.x,a.y),(0,l.s)(g,a),o.l.warn("Recursive render complete ",g,a)}else n.children(t).length>0?(o.l.info("Cluster - the non recursive path XXX",t,a.id,a,n),o.l.info(p(a.id,n)),h[a.id]={id:p(a.id,n),node:a}):(o.l.info("Node - the non recursive path",t,a.id,a),(0,l.e)(v,n.node(t),s))})),n.edges().forEach((function(e){var t=n.edge(e.v,e.w,e.name);o.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),o.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(n.edge(e))),o.l.info("Fix",h,"ids:",e.v,e.w,"Translateing: ",h[e.v],h[e.w]),(0,l.f)(u,t)})),n.edges().forEach((function(e){o.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),o.l.info("#############################################"),o.l.info("###                Layout                 ###"),o.l.info("#############################################"),o.l.info(n),(0,a.bK)(n),o.l.info("Graph after layout:",d.c(n));var w=0;return N(n).forEach((function(e){var t=n.node(e);o.l.info("Position "+e+": "+JSON.stringify(n.node(e))),o.l.info("Position "+e+": ("+t.x,","+t.y,") width: ",t.width," height: ",t.height),t&&t.clusterNode?(0,l.p)(t):n.children(e).length>0?(!function(e,t){o.l.trace("Inserting cluster");var n=t.shape||"rect";X[t.id]=E[n](e,t)}(g,t),h[t.id].node=t):(0,l.p)(t)})),n.edges().forEach((function(e){var t=n.edge(e);o.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(t),t);var i=(0,l.g)(f,e,t,h,r,n);(0,l.h)(t,i)})),n.nodes().forEach((function(e){var t=n.node(e);o.l.info(e,t.type,t.diff),"group"===t.type&&(w=t.diff)})),{elem:c,diff:w}},S=function(e,t,n,r,i){(0,l.a)(e,n,r,i),(0,l.b)(),(0,l.d)(),X={},g={},f={},h={},o.l.warn("Graph at first:",d.c(t)),x(t),o.l.warn("Graph after:",d.c(t)),C(e,t,r)}}}]);
//# sourceMappingURL=725.2e229b9b.chunk.js.map