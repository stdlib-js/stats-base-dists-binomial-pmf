// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var v=Math.floor;function l(r){return v(r)===r&&r>=0}function y(r){return v(r)===r}function N(r){return r!=r}var p=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function b(r){return r===p||r===s}function w(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var h=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var m=A&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return h.call(r);t=r[d],f=d,n=null!=(u=r)&&_.call(u,f);try{r[d]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[d]=t:delete r[d],e}:function(r){return h.call(r)},U="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var j,I="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===m(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O=j,S="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null;var F,H="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),t=n,r=(S&&t instanceof Float64Array||"[object Float64Array]"===m(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T=F,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var k,M="function"==typeof Uint8Array?Uint8Array:void 0;k=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===m(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var x=k,L="function"==typeof Uint16Array;var V="function"==typeof Uint16Array?Uint16Array:null;var W,Y="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===m(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var q,C={uint16:W,uint8:x};(q=new C.uint16(1))[0]=4660;var z=52===new C.uint8(q.buffer)[0],B=!0===z?1:0,D=new T(1),J=new O(D.buffer);function K(r){return D[0]=r,J[B]}var Q=!0===z?1:0,R=new T(1),X=new O(R.buffer);function Z(r,n){return R[0]=r,X[Q]=n>>>0,R[0]}var $=.6931471803691238,rr=1.9082149292705877e-10;function nr(r){var n,t,e,u,f,i,o,a,c,v,l,y;return 0===r?s:N(r)||r<0?NaN:(f=0,(t=K(r))<1048576&&(f-=54,t=K(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-1023|0,f+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=Z(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===f?0:f*$+f*rr:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*$-(i-f*rr-o)):(a=t-398458|0,c=440401-t|0,u=(l=(y=(v=o/(2+o))*v)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-v*(n+i)):f*$-(n-(v*(n+i)+f*rr)-o)):0===f?o-v*(o-i):f*$-(v*(o-i)-f*rr-o))))}var tr=Math.ceil;function er(r){return r<0?tr(r):v(r)}function ur(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var fr=-.16666666666666632;function ir(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(fr+u*t):r-(u*(.5*n-e*t)-n-e*fr)}var or,ar,cr=!0===z?0:1,vr=new T(1),lr=new O(vr.buffer);!0===z?(or=1,ar=0):(or=0,ar=1);var yr={HIGH:or,LOW:ar},Nr=new T(1),pr=new O(Nr.buffer),sr=yr.HIGH,br=yr.LOW;function wr(r,n){return pr[sr]=r,pr[br]=n,Nr[0]}var Ar,hr;!0===z?(Ar=1,hr=0):(Ar=0,hr=1);var _r={HIGH:Ar,LOW:hr},dr=new T(1),mr=new O(dr.buffer),Ur=_r.HIGH,gr=_r.LOW;function jr(r,n){return dr[0]=n,r[0]=mr[Ur],r[1]=mr[gr],r}function Ir(r,n){return 1===arguments.length?jr([0,0],r):jr(r,n)}var Or=[0,0];function Sr(r,n){var t,e;return Ir(Or,r),t=Or[0],t&=2147483647,e=K(n),wr(t|=e&=2147483648,Or[1])}function Er(r,n,t,e){return N(r)||b(r)?(n[e]=r,n[e+t]=0,n):0!==r&&w(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Er(r,[0,0],1,0)}),"assign",Er);var Fr=[0,0],Hr=[0,0];function Tr(r,n){var t,e;return 0===n||0===r||N(r)||b(r)?r:(Er(r,Fr,1,0),n+=Fr[1],n+=function(r){var n=K(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Fr[0]),n<-1074?Sr(0,r):n>1023?r<0?s:p:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ir(Hr,r),t=Hr[0],t&=2148532223,e*wr(t|=n+1023<<20,Hr[1])))}function Gr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],kr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Mr=5.960464477539063e-8,xr=Gr(20),Lr=Gr(20),Vr=Gr(20),Wr=Gr(20);function Yr(r,n,t,e,u,f,i,o,a){var c,l,y,N,p,s,b,w,A;for(N=f,A=e[t],w=t,p=0;w>0;p++)l=Mr*A|0,Wr[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=Tr(A,u),A-=8*v(.125*A),A-=b=0|A,y=0,u>0?(b+=p=Wr[t-1]>>24-u,Wr[t-1]-=p<<24-u,y=Wr[t-1]>>23-u):0===u?y=Wr[t-1]>>23:A>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)w=Wr[p],0===c?0!==w&&(c=1,Wr[p]=16777216-w):Wr[p]=16777215-w;if(u>0)switch(u){case 1:Wr[t-1]&=8388607;break;case 2:Wr[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Tr(1,u)))}if(0===A){for(w=0,p=t-1;p>=f;p--)w|=Wr[p];if(0===w){for(s=1;0===Wr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Pr[i+p],l=0,w=0;w<=o;w++)l+=r[w]*a[o+(p-w)];e[p]=l}return Yr(r,n,t+=s,e,u,f,i,o,a)}}if(0===A)for(t-=1,u-=24;0===Wr[t];)t-=1,u-=24;else(A=Tr(A,-u))>=16777216?(l=Mr*A|0,Wr[t]=A-16777216*l|0,u+=24,Wr[t+=1]=l):Wr[t]=0|A;for(l=Tr(1,u),p=t;p>=0;p--)e[p]=l*Wr[p],l*=Mr;for(p=t;p>=0;p--){for(l=0,s=0;s<=N&&s<=t-p;s++)l+=kr[s]*e[p+s];Vr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Vr[p];for(n[0]=0===y?l:-l,l=Vr[0]-l,p=1;p<=t;p++)l+=Vr[p];return n[1]=0===y?l:-l,7&b}function qr(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)xr[a]=c<0?0:Pr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*xr[i+(a-c)];Lr[a]=u}return 4,Yr(r,n,4,Lr,o,4,f,i,xr)}var Cr=Math.round;function zr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Cr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(K(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(K(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Br=1.5707963267341256,Dr=6077100506506192e-26,Jr=2*Dr,Kr=4*Dr,Qr=[0,0,0],Rr=[0,0];function Xr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&K(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?zr(r,u,n):u<=1073928572?r>0?(a=r-Br,n[0]=a-Dr,n[1]=a-n[0]-Dr,1):(a=r+Br,n[0]=a+Dr,n[1]=a-n[0]+Dr,-1):r>0?(a=r-2*Br,n[0]=a-Jr,n[1]=a-n[0]-Jr,2):(a=r+2*Br,n[0]=a+Jr,n[1]=a-n[0]+Jr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?zr(r,u,n):r>0?(a=r-3*Br,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Br,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?zr(r,u,n):r>0?(a=r-4*Br,n[0]=a-Kr,n[1]=a-n[0]-Kr,4):(a=r+4*Br,n[0]=a+Kr,n[1]=a-n[0]+Kr,-4);if(u<1094263291)return zr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return vr[0]=r,lr[cr]}(r),a=wr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Qr[i]=0|a,a=16777216*(a-Qr[i]);for(Qr[2]=a,f=3;0===Qr[f-1];)f-=1;return o=qr(Qr,Rr,e,f),r<0?(n[0]=-Rr[0],n[1]=-Rr[1],-o):(n[0]=Rr[0],n[1]=Rr[1],o)}var Zr=[0,0];function $r(r){var n;if(n=K(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ur(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,Zr)){case 0:return ur(Zr[0],Zr[1]);case 1:return-ir(Zr[0],Zr[1]);case 2:return-ur(Zr[0],Zr[1]);default:return ir(Zr[0],Zr[1])}}var rn=[0,0];function nn(r){var n;if(n=K(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ir(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,rn)){case 0:return ir(rn[0],rn[1]);case 1:return ur(rn[0],rn[1]);case 2:return-ir(rn[0],rn[1]);default:return-ur(rn[0],rn[1])}}var tn=3.141592653589793;var en=1.4616321449683622,un=1.4616321449683622;function fn(r){var n,t,e,u,f,i,o,a,c,v,l,y,s;if(N(r)||b(r))return r;if(0===r)return p;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-nr(r);if(n){if(r>=4503599627370496)return p;if(c=function(r){var n,t;return N(r)||b(r)?NaN:0===(n=w(t=r%2))||1===n?Sr(0,t):n<.25?nn(tn*t):n<.75?Sr($r(tn*(n=.5-n)),t):n<1.25?(t=Sr(1,t)-t,nn(tn*t)):n<1.75?-Sr($r(tn*(n-=1.5)),t):(t-=Sr(2,t),nn(tn*t))}(r),0===c)return p;t=nr(tn/w(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-nr(r),r>=en-1+.27?(l=1-r,e=0):r>=en-1-.27?(l=r-(un-1),e=1):(l=r,e=2)):(s=0,r>=en+.27?(l=2-r,e=0):r>=en-.27?(l=r-un,e=1):(l=r-1,e=2)),e){case 0:i=.07721566490153287+(y=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),f=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),s+=(o=l*i+f)-.5*l;break;case 1:i=.48383612272381005+(v=(y=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),f=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,u=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),s+=-.12148629053584961+(o=y*i-(-3638676997039505e-33-v*(f+l*u)));break;case 2:i=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),s+=-.5*l+i/f}else if(r<8)switch(o=(l=r-(e=er(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),s=.5*l+o/a,y=1,e){case 7:y*=l+6;case 6:y*=l+5;case 5:y*=l+4;case 4:y*=l+3;case 3:s+=nr(y*=l+2)}else r<0x400000000000000?(c=nr(r),v=.4189385332046727+(y=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=y*y),s=(r-.5)*(c-1)+v):s=r*(nr(r)-1);return n&&(s=t-s),s}var on=.6931471803691238,an=1.9082149292705877e-10;function cn(r){var n,t,e,u,f,i,o,a,c,v;if(r<-1||N(r))return NaN;if(-1===r)return s;if(r===p)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(f=(v=((t=K(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((t=K(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=Z(c,1072693248|t):(v+=1,c=Z(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*on+(f+=v*an):v*on-((a=n*(1-.6666666666666666*u))-(v*an+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===v?u-(n-i*(n+a)):v*on-(n-(i*(n+a)+(v*an+f))-u))}function vn(r){return 0===r&&1/r===s}function ln(r){return y(r/2)}function yn(r){return ln(r>0?r-1:r+1)}var Nn=Math.sqrt,pn=!0===z?0:1,sn=new T(1),bn=new O(sn.buffer);function wn(r,n){return sn[0]=r,bn[pn]=n>>>0,sn[0]}function An(r){return 0|r}var hn=[1,1.5],_n=[0,.5849624872207642],dn=[0,1.350039202129749e-8];var mn=1e300,Un=1e-300,gn=[0,0],jn=[0,0];function In(r,n){var t,e,u,f,i,o,a,c,v,l,A,h,_,d;if(N(r)||N(n))return NaN;if(Ir(gn,n),i=gn[0],0===gn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Nn(r);if(-.5===n)return 1/Nn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(b(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:w(r)<1==(n===p)?0:p}(r,n)}if(Ir(gn,r),f=gn[0],0===gn[1]){if(0===f)return function(r,n){return n===s?p:n===p?0:n>0?yn(n)?r:0:yn(n)?Sr(p,r):p}(r,n);if(1===r)return 1;if(-1===r&&yn(n))return-1;if(b(r))return r===s?In(-0,-n):n<0?0:p}if(r<0&&!1===y(n))return(r-r)/(r-r);if(u=w(r),t=2147483647&f|0,e=2147483647&i|0,a=i>>>31|0,o=(o=f>>>31|0)&&yn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&K(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*mn*mn:o*Un*Un;if(t>1072693248)return 0===a?o*mn*mn:o*Un*Un;A=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=wn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(jn,u)}else A=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,N,p,s,b,w,A,h,_,d,m,U;return _=0,t<1048576&&(_-=53,t=K(n*=9007199254740992)),_+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,_+=1,t-=1048576),i=wn(u=(A=(n=Z(n,t))-(c=hn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Z(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=wn(a=3+(f=i*i)+(w+=(o=h*(A-i*a-i*(n-(a-c))))*(i+u)),0),s=(N=-7.028461650952758e-9*(l=wn(l=(A=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(l-A))+dn[m])-((p=wn(p=(y=.9617967009544373*l)+N+(v=_n[m])+(b=_),0))-b-v-y),r[0]=p,r[1]=s,r}(jn,u,t);if(l=(n-(c=wn(n,0)))*A[0]+n*A[1],v=c*A[0],Ir(gn,h=l+v),_=An(gn[0]),d=An(gn[1]),_>=1083179008){if(0!=(_-1083179008|d))return o*mn*mn;if(l+8008566259537294e-32>h-v)return o*mn*mn}else if((2147483647&_)>=1083231232){if(0!=(_-3230714880|d))return o*Un*Un;if(l<=h-v)return o*Un*Un}return h=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,N;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=Z(0,e)),r=An(r=K(c=1-((c=(i=.6931471824645996*(f=wn(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(N=f)?.16666666666666602:.16666666666666602+N*(N*(6613756321437934e-20+N*(4.1381367970572385e-8*N-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Tr(c,v):Z(c,r)}(_,v,l),o*h}function On(r){var n;return N(r)||r===p?r:r===s?0:r>709.782712893384?p:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,f,i;return Tr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=er(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Sn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=On(r),2.5066282746310007*(t=r>143.01608?(e=In(r,.5*r-.25))*(e/t):In(r,r-.5)/t)*n}function En(r,n){return n/((1+.5772156649015329*r)*r)}function Fn(r){var n,t,e,u;if(y(r)&&r<0||r===s||N(r))return NaN;if(0===r)return vn(r)?s:p;if(r>171.61447887182297)return p;if(r<-170.5674972726612)return 0;if((t=w(r))>33)return r>=0?Sn(r):(n=0==(1&(e=v(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*nn(tn*u),n*tn/(w(u)*Sn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return En(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return En(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Hn(r){return 0===r&&1/r===p}var Tn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Gn=Tn.length;function Pn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Gn;f++)t=e,u=n*(e=u)-t+Tn[f];return.5*(u-t)}(2*In(10/r,2)-1)/r:1/(12*r)}function kn(r,n){var t,e,u;return e=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return N(r)||N(n)?NaN:r===s||n===s?s:r===n&&0===r?vn(r)?r:n:r<n?r:n;for(e=p,f=0;f<t;f++){if(N(u=arguments[f])||u===s)return u;(u<e||u===e&&0===u&&vn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return N(r)||N(n)?NaN:r===p||n===p?p:r===n&&0===r?Hn(r)?r:n:r>n?r:n;for(e=s,f=0;f<t;f++){if(N(u=arguments[f])||u===p)return u;(u>e||u===e&&0===u&&Hn(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?p:u===p?s:e>=10?(t=Pn(e)+Pn(u)-Pn(e+u),-.5*nr(u)+.9189385332046728+t+(e-.5)*nr(e/(e+u))+u*cn(-e/(e+u))):u>=10?(t=Pn(u)-Pn(e+u),fn(e)+t+e-e*nr(e+u)+(u-.5)*cn(-e/(e+u))):nr(Fn(e)*(Fn(u)/Fn(e+u)))}function Mn(r,n){return N(r)||N(n)?NaN:y(r)&&y(n)?r<0?Mn(-r+n-1,n):n<0?s:0===n?0:1===n?nr(w(r)):r<n?s:r-n<2?Mn(r,r-n):-nr(r+1)-kn(r-n+1,n+1):NaN}function xn(r,n,t){var e;return N(r)||N(n)||N(t)||t<0||t>1||!l(n)||n===p?NaN:l(r)?r>n?0:0===t?0===r?1:0:1===t?r===n?1:0:(e=Mn(n,r),On(e+=r*nr(t)+(n-r)*cn(-t))):0}function Ln(r){return function(){return r}}function Vn(r){return N(r)?Ln(NaN):function(n){if(N(n))return NaN;return n===r?1:0}}function Wn(r,n){return N(r)||N(n)||!l(r)||r===p||n<0||n>1?Ln(NaN):0===n||0===r?Vn(0):1===n?Vn(r):function(t){var e;if(N(t))return NaN;if(l(t))return t>r?0:(e=Mn(r,t),On(e+=t*nr(n)+(r-t)*cn(-n)));return 0}}c((function(r,n){return N(r)||N(n)?NaN:r===n?1:0}),"factory",Vn),c(xn,"factory",Wn);export{xn as default,Wn as factory};
//# sourceMappingURL=mod.js.map