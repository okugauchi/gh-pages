(function(){"use strict";class l extends AudioWorkletProcessor{constructor(){super()}static get parameterDescriptors(){return[{name:"gain",defaultValue:.2,minValue:0,maxValue:1}]}process(a,o,u){const i=u.gain[0],h=Math.min(a.length,o.length);for(let t=0;t<h;t++){const s=a[t],c=o[t],m=Math.min(s.length,c.length);for(let n=0;n<m;n++){const g=s[n],p=c[n],f=s[n].length;for(let r=0;r<f;r++){let e=g[r];const C=2*(Math.random()-.5);e=e+C*i,e>=1?e=.9999:e<=-1&&(e=-.9999),p[r]=e}}}return!0}}registerProcessor("hiss-generator",l)})();
