function Gate(a){this.isInitialize||Gate.initialize(),null==a&&(a=document.createElement("div")),a.style.margin="0px",a.style.padding="0px",a.style.position="absolute",a.style[this.browserPrefix+"TransformStyle"]="preserve-3d",a.style.width=this.width+"px",a.style.height=this.height+"px",a.style.opacity=this.opacity,this.domElement=a,this.domStyle=a.style,this.child=[]}Gate.prototype.domElement=null,Gate.prototype.style=null,Gate.prototype.isInitialize=!1,Gate.prototype.transformProperty="Transform",Gate.prototype.browserPrefix="",Gate.prototype.childNum=0,Gate.prototype.width=0,Gate.prototype.height=0,Gate.prototype.x=0,Gate.prototype.y=0,Gate.prototype.z=0,Gate.prototype.scaleX=1,Gate.prototype.scaleY=1,Gate.prototype.scaleZ=1,Gate.prototype.rotateX=0,Gate.prototype.rotateY=0,Gate.prototype.rotateZ=0,Gate.prototype.opacity=1,Gate.prototype.transition=!1,Gate.prototype.transformValue="__translate __scale __rotateX __rotateY __rotateZ",Gate.prototype.transformOrigin="0 0",Gate.prototype.enableTransition=function(a,b){return a||(a=1),b||(b="ease"),this.domStyle[this.browserPrefix+"Transition"]="all "+a+"s "+b,this},Gate.prototype.disableTransition=function(){return this.domStyle[this.browserPrefix+"Transition"]="",this},Gate.prototype.setOpacity=function(a){return this.domStyle.opacity=a,this},Gate.prototype.setWidth=function(a){return this.domStyle.width=a+"px",this},Gate.prototype.setHeight=function(a){return this.domStyle.height=a+"px",this},Gate.prototype.setClassName=function(a){return this.domElement.className=a,this},Gate.prototype.getClassName=function(){return this.domElement.className},Gate.prototype.addClassName=function(a){return this.domElement.className+=" "+a+" ",this},Gate.prototype.removeClassName=function(a){return this.domElement.className+=this.domElement.className.replace(a,""),this},Gate.prototype.setId=function(a){return this.domElement.id=a,this},Gate.prototype.getId=function(){return this.domElement.id},Gate.prototype.addChild=function(a){return this.childNum=this.child.push(a),this.domElement.appendChild(a.domElement),a},Gate.prototype.moveX=function(a){return this.x+=a,this},Gate.prototype.moveY=function(a){return this.y+=a,this},Gate.prototype.moveZ=function(a){return this.z+=a,this},Gate.prototype.setScaleX=function(a){return this.scaleX=a,this},Gate.prototype.setScaleY=function(a){return this.scaleY=a,this},Gate.prototype.setConScaleX=function(a){return this.scaleX+=a,this},Gate.prototype.setConScaleY=function(a){return this.scaleY+=a,this},Gate.prototype.setScaleZ=function(a){return this.scaleZ=a,this},Gate.prototype.setRotateX=function(a){return this.rotateX+=a,this},Gate.prototype.setRotateY=function(a){return this.rotateY+=a,this},Gate.prototype.setRotateZ=function(a){return this.rotateZ+=a,this},Gate.prototype.setRotate=function(a,b,c){return this.rotateX+=a,this.rotateY+=b,this.rotateZ+=c,this},Gate.prototype.setX=function(a){return this.x=a,this},Gate.prototype.setY=function(a){return this.y=a,this},Gate.prototype.setZ=function(a){return this.z=a,this},Gate.prototype.setTransformOrigin=function(a,b,c){return this.domStyle.transformOrigin=a+" "+b+" "+c,this},Gate.prototype.setCSS=function(a,b){return this.domStyle[a]=b,this},Gate.prototype.goToX=function(a){return this.x=a,this},Gate.prototype.goToY=function(a){return this.y=a,this},Gate.prototype.goToZ=function(a){return this.z=a,this},Gate.prototype.goTo=function(a,b,c){return this.x=a,this.y=b,this.z=c,this},Gate.prototype.goRotateX=function(a){return this.rotateX=a,this},Gate.prototype.goRotateY=function(a){return this.rotateY=a,this},Gate.prototype.goRotateZ=function(a){return this.rotateZ=a,this},Gate.prototype.goRotate=function(a,b,c){return this.rotateX=a,this.rotateY=b,this.rotateZ=c,this},Gate.prototype.go=function(){return this.translate="translate3d("+this.x+"px,"+this.y+"px,"+this.z+"px) ",this.scale="scale3d("+this.scaleX+","+this.scaleY+","+this.scaleZ+") ",this.rx="rotateX("+this.rotateX+"deg)",this.ry="rotateY("+this.rotateY+"deg)",this.rz="rotateZ("+this.rotateZ+"deg)",this.tv=this.transformValue,this.tv=this.tv.replace("__translate",this.translate),this.tv=this.tv.replace("__scale",this.scale),this.tv=this.tv.replace("__rotateX",this.rx),this.tv=this.tv.replace("__rotateY",this.ry),this.tv=this.tv.replace("__rotateZ",this.rz),this.domStyle[this.transformProperty]=this.tv,this},Gate.createStage=function(a,b,c){var d=document.createElement("div"),e=d.style;return Gate.prototype.isInitialize||Gate.initialize(),e[Gate.prototype.browserPrefix+"Perspective"]="800px",e[Gate.prototype.browserPrefix+"PerspectiveOrigin"]="0 0",e[Gate.prototype.browserPrefix+"TransformOrigin"]=this.transformOrigin,e[Gate.prototype.browserPrefix+"Transform"]="translateZ(0px)",e.position="absolute",e.left=a?a:"0px",e.top=b?b:"0px",e.margin="0px",e.padding="0px",d.className="stage",c?document.getElementById(c).appendChild(d):document.body.appendChild(d),new Gate(d)},Gate.initialize=function(){var a,b=document.createElement("div"),c=b.style,d=["","webkit","moz","ms"],e=d.length;for(a=0;e>a;a++)if(d[a]+"Perspective"in c||d[a]+"Transform"in c)return Gate.prototype.isInitialize=!0,Gate.prototype.transformProperty=d[a]+"Transform",Gate.prototype.browserPrefix=d[a],!0;return!1};