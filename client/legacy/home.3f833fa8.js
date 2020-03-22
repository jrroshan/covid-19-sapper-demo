import{_ as a,a as r,i as e,s as h,b as f,S as n,f as o,t as i,e as c,j as t,k as s,l as u,g as v,h as l,m as A,n as E,o as d,J as g,K as m,L as y,I as b,O as p,P as S,Q as C,q as B,A as M,C as w,T as k,a1 as I,c as N,d as L,V as z,W as G,N as T,R as P,x as D,y as R,a2 as $}from"./client.5c264eb7.js";import{d as V}from"./data-store.a27afbe6.js";import{f as K,F as H,T as U}from"./helpers.17fe901a.js";function x(a){return function(){var r,e=N(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var h=N(this).constructor;r=Reflect.construct(e,arguments,h)}else r=e.apply(this,arguments);return L(this,r)}}function F(a){var r,e,h,f,n,g,m;return{c:function(){r=o("div"),e=o("h1"),h=i("Covid-19 Tracker"),f=c(),n=o("div"),g=o("div"),m=i("Loading"),this.h()},l:function(a){r=t(a,"DIV",{class:!0});var o=s(r);e=t(o,"H1",{class:!0});var i=s(e);h=u(i,"Covid-19 Tracker"),i.forEach(v),f=l(o),n=t(o,"DIV",{class:!0});var c=s(n);g=t(c,"DIV",{class:!0});var A=s(g);m=u(A,"Loading"),A.forEach(v),c.forEach(v),o.forEach(v),this.h()},h:function(){A(e,"class","svelte-rmr45w"),A(g,"class","ui text loader"),A(n,"class","ui active dimmer"),A(r,"class","ui container svelte-rmr45w")},m:function(a,o){E(a,r,o),d(r,e),d(e,h),d(r,f),d(r,n),d(n,g),d(g,m)},d:function(a){a&&v(r)}}}function j(a){var r,e,h,f,n,B,M,w,k,I,N,L,P,D,R,$,V,K,x,F,j,q,Z,O,Q,W,_,X,Y,aa=a[4].cases.toLocaleString()+"",ra=a[4].deaths.toLocaleString()+"",ea=a[4].recovered.toLocaleString()+"";function ha(r){a[9].call(null,r)}function fa(r){a[10].call(null,r)}var na={selectFields:a[7]};void 0!==a[1]&&(na.sortBy=a[1]),void 0!==a[2]&&(na.search=a[2]);var oa=new H({props:na});function ia(r){a[11].call(null,r)}z.push(function(){return G(oa,"sortBy",ha)}),z.push(function(){return G(oa,"search",fa)});var ca={fields:a[6],sortBy:a[1],canNav:"true",list:a[0]};void 0!==a[3]&&(ca.page=a[3]);var ta=new U({props:ca});return z.push(function(){return G(ta,"page",ia)}),ta.$on("location",J),{c:function(){r=o("div"),e=o("h1"),h=i("Covid-19 Tracker"),f=c(),n=o("div"),B=o("div"),M=o("h3"),w=i("Cases: "),k=i(aa),I=c(),N=o("div"),L=o("h3"),P=i("Deaths: "),D=i(ra),R=c(),$=o("div"),V=o("h3"),K=i("Recovered: "),x=i(ea),F=c(),j=o("div"),q=o("h2"),Z=i("Search By Country"),O=c(),g(oa.$$.fragment),_=c(),g(ta.$$.fragment),this.h()},l:function(a){r=t(a,"DIV",{class:!0});var o=s(r);e=t(o,"H1",{class:!0});var i=s(e);h=u(i,"Covid-19 Tracker"),i.forEach(v),f=l(o),n=t(o,"DIV",{class:!0});var c=s(n);B=t(c,"DIV",{class:!0});var A=s(B);M=t(A,"H3",{});var E=s(M);w=u(E,"Cases: "),k=u(E,aa),E.forEach(v),A.forEach(v),I=l(c),N=t(c,"DIV",{class:!0});var d=s(N);L=t(d,"H3",{});var g=s(L);P=u(g,"Deaths: "),D=u(g,ra),g.forEach(v),d.forEach(v),R=l(c),$=t(c,"DIV",{class:!0});var y=s($);V=t(y,"H3",{});var b=s(V);K=u(b,"Recovered: "),x=u(b,ea),b.forEach(v),y.forEach(v),c.forEach(v),o.forEach(v),F=l(a),j=t(a,"DIV",{class:!0});var p=s(j);q=t(p,"H2",{});var S=s(q);Z=u(S,"Search By Country"),S.forEach(v),p.forEach(v),O=l(a),m(oa.$$.fragment,a),_=l(a),m(ta.$$.fragment,a),this.h()},h:function(){A(e,"class","svelte-rmr45w"),A(B,"class","five wide column"),A(N,"class","six wide column"),A($,"class","five wide column"),A(n,"class","ui grid"),A(r,"class","ui container svelte-rmr45w"),A(j,"class","ui container svelte-rmr45w")},m:function(a,o){E(a,r,o),d(r,e),d(e,h),d(r,f),d(r,n),d(n,B),d(B,M),d(M,w),d(M,k),d(n,I),d(n,N),d(N,L),d(L,P),d(L,D),d(n,R),d(n,$),d($,V),d(V,K),d(V,x),E(a,F,o),E(a,j,o),d(j,q),d(q,Z),E(a,O,o),y(oa,a,o),E(a,_,o),y(ta,a,o),Y=!0},p:function(a,r){(!Y||16&r)&&aa!==(aa=a[4].cases.toLocaleString()+"")&&b(k,aa),(!Y||16&r)&&ra!==(ra=a[4].deaths.toLocaleString()+"")&&b(D,ra),(!Y||16&r)&&ea!==(ea=a[4].recovered.toLocaleString()+"")&&b(x,ea);var e={};!Q&&2&r&&(Q=!0,e.sortBy=a[1],T(function(){return Q=!1})),!W&&4&r&&(W=!0,e.search=a[2],T(function(){return W=!1})),oa.$set(e);var h={};2&r&&(h.sortBy=a[1]),1&r&&(h.list=a[0]),!X&&8&r&&(X=!0,h.page=a[3],T(function(){return X=!1})),ta.$set(h)},i:function(a){Y||(p(oa.$$.fragment,a),p(ta.$$.fragment,a),Y=!0)},o:function(a){S(oa.$$.fragment,a),S(ta.$$.fragment,a),Y=!1},d:function(a){a&&v(r),a&&v(F),a&&v(j),a&&v(O),C(oa,a),a&&v(_),C(ta,a)}}}function q(a){var r,e,h,f,n,g,m,y,b,C,I,N,L,z,G,T,D,R,$,V,K,H,U,x,q,J,Z,O,Q,W,_,X,Y,aa,ra,ea,ha,fa,na,oa,ia,ca,ta,sa,ua,va,la,Aa,Ea,da,ga,ma,ya,ba,pa,Sa,Ca,Ba,Ma,wa,ka,Ia,Na,La,za,Ga,Ta,Pa,Da,Ra,$a,Va,Ka,Ha,Ua,xa,Fa,ja,qa,Ja,Za,Oa,Qa,Wa,_a,Xa,Ya,ar,rr,er,hr,fr,nr,or,ir,cr,tr,sr,ur,vr,lr,Ar,Er,dr,gr,mr,yr,br,pr,Sr,Cr,Br,Mr,wr,kr,Ir,Nr,Lr,zr,Gr,Tr,Pr,Dr,Rr,$r,Vr,Kr,Hr,Ur,xr,Fr,jr,qr,Jr,Zr,Or,Qr,Wr,_r,Xr,Yr,ae,re,ee,he,fe,ne,oe,ie,ce,te,se,ue,ve,le,Ae,Ee,de,ge,me,ye,be,pe,Se,Ce,Be,Me,we,ke,Ie,Ne,Le,ze,Ge,Te,Pe,De,Re,$e,Ve,Ke,He,Ue,xe,Fe,je,qe,Je,Ze,Oe,Qe,We,_e,Xe,Ye,ah,rh,eh,hh,fh,nh,oh,ih,ch,th,sh,uh,vh,lh,Ah,Eh,dh,gh,mh,yh,bh,ph,Sh,Ch,Bh,Mh,wh,kh,Ih,Nh,Lh,zh,Gh,Th,Ph,Dh,Rh,$h,Vh,Kh,Hh,Uh,xh,Fh,jh,qh,Jh,Zh,Oh,Qh,Wh,_h,Xh,Yh,af,rf,ef,hf,ff,nf,of,cf,tf,sf,uf,vf,lf,Af,Ef,df,gf,mf,yf,bf,pf,Sf,Cf,Bf,Mf,wf,kf,If,Nf,Lf,zf,Gf,Tf,Pf,Df,Rf,$f,Vf,Kf,Hf,Uf,xf,Ff,jf,qf,Jf,Zf,Of,Qf,Wf,_f,Xf,Yf,an,rn,en,hn,fn,nn,on,cn,tn,sn,un,vn,ln,An,En,dn,gn,mn,yn,bn,pn,Sn,Cn,Bn,Mn,wn,kn,In,Nn,Ln,zn,Gn,Tn,Pn,Dn,Rn,$n,Vn,Kn,Hn,Un,xn,Fn,jn,qn,Jn,Zn,On,Qn,Wn,_n,Xn,Yn,ao,ro,eo,ho,fo,no,oo,io,co,to,so,uo,vo,lo,Ao,Eo,go,mo,yo,bo,po,So,Co,Bo,Mo,wo,ko,Io,No,Lo,zo,Go,To,Po,Do,Ro,$o,Vo,Ko,Ho,Uo,xo,Fo,jo,qo,Jo,Zo,Oo,Qo,Wo,_o,Xo,Yo,ai,ri,ei,hi,fi,ni,oi,ii,ci,ti,si,ui,vi,li,Ai,Ei,di,gi,mi,yi,bi,pi,Si,Ci,Bi,Mi,wi,ki,Ii,Ni,Li,zi,Gi,Ti,Pi,Di,Ri,$i,Vi,Ki,Hi,Ui,xi,Fi,ji,qi,Ji,Zi,Oi,Qi,Wi,_i,Xi=a[5]&&F(),Yi=!a[5]&&j(a);return{c:function(){r=c(),Xi&&Xi.c(),e=c(),Yi&&Yi.c(),h=c(),f=o("div"),n=o("a"),g=i("China"),m=c(),y=o("a"),b=i("Italy"),C=c(),I=o("a"),N=i("US"),L=c(),z=o("a"),G=i("Spain"),T=c(),D=o("a"),R=i("Germany"),$=c(),V=o("a"),K=i("Iran"),H=c(),U=o("a"),x=i("France"),q=c(),J=o("a"),Z=i("S. Korea"),O=c(),Q=o("a"),W=i("Switzerland"),_=c(),X=o("a"),Y=i("UK"),aa=c(),ra=o("a"),ea=i("Netherlands"),ha=c(),fa=o("a"),na=i("Austria"),oa=c(),ia=o("a"),ca=i("Belgium"),ta=c(),sa=o("a"),ua=i("Norway"),va=c(),la=o("a"),Aa=i("Sweden"),Ea=c(),da=o("a"),ga=i("Canada"),ma=c(),ya=o("a"),ba=i("Denmark"),pa=c(),Sa=o("a"),Ca=i("Australia"),Ba=c(),Ma=o("a"),wa=i("Portugal"),ka=c(),Ia=o("a"),Na=i("Malaysia"),La=c(),za=o("a"),Ga=i("Brazil"),Ta=c(),Pa=o("a"),Da=i("Japan"),Ra=c(),$a=o("a"),Va=i("Czechia"),Ka=c(),Ha=o("a"),Ua=i("Turkey"),xa=c(),Fa=o("a"),ja=i("Israel"),qa=c(),Ja=o("a"),Za=i("Ireland"),Oa=c(),Qa=o("a"),Wa=i("Luxembourg"),_a=c(),Xa=o("a"),Ya=i("Pakistan"),ar=c(),rr=o("a"),er=i("Thailand"),hr=c(),fr=o("a"),nr=i("Chile"),or=c(),ir=o("a"),cr=i("Poland"),tr=c(),sr=o("a"),ur=i("Ecuador"),vr=c(),lr=o("a"),Ar=i("Greece"),Er=c(),dr=o("a"),gr=i("Finland"),mr=c(),yr=o("a"),br=i("Qatar"),pr=c(),Sr=o("a"),Cr=i("Iceland"),Br=c(),Mr=o("a"),wr=i("Indonesia"),kr=c(),Ir=o("a"),Nr=i("Singapore"),Lr=c(),zr=o("a"),Gr=i("Saudi Arabia"),Tr=c(),Pr=o("a"),Dr=i("Slovenia"),Rr=c(),$r=o("a"),Vr=i("Philippines"),Kr=c(),Hr=o("a"),Ur=i("Romania"),xr=c(),Fr=o("a"),jr=i("India"),qr=c(),Jr=o("a"),Zr=i("Peru"),Or=c(),Qr=o("a"),Wr=i("Bahrain"),_r=c(),Xr=o("a"),Yr=i("Russia"),ae=c(),re=o("a"),ee=i("Estonia"),he=c(),fe=o("a"),ne=i("Egypt"),oe=c(),ie=o("a"),ce=i("Mexico"),te=c(),se=o("a"),ue=i("Panama"),ve=c(),le=o("a"),Ae=i("South Africa"),Ee=c(),de=o("a"),ge=i("Lebanon"),me=c(),ye=o("a"),be=i("Argentina"),pe=c(),Se=o("a"),Ce=i("Iraq"),Be=c(),Me=o("a"),we=i("Colombia"),ke=c(),Ie=o("a"),Ne=i("Croatia"),Le=c(),ze=o("a"),Ge=i("Armenia"),Te=c(),Pe=o("a"),De=i("Slovakia"),Re=c(),$e=o("a"),Ve=i("Kuwait"),Ke=c(),He=o("a"),Ue=i("Serbia"),xe=c(),Fe=o("a"),je=i("Bulgaria"),qe=c(),Je=o("a"),Ze=i("San Marino"),Oe=c(),Qe=o("a"),We=i("Algeria"),_e=c(),Xe=o("a"),Ye=i("Uruguay"),ah=c(),rh=o("a"),eh=i("Latvia"),hh=c(),fh=o("a"),nh=i("Costa Rica"),oh=c(),ih=o("a"),ch=i("Dominican Republic"),th=c(),sh=o("a"),uh=i("Lithuania"),vh=c(),lh=o("a"),Ah=i("Hungary"),Eh=c(),dh=o("a"),gh=i("Jordan"),mh=c(),yh=o("a"),bh=i("Morocco"),ph=c(),Sh=o("a"),Ch=i("Vietnam"),Bh=c(),Mh=o("a"),wh=i("Bosnia and Herzegovina"),kh=c(),Ih=o("a"),Nh=i("Andorra"),Lh=c(),zh=o("a"),Gh=i("North Macedonia"),Th=c(),Ph=o("a"),Dh=i("Cyprus"),Rh=c(),$h=o("a"),Vh=i("Brunei"),Kh=c(),Hh=o("a"),Uh=i("Moldova"),xh=c(),Fh=o("a"),jh=i("Sri Lanka"),qh=c(),Jh=o("a"),Zh=i("Albania"),Oh=c(),Qh=o("a"),Wh=i("Belarus"),_h=c(),Xh=o("a"),Yh=i("Malta"),af=c(),rf=o("a"),ef=i("Venezuela"),hf=c(),ff=o("a"),nf=i("New Zealand"),of=c(),cf=o("a"),tf=i("Burkina Faso"),sf=c(),uf=o("a"),vf=i("Tunisia"),lf=c(),Af=o("a"),Ef=i("Senegal"),df=c(),gf=o("a"),mf=i("Georgia"),yf=c(),bf=o("a"),pf=i("Kazakhstan"),Sf=c(),Cf=o("a"),Bf=i("Azerbaijan"),Mf=c(),wf=o("a"),kf=i("Cambodia"),If=c(),Nf=o("a"),Lf=i("Oman"),zf=c(),Gf=o("a"),Tf=i("Trinidad and Tobago"),Pf=c(),Df=o("a"),Rf=i("Ukraine"),$f=c(),Vf=o("a"),Kf=i("Uzbekistan"),Hf=c(),Uf=o("a"),xf=i("Cameroon"),Ff=c(),jf=o("a"),qf=i("Martinique"),Jf=c(),Zf=o("a"),Of=i("Liechtenstein"),Qf=c(),Wf=o("a"),_f=i("Honduras"),Xf=c(),Yf=o("a"),an=i("Bangladesh"),rn=c(),en=o("a"),hn=i("Afghanistan"),fn=c(),nn=o("a"),on=i("Paraguay"),cn=c(),tn=o("a"),sn=i("Nigeria"),un=c(),vn=o("a"),ln=i("Cuba"),An=c(),En=o("a"),dn=i("Ghana"),gn=c(),mn=o("a"),yn=i("Jamaica"),bn=c(),pn=o("a"),Sn=i("Bolivia"),Cn=c(),Bn=o("a"),Mn=i("Guyana"),wn=c(),kn=o("a"),In=i("Monaco"),Nn=c(),Ln=o("a"),zn=i("Guatemala"),Gn=c(),Tn=o("a"),Pn=i("Rwanda"),Dn=c(),Rn=o("a"),$n=i("Montenegro"),Vn=c(),Kn=o("a"),Hn=i("Togo"),Un=c(),xn=o("a"),Fn=i("Mauritius"),jn=c(),qn=o("a"),Jn=i("Barbados"),Zn=c(),On=o("a"),Qn=i("Kyrgyzstan"),Wn=c(),_n=o("a"),Xn=i("Maldives"),Yn=c(),ao=o("a"),ro=i("Mongolia"),eo=c(),ho=o("a"),fo=i("Ethiopia"),no=c(),oo=o("a"),io=i("Kenya"),co=c(),to=o("a"),so=i("Seychelles"),uo=c(),vo=o("a"),lo=i("Equatorial Guinea"),Ao=c(),Eo=o("a"),go=i("Tanzania"),mo=c(),yo=o("a"),bo=i("Gabon"),po=c(),So=o("a"),Co=i("Suriname"),Bo=c(),Mo=o("a"),wo=i("Eswatini"),ko=c(),Io=o("a"),No=i("Cabo Verde"),Lo=c(),zo=o("a"),Go=i("El Salvador"),To=c(),Po=o("a"),Do=i("Liberia"),Ro=c(),$o=o("a"),Vo=i("Madagascar"),Ko=c(),Ho=o("a"),Uo=i("Namibia"),xo=c(),Fo=o("a"),jo=i("Zimbabwe"),qo=c(),Jo=o("a"),Zo=i("Sudan"),Oo=c(),Qo=o("a"),Wo=i("Angola"),_o=c(),Xo=o("a"),Yo=i("Benin"),ai=c(),ri=o("a"),ei=i("Bhutan"),hi=c(),fi=o("a"),ni=i("Fiji"),oi=c(),ii=o("a"),ci=i("Guinea"),ti=c(),si=o("a"),ui=i("Haiti"),vi=c(),li=o("a"),Ai=i("Mauritania"),Ei=c(),di=o("a"),gi=i("Nicaragua"),mi=c(),yi=o("a"),bi=i("Saint Lucia"),pi=c(),Si=o("a"),Ci=i("Zambia"),Bi=c(),Mi=o("a"),wi=i("Nepal"),ki=c(),Ii=o("a"),Ni=i("Antigua and Barbuda"),Li=c(),zi=o("a"),Gi=i("Chad"),Ti=c(),Pi=o("a"),Di=i("Djibouti"),Ri=c(),$i=o("a"),Vi=i("Eritrea"),Ki=c(),Hi=o("a"),Ui=i("Niger"),xi=c(),Fi=o("a"),ji=i("Papua New Guinea"),qi=c(),Ji=o("a"),Zi=i("Somalia"),Oi=c(),Qi=o("a"),Wi=i("Uganda"),this.h()},l:function(a){B('[data-svelte="svelte-1voy90n"]',document.head).forEach(v),r=l(a),Xi&&Xi.l(a),e=l(a),Yi&&Yi.l(a),h=l(a),f=t(a,"DIV",{style:!0});var o=s(f);n=t(o,"A",{href:!0});var i=s(n);g=u(i,"China"),i.forEach(v),m=l(o),y=t(o,"A",{href:!0});var c=s(y);b=u(c,"Italy"),c.forEach(v),C=l(o),I=t(o,"A",{href:!0});var A=s(I);N=u(A,"US"),A.forEach(v),L=l(o),z=t(o,"A",{href:!0});var E=s(z);G=u(E,"Spain"),E.forEach(v),T=l(o),D=t(o,"A",{href:!0});var d=s(D);R=u(d,"Germany"),d.forEach(v),$=l(o),V=t(o,"A",{href:!0});var p=s(V);K=u(p,"Iran"),p.forEach(v),H=l(o),U=t(o,"A",{href:!0});var S=s(U);x=u(S,"France"),S.forEach(v),q=l(o),J=t(o,"A",{href:!0});var M=s(J);Z=u(M,"S. Korea"),M.forEach(v),O=l(o),Q=t(o,"A",{href:!0});var w=s(Q);W=u(w,"Switzerland"),w.forEach(v),_=l(o),X=t(o,"A",{href:!0});var k=s(X);Y=u(k,"UK"),k.forEach(v),aa=l(o),ra=t(o,"A",{href:!0});var P=s(ra);ea=u(P,"Netherlands"),P.forEach(v),ha=l(o),fa=t(o,"A",{href:!0});var F=s(fa);na=u(F,"Austria"),F.forEach(v),oa=l(o),ia=t(o,"A",{href:!0});var j=s(ia);ca=u(j,"Belgium"),j.forEach(v),ta=l(o),sa=t(o,"A",{href:!0});var _i=s(sa);ua=u(_i,"Norway"),_i.forEach(v),va=l(o),la=t(o,"A",{href:!0});var ac=s(la);Aa=u(ac,"Sweden"),ac.forEach(v),Ea=l(o),da=t(o,"A",{href:!0});var rc=s(da);ga=u(rc,"Canada"),rc.forEach(v),ma=l(o),ya=t(o,"A",{href:!0});var ec=s(ya);ba=u(ec,"Denmark"),ec.forEach(v),pa=l(o),Sa=t(o,"A",{href:!0});var hc=s(Sa);Ca=u(hc,"Australia"),hc.forEach(v),Ba=l(o),Ma=t(o,"A",{href:!0});var fc=s(Ma);wa=u(fc,"Portugal"),fc.forEach(v),ka=l(o),Ia=t(o,"A",{href:!0});var nc=s(Ia);Na=u(nc,"Malaysia"),nc.forEach(v),La=l(o),za=t(o,"A",{href:!0});var oc=s(za);Ga=u(oc,"Brazil"),oc.forEach(v),Ta=l(o),Pa=t(o,"A",{href:!0});var ic=s(Pa);Da=u(ic,"Japan"),ic.forEach(v),Ra=l(o),$a=t(o,"A",{href:!0});var cc=s($a);Va=u(cc,"Czechia"),cc.forEach(v),Ka=l(o),Ha=t(o,"A",{href:!0});var tc=s(Ha);Ua=u(tc,"Turkey"),tc.forEach(v),xa=l(o),Fa=t(o,"A",{href:!0});var sc=s(Fa);ja=u(sc,"Israel"),sc.forEach(v),qa=l(o),Ja=t(o,"A",{href:!0});var uc=s(Ja);Za=u(uc,"Ireland"),uc.forEach(v),Oa=l(o),Qa=t(o,"A",{href:!0});var vc=s(Qa);Wa=u(vc,"Luxembourg"),vc.forEach(v),_a=l(o),Xa=t(o,"A",{href:!0});var lc=s(Xa);Ya=u(lc,"Pakistan"),lc.forEach(v),ar=l(o),rr=t(o,"A",{href:!0});var Ac=s(rr);er=u(Ac,"Thailand"),Ac.forEach(v),hr=l(o),fr=t(o,"A",{href:!0});var Ec=s(fr);nr=u(Ec,"Chile"),Ec.forEach(v),or=l(o),ir=t(o,"A",{href:!0});var dc=s(ir);cr=u(dc,"Poland"),dc.forEach(v),tr=l(o),sr=t(o,"A",{href:!0});var gc=s(sr);ur=u(gc,"Ecuador"),gc.forEach(v),vr=l(o),lr=t(o,"A",{href:!0});var mc=s(lr);Ar=u(mc,"Greece"),mc.forEach(v),Er=l(o),dr=t(o,"A",{href:!0});var yc=s(dr);gr=u(yc,"Finland"),yc.forEach(v),mr=l(o),yr=t(o,"A",{href:!0});var bc=s(yr);br=u(bc,"Qatar"),bc.forEach(v),pr=l(o),Sr=t(o,"A",{href:!0});var pc=s(Sr);Cr=u(pc,"Iceland"),pc.forEach(v),Br=l(o),Mr=t(o,"A",{href:!0});var Sc=s(Mr);wr=u(Sc,"Indonesia"),Sc.forEach(v),kr=l(o),Ir=t(o,"A",{href:!0});var Cc=s(Ir);Nr=u(Cc,"Singapore"),Cc.forEach(v),Lr=l(o),zr=t(o,"A",{href:!0});var Bc=s(zr);Gr=u(Bc,"Saudi Arabia"),Bc.forEach(v),Tr=l(o),Pr=t(o,"A",{href:!0});var Mc=s(Pr);Dr=u(Mc,"Slovenia"),Mc.forEach(v),Rr=l(o),$r=t(o,"A",{href:!0});var wc=s($r);Vr=u(wc,"Philippines"),wc.forEach(v),Kr=l(o),Hr=t(o,"A",{href:!0});var kc=s(Hr);Ur=u(kc,"Romania"),kc.forEach(v),xr=l(o),Fr=t(o,"A",{href:!0});var Ic=s(Fr);jr=u(Ic,"India"),Ic.forEach(v),qr=l(o),Jr=t(o,"A",{href:!0});var Nc=s(Jr);Zr=u(Nc,"Peru"),Nc.forEach(v),Or=l(o),Qr=t(o,"A",{href:!0});var Lc=s(Qr);Wr=u(Lc,"Bahrain"),Lc.forEach(v),_r=l(o),Xr=t(o,"A",{href:!0});var zc=s(Xr);Yr=u(zc,"Russia"),zc.forEach(v),ae=l(o),re=t(o,"A",{href:!0});var Gc=s(re);ee=u(Gc,"Estonia"),Gc.forEach(v),he=l(o),fe=t(o,"A",{href:!0});var Tc=s(fe);ne=u(Tc,"Egypt"),Tc.forEach(v),oe=l(o),ie=t(o,"A",{href:!0});var Pc=s(ie);ce=u(Pc,"Mexico"),Pc.forEach(v),te=l(o),se=t(o,"A",{href:!0});var Dc=s(se);ue=u(Dc,"Panama"),Dc.forEach(v),ve=l(o),le=t(o,"A",{href:!0});var Rc=s(le);Ae=u(Rc,"South Africa"),Rc.forEach(v),Ee=l(o),de=t(o,"A",{href:!0});var $c=s(de);ge=u($c,"Lebanon"),$c.forEach(v),me=l(o),ye=t(o,"A",{href:!0});var Vc=s(ye);be=u(Vc,"Argentina"),Vc.forEach(v),pe=l(o),Se=t(o,"A",{href:!0});var Kc=s(Se);Ce=u(Kc,"Iraq"),Kc.forEach(v),Be=l(o),Me=t(o,"A",{href:!0});var Hc=s(Me);we=u(Hc,"Colombia"),Hc.forEach(v),ke=l(o),Ie=t(o,"A",{href:!0});var Uc=s(Ie);Ne=u(Uc,"Croatia"),Uc.forEach(v),Le=l(o),ze=t(o,"A",{href:!0});var xc=s(ze);Ge=u(xc,"Armenia"),xc.forEach(v),Te=l(o),Pe=t(o,"A",{href:!0});var Fc=s(Pe);De=u(Fc,"Slovakia"),Fc.forEach(v),Re=l(o),$e=t(o,"A",{href:!0});var jc=s($e);Ve=u(jc,"Kuwait"),jc.forEach(v),Ke=l(o),He=t(o,"A",{href:!0});var qc=s(He);Ue=u(qc,"Serbia"),qc.forEach(v),xe=l(o),Fe=t(o,"A",{href:!0});var Jc=s(Fe);je=u(Jc,"Bulgaria"),Jc.forEach(v),qe=l(o),Je=t(o,"A",{href:!0});var Zc=s(Je);Ze=u(Zc,"San Marino"),Zc.forEach(v),Oe=l(o),Qe=t(o,"A",{href:!0});var Oc=s(Qe);We=u(Oc,"Algeria"),Oc.forEach(v),_e=l(o),Xe=t(o,"A",{href:!0});var Qc=s(Xe);Ye=u(Qc,"Uruguay"),Qc.forEach(v),ah=l(o),rh=t(o,"A",{href:!0});var Wc=s(rh);eh=u(Wc,"Latvia"),Wc.forEach(v),hh=l(o),fh=t(o,"A",{href:!0});var _c=s(fh);nh=u(_c,"Costa Rica"),_c.forEach(v),oh=l(o),ih=t(o,"A",{href:!0});var Xc=s(ih);ch=u(Xc,"Dominican Republic"),Xc.forEach(v),th=l(o),sh=t(o,"A",{href:!0});var Yc=s(sh);uh=u(Yc,"Lithuania"),Yc.forEach(v),vh=l(o),lh=t(o,"A",{href:!0});var at=s(lh);Ah=u(at,"Hungary"),at.forEach(v),Eh=l(o),dh=t(o,"A",{href:!0});var rt=s(dh);gh=u(rt,"Jordan"),rt.forEach(v),mh=l(o),yh=t(o,"A",{href:!0});var et=s(yh);bh=u(et,"Morocco"),et.forEach(v),ph=l(o),Sh=t(o,"A",{href:!0});var ht=s(Sh);Ch=u(ht,"Vietnam"),ht.forEach(v),Bh=l(o),Mh=t(o,"A",{href:!0});var ft=s(Mh);wh=u(ft,"Bosnia and Herzegovina"),ft.forEach(v),kh=l(o),Ih=t(o,"A",{href:!0});var nt=s(Ih);Nh=u(nt,"Andorra"),nt.forEach(v),Lh=l(o),zh=t(o,"A",{href:!0});var ot=s(zh);Gh=u(ot,"North Macedonia"),ot.forEach(v),Th=l(o),Ph=t(o,"A",{href:!0});var it=s(Ph);Dh=u(it,"Cyprus"),it.forEach(v),Rh=l(o),$h=t(o,"A",{href:!0});var ct=s($h);Vh=u(ct,"Brunei"),ct.forEach(v),Kh=l(o),Hh=t(o,"A",{href:!0});var tt=s(Hh);Uh=u(tt,"Moldova"),tt.forEach(v),xh=l(o),Fh=t(o,"A",{href:!0});var st=s(Fh);jh=u(st,"Sri Lanka"),st.forEach(v),qh=l(o),Jh=t(o,"A",{href:!0});var ut=s(Jh);Zh=u(ut,"Albania"),ut.forEach(v),Oh=l(o),Qh=t(o,"A",{href:!0});var vt=s(Qh);Wh=u(vt,"Belarus"),vt.forEach(v),_h=l(o),Xh=t(o,"A",{href:!0});var lt=s(Xh);Yh=u(lt,"Malta"),lt.forEach(v),af=l(o),rf=t(o,"A",{href:!0});var At=s(rf);ef=u(At,"Venezuela"),At.forEach(v),hf=l(o),ff=t(o,"A",{href:!0});var Et=s(ff);nf=u(Et,"New Zealand"),Et.forEach(v),of=l(o),cf=t(o,"A",{href:!0});var dt=s(cf);tf=u(dt,"Burkina Faso"),dt.forEach(v),sf=l(o),uf=t(o,"A",{href:!0});var gt=s(uf);vf=u(gt,"Tunisia"),gt.forEach(v),lf=l(o),Af=t(o,"A",{href:!0});var mt=s(Af);Ef=u(mt,"Senegal"),mt.forEach(v),df=l(o),gf=t(o,"A",{href:!0});var yt=s(gf);mf=u(yt,"Georgia"),yt.forEach(v),yf=l(o),bf=t(o,"A",{href:!0});var bt=s(bf);pf=u(bt,"Kazakhstan"),bt.forEach(v),Sf=l(o),Cf=t(o,"A",{href:!0});var pt=s(Cf);Bf=u(pt,"Azerbaijan"),pt.forEach(v),Mf=l(o),wf=t(o,"A",{href:!0});var St=s(wf);kf=u(St,"Cambodia"),St.forEach(v),If=l(o),Nf=t(o,"A",{href:!0});var Ct=s(Nf);Lf=u(Ct,"Oman"),Ct.forEach(v),zf=l(o),Gf=t(o,"A",{href:!0});var Bt=s(Gf);Tf=u(Bt,"Trinidad and Tobago"),Bt.forEach(v),Pf=l(o),Df=t(o,"A",{href:!0});var Mt=s(Df);Rf=u(Mt,"Ukraine"),Mt.forEach(v),$f=l(o),Vf=t(o,"A",{href:!0});var wt=s(Vf);Kf=u(wt,"Uzbekistan"),wt.forEach(v),Hf=l(o),Uf=t(o,"A",{href:!0});var kt=s(Uf);xf=u(kt,"Cameroon"),kt.forEach(v),Ff=l(o),jf=t(o,"A",{href:!0});var It=s(jf);qf=u(It,"Martinique"),It.forEach(v),Jf=l(o),Zf=t(o,"A",{href:!0});var Nt=s(Zf);Of=u(Nt,"Liechtenstein"),Nt.forEach(v),Qf=l(o),Wf=t(o,"A",{href:!0});var Lt=s(Wf);_f=u(Lt,"Honduras"),Lt.forEach(v),Xf=l(o),Yf=t(o,"A",{href:!0});var zt=s(Yf);an=u(zt,"Bangladesh"),zt.forEach(v),rn=l(o),en=t(o,"A",{href:!0});var Gt=s(en);hn=u(Gt,"Afghanistan"),Gt.forEach(v),fn=l(o),nn=t(o,"A",{href:!0});var Tt=s(nn);on=u(Tt,"Paraguay"),Tt.forEach(v),cn=l(o),tn=t(o,"A",{href:!0});var Pt=s(tn);sn=u(Pt,"Nigeria"),Pt.forEach(v),un=l(o),vn=t(o,"A",{href:!0});var Dt=s(vn);ln=u(Dt,"Cuba"),Dt.forEach(v),An=l(o),En=t(o,"A",{href:!0});var Rt=s(En);dn=u(Rt,"Ghana"),Rt.forEach(v),gn=l(o),mn=t(o,"A",{href:!0});var $t=s(mn);yn=u($t,"Jamaica"),$t.forEach(v),bn=l(o),pn=t(o,"A",{href:!0});var Vt=s(pn);Sn=u(Vt,"Bolivia"),Vt.forEach(v),Cn=l(o),Bn=t(o,"A",{href:!0});var Kt=s(Bn);Mn=u(Kt,"Guyana"),Kt.forEach(v),wn=l(o),kn=t(o,"A",{href:!0});var Ht=s(kn);In=u(Ht,"Monaco"),Ht.forEach(v),Nn=l(o),Ln=t(o,"A",{href:!0});var Ut=s(Ln);zn=u(Ut,"Guatemala"),Ut.forEach(v),Gn=l(o),Tn=t(o,"A",{href:!0});var xt=s(Tn);Pn=u(xt,"Rwanda"),xt.forEach(v),Dn=l(o),Rn=t(o,"A",{href:!0});var Ft=s(Rn);$n=u(Ft,"Montenegro"),Ft.forEach(v),Vn=l(o),Kn=t(o,"A",{href:!0});var jt=s(Kn);Hn=u(jt,"Togo"),jt.forEach(v),Un=l(o),xn=t(o,"A",{href:!0});var qt=s(xn);Fn=u(qt,"Mauritius"),qt.forEach(v),jn=l(o),qn=t(o,"A",{href:!0});var Jt=s(qn);Jn=u(Jt,"Barbados"),Jt.forEach(v),Zn=l(o),On=t(o,"A",{href:!0});var Zt=s(On);Qn=u(Zt,"Kyrgyzstan"),Zt.forEach(v),Wn=l(o),_n=t(o,"A",{href:!0});var Ot=s(_n);Xn=u(Ot,"Maldives"),Ot.forEach(v),Yn=l(o),ao=t(o,"A",{href:!0});var Qt=s(ao);ro=u(Qt,"Mongolia"),Qt.forEach(v),eo=l(o),ho=t(o,"A",{href:!0});var Wt=s(ho);fo=u(Wt,"Ethiopia"),Wt.forEach(v),no=l(o),oo=t(o,"A",{href:!0});var _t=s(oo);io=u(_t,"Kenya"),_t.forEach(v),co=l(o),to=t(o,"A",{href:!0});var Xt=s(to);so=u(Xt,"Seychelles"),Xt.forEach(v),uo=l(o),vo=t(o,"A",{href:!0});var Yt=s(vo);lo=u(Yt,"Equatorial Guinea"),Yt.forEach(v),Ao=l(o),Eo=t(o,"A",{href:!0});var as=s(Eo);go=u(as,"Tanzania"),as.forEach(v),mo=l(o),yo=t(o,"A",{href:!0});var rs=s(yo);bo=u(rs,"Gabon"),rs.forEach(v),po=l(o),So=t(o,"A",{href:!0});var es=s(So);Co=u(es,"Suriname"),es.forEach(v),Bo=l(o),Mo=t(o,"A",{href:!0});var hs=s(Mo);wo=u(hs,"Eswatini"),hs.forEach(v),ko=l(o),Io=t(o,"A",{href:!0});var fs=s(Io);No=u(fs,"Cabo Verde"),fs.forEach(v),Lo=l(o),zo=t(o,"A",{href:!0});var ns=s(zo);Go=u(ns,"El Salvador"),ns.forEach(v),To=l(o),Po=t(o,"A",{href:!0});var os=s(Po);Do=u(os,"Liberia"),os.forEach(v),Ro=l(o),$o=t(o,"A",{href:!0});var is=s($o);Vo=u(is,"Madagascar"),is.forEach(v),Ko=l(o),Ho=t(o,"A",{href:!0});var cs=s(Ho);Uo=u(cs,"Namibia"),cs.forEach(v),xo=l(o),Fo=t(o,"A",{href:!0});var ts=s(Fo);jo=u(ts,"Zimbabwe"),ts.forEach(v),qo=l(o),Jo=t(o,"A",{href:!0});var ss=s(Jo);Zo=u(ss,"Sudan"),ss.forEach(v),Oo=l(o),Qo=t(o,"A",{href:!0});var us=s(Qo);Wo=u(us,"Angola"),us.forEach(v),_o=l(o),Xo=t(o,"A",{href:!0});var vs=s(Xo);Yo=u(vs,"Benin"),vs.forEach(v),ai=l(o),ri=t(o,"A",{href:!0});var ls=s(ri);ei=u(ls,"Bhutan"),ls.forEach(v),hi=l(o),fi=t(o,"A",{href:!0});var As=s(fi);ni=u(As,"Fiji"),As.forEach(v),oi=l(o),ii=t(o,"A",{href:!0});var Es=s(ii);ci=u(Es,"Guinea"),Es.forEach(v),ti=l(o),si=t(o,"A",{href:!0});var ds=s(si);ui=u(ds,"Haiti"),ds.forEach(v),vi=l(o),li=t(o,"A",{href:!0});var gs=s(li);Ai=u(gs,"Mauritania"),gs.forEach(v),Ei=l(o),di=t(o,"A",{href:!0});var ms=s(di);gi=u(ms,"Nicaragua"),ms.forEach(v),mi=l(o),yi=t(o,"A",{href:!0});var ys=s(yi);bi=u(ys,"Saint Lucia"),ys.forEach(v),pi=l(o),Si=t(o,"A",{href:!0});var bs=s(Si);Ci=u(bs,"Zambia"),bs.forEach(v),Bi=l(o),Mi=t(o,"A",{href:!0});var ps=s(Mi);wi=u(ps,"Nepal"),ps.forEach(v),ki=l(o),Ii=t(o,"A",{href:!0});var Ss=s(Ii);Ni=u(Ss,"Antigua and Barbuda"),Ss.forEach(v),Li=l(o),zi=t(o,"A",{href:!0});var Cs=s(zi);Gi=u(Cs,"Chad"),Cs.forEach(v),Ti=l(o),Pi=t(o,"A",{href:!0});var Bs=s(Pi);Di=u(Bs,"Djibouti"),Bs.forEach(v),Ri=l(o),$i=t(o,"A",{href:!0});var Ms=s($i);Vi=u(Ms,"Eritrea"),Ms.forEach(v),Ki=l(o),Hi=t(o,"A",{href:!0});var ws=s(Hi);Ui=u(ws,"Niger"),ws.forEach(v),xi=l(o),Fi=t(o,"A",{href:!0});var ks=s(Fi);ji=u(ks,"Papua New Guinea"),ks.forEach(v),qi=l(o),Ji=t(o,"A",{href:!0});var Is=s(Ji);Zi=u(Is,"Somalia"),Is.forEach(v),Oi=l(o),Qi=t(o,"A",{href:!0});var Ns=s(Qi);Wi=u(Ns,"Uganda"),Ns.forEach(v),o.forEach(v),this.h()},h:function(){document.title="Covid-19 Tracker",A(n,"href","China"),A(y,"href","Italy"),A(I,"href","US"),A(z,"href","Spain"),A(D,"href","Germany"),A(V,"href","Iran"),A(U,"href","France"),A(J,"href","S. Korea"),A(Q,"href","Switzerland"),A(X,"href","UK"),A(ra,"href","Netherlands"),A(fa,"href","Austria"),A(ia,"href","Belgium"),A(sa,"href","Norway"),A(la,"href","Sweden"),A(da,"href","Canada"),A(ya,"href","Denmark"),A(Sa,"href","Australia"),A(Ma,"href","Portugal"),A(Ia,"href","Malaysia"),A(za,"href","Brazil"),A(Pa,"href","Japan"),A($a,"href","Czechia"),A(Ha,"href","Turkey"),A(Fa,"href","Israel"),A(Ja,"href","Ireland"),A(Qa,"href","Luxembourg"),A(Xa,"href","Pakistan"),A(rr,"href","Thailand"),A(fr,"href","Chile"),A(ir,"href","Poland"),A(sr,"href","Ecuador"),A(lr,"href","Greece"),A(dr,"href","Finland"),A(yr,"href","Qatar"),A(Sr,"href","Iceland"),A(Mr,"href","Indonesia"),A(Ir,"href","Singapore"),A(zr,"href","Saudi Arabia"),A(Pr,"href","Slovenia"),A($r,"href","Philippines"),A(Hr,"href","Romania"),A(Fr,"href","India"),A(Jr,"href","Peru"),A(Qr,"href","Bahrain"),A(Xr,"href","Russia"),A(re,"href","Estonia"),A(fe,"href","Egypt"),A(ie,"href","Mexico"),A(se,"href","Panama"),A(le,"href","South Africa"),A(de,"href","Lebanon"),A(ye,"href","Argentina"),A(Se,"href","Iraq"),A(Me,"href","Colombia"),A(Ie,"href","Croatia"),A(ze,"href","Armenia"),A(Pe,"href","Slovakia"),A($e,"href","Kuwait"),A(He,"href","Serbia"),A(Fe,"href","Bulgaria"),A(Je,"href","San Marino"),A(Qe,"href","Algeria"),A(Xe,"href","Uruguay"),A(rh,"href","Latvia"),A(fh,"href","Costa Rica"),A(ih,"href","Dominican Republic"),A(sh,"href","Lithuania"),A(lh,"href","Hungary"),A(dh,"href","Jordan"),A(yh,"href","Morocco"),A(Sh,"href","Vietnam"),A(Mh,"href","Bosnia and Herzegovina"),A(Ih,"href","Andorra"),A(zh,"href","North Macedonia"),A(Ph,"href","Cyprus"),A($h,"href","Brunei"),A(Hh,"href","Moldova"),A(Fh,"href","Sri Lanka"),A(Jh,"href","Albania"),A(Qh,"href","Belarus"),A(Xh,"href","Malta"),A(rf,"href","Venezuela"),A(ff,"href","New Zealand"),A(cf,"href","Burkina Faso"),A(uf,"href","Tunisia"),A(Af,"href","Senegal"),A(gf,"href","Georgia"),A(bf,"href","Kazakhstan"),A(Cf,"href","Azerbaijan"),A(wf,"href","Cambodia"),A(Nf,"href","Oman"),A(Gf,"href","Trinidad and Tobago"),A(Df,"href","Ukraine"),A(Vf,"href","Uzbekistan"),A(Uf,"href","Cameroon"),A(jf,"href","Martinique"),A(Zf,"href","Liechtenstein"),A(Wf,"href","Honduras"),A(Yf,"href","Bangladesh"),A(en,"href","Afghanistan"),A(nn,"href","Paraguay"),A(tn,"href","Nigeria"),A(vn,"href","Cuba"),A(En,"href","Ghana"),A(mn,"href","Jamaica"),A(pn,"href","Bolivia"),A(Bn,"href","Guyana"),A(kn,"href","Monaco"),A(Ln,"href","Guatemala"),A(Tn,"href","Rwanda"),A(Rn,"href","Montenegro"),A(Kn,"href","Togo"),A(xn,"href","Mauritius"),A(qn,"href","Barbados"),A(On,"href","Kyrgyzstan"),A(_n,"href","Maldives"),A(ao,"href","Mongolia"),A(ho,"href","Ethiopia"),A(oo,"href","Kenya"),A(to,"href","Seychelles"),A(vo,"href","Equatorial Guinea"),A(Eo,"href","Tanzania"),A(yo,"href","Gabon"),A(So,"href","Suriname"),A(Mo,"href","Eswatini"),A(Io,"href","Cabo Verde"),A(zo,"href","El Salvador"),A(Po,"href","Liberia"),A($o,"href","Madagascar"),A(Ho,"href","Namibia"),A(Fo,"href","Zimbabwe"),A(Jo,"href","Sudan"),A(Qo,"href","Angola"),A(Xo,"href","Benin"),A(ri,"href","Bhutan"),A(fi,"href","Fiji"),A(ii,"href","Guinea"),A(si,"href","Haiti"),A(li,"href","Mauritania"),A(di,"href","Nicaragua"),A(yi,"href","Saint Lucia"),A(Si,"href","Zambia"),A(Mi,"href","Nepal"),A(Ii,"href","Antigua and Barbuda"),A(zi,"href","Chad"),A(Pi,"href","Djibouti"),A($i,"href","Eritrea"),A(Hi,"href","Niger"),A(Fi,"href","Papua New Guinea"),A(Ji,"href","Somalia"),A(Qi,"href","Uganda"),M(f,"display","none")},m:function(a,o){E(a,r,o),Xi&&Xi.m(a,o),E(a,e,o),Yi&&Yi.m(a,o),E(a,h,o),E(a,f,o),d(f,n),d(n,g),d(f,m),d(f,y),d(y,b),d(f,C),d(f,I),d(I,N),d(f,L),d(f,z),d(z,G),d(f,T),d(f,D),d(D,R),d(f,$),d(f,V),d(V,K),d(f,H),d(f,U),d(U,x),d(f,q),d(f,J),d(J,Z),d(f,O),d(f,Q),d(Q,W),d(f,_),d(f,X),d(X,Y),d(f,aa),d(f,ra),d(ra,ea),d(f,ha),d(f,fa),d(fa,na),d(f,oa),d(f,ia),d(ia,ca),d(f,ta),d(f,sa),d(sa,ua),d(f,va),d(f,la),d(la,Aa),d(f,Ea),d(f,da),d(da,ga),d(f,ma),d(f,ya),d(ya,ba),d(f,pa),d(f,Sa),d(Sa,Ca),d(f,Ba),d(f,Ma),d(Ma,wa),d(f,ka),d(f,Ia),d(Ia,Na),d(f,La),d(f,za),d(za,Ga),d(f,Ta),d(f,Pa),d(Pa,Da),d(f,Ra),d(f,$a),d($a,Va),d(f,Ka),d(f,Ha),d(Ha,Ua),d(f,xa),d(f,Fa),d(Fa,ja),d(f,qa),d(f,Ja),d(Ja,Za),d(f,Oa),d(f,Qa),d(Qa,Wa),d(f,_a),d(f,Xa),d(Xa,Ya),d(f,ar),d(f,rr),d(rr,er),d(f,hr),d(f,fr),d(fr,nr),d(f,or),d(f,ir),d(ir,cr),d(f,tr),d(f,sr),d(sr,ur),d(f,vr),d(f,lr),d(lr,Ar),d(f,Er),d(f,dr),d(dr,gr),d(f,mr),d(f,yr),d(yr,br),d(f,pr),d(f,Sr),d(Sr,Cr),d(f,Br),d(f,Mr),d(Mr,wr),d(f,kr),d(f,Ir),d(Ir,Nr),d(f,Lr),d(f,zr),d(zr,Gr),d(f,Tr),d(f,Pr),d(Pr,Dr),d(f,Rr),d(f,$r),d($r,Vr),d(f,Kr),d(f,Hr),d(Hr,Ur),d(f,xr),d(f,Fr),d(Fr,jr),d(f,qr),d(f,Jr),d(Jr,Zr),d(f,Or),d(f,Qr),d(Qr,Wr),d(f,_r),d(f,Xr),d(Xr,Yr),d(f,ae),d(f,re),d(re,ee),d(f,he),d(f,fe),d(fe,ne),d(f,oe),d(f,ie),d(ie,ce),d(f,te),d(f,se),d(se,ue),d(f,ve),d(f,le),d(le,Ae),d(f,Ee),d(f,de),d(de,ge),d(f,me),d(f,ye),d(ye,be),d(f,pe),d(f,Se),d(Se,Ce),d(f,Be),d(f,Me),d(Me,we),d(f,ke),d(f,Ie),d(Ie,Ne),d(f,Le),d(f,ze),d(ze,Ge),d(f,Te),d(f,Pe),d(Pe,De),d(f,Re),d(f,$e),d($e,Ve),d(f,Ke),d(f,He),d(He,Ue),d(f,xe),d(f,Fe),d(Fe,je),d(f,qe),d(f,Je),d(Je,Ze),d(f,Oe),d(f,Qe),d(Qe,We),d(f,_e),d(f,Xe),d(Xe,Ye),d(f,ah),d(f,rh),d(rh,eh),d(f,hh),d(f,fh),d(fh,nh),d(f,oh),d(f,ih),d(ih,ch),d(f,th),d(f,sh),d(sh,uh),d(f,vh),d(f,lh),d(lh,Ah),d(f,Eh),d(f,dh),d(dh,gh),d(f,mh),d(f,yh),d(yh,bh),d(f,ph),d(f,Sh),d(Sh,Ch),d(f,Bh),d(f,Mh),d(Mh,wh),d(f,kh),d(f,Ih),d(Ih,Nh),d(f,Lh),d(f,zh),d(zh,Gh),d(f,Th),d(f,Ph),d(Ph,Dh),d(f,Rh),d(f,$h),d($h,Vh),d(f,Kh),d(f,Hh),d(Hh,Uh),d(f,xh),d(f,Fh),d(Fh,jh),d(f,qh),d(f,Jh),d(Jh,Zh),d(f,Oh),d(f,Qh),d(Qh,Wh),d(f,_h),d(f,Xh),d(Xh,Yh),d(f,af),d(f,rf),d(rf,ef),d(f,hf),d(f,ff),d(ff,nf),d(f,of),d(f,cf),d(cf,tf),d(f,sf),d(f,uf),d(uf,vf),d(f,lf),d(f,Af),d(Af,Ef),d(f,df),d(f,gf),d(gf,mf),d(f,yf),d(f,bf),d(bf,pf),d(f,Sf),d(f,Cf),d(Cf,Bf),d(f,Mf),d(f,wf),d(wf,kf),d(f,If),d(f,Nf),d(Nf,Lf),d(f,zf),d(f,Gf),d(Gf,Tf),d(f,Pf),d(f,Df),d(Df,Rf),d(f,$f),d(f,Vf),d(Vf,Kf),d(f,Hf),d(f,Uf),d(Uf,xf),d(f,Ff),d(f,jf),d(jf,qf),d(f,Jf),d(f,Zf),d(Zf,Of),d(f,Qf),d(f,Wf),d(Wf,_f),d(f,Xf),d(f,Yf),d(Yf,an),d(f,rn),d(f,en),d(en,hn),d(f,fn),d(f,nn),d(nn,on),d(f,cn),d(f,tn),d(tn,sn),d(f,un),d(f,vn),d(vn,ln),d(f,An),d(f,En),d(En,dn),d(f,gn),d(f,mn),d(mn,yn),d(f,bn),d(f,pn),d(pn,Sn),d(f,Cn),d(f,Bn),d(Bn,Mn),d(f,wn),d(f,kn),d(kn,In),d(f,Nn),d(f,Ln),d(Ln,zn),d(f,Gn),d(f,Tn),d(Tn,Pn),d(f,Dn),d(f,Rn),d(Rn,$n),d(f,Vn),d(f,Kn),d(Kn,Hn),d(f,Un),d(f,xn),d(xn,Fn),d(f,jn),d(f,qn),d(qn,Jn),d(f,Zn),d(f,On),d(On,Qn),d(f,Wn),d(f,_n),d(_n,Xn),d(f,Yn),d(f,ao),d(ao,ro),d(f,eo),d(f,ho),d(ho,fo),d(f,no),d(f,oo),d(oo,io),d(f,co),d(f,to),d(to,so),d(f,uo),d(f,vo),d(vo,lo),d(f,Ao),d(f,Eo),d(Eo,go),d(f,mo),d(f,yo),d(yo,bo),d(f,po),d(f,So),d(So,Co),d(f,Bo),d(f,Mo),d(Mo,wo),d(f,ko),d(f,Io),d(Io,No),d(f,Lo),d(f,zo),d(zo,Go),d(f,To),d(f,Po),d(Po,Do),d(f,Ro),d(f,$o),d($o,Vo),d(f,Ko),d(f,Ho),d(Ho,Uo),d(f,xo),d(f,Fo),d(Fo,jo),d(f,qo),d(f,Jo),d(Jo,Zo),d(f,Oo),d(f,Qo),d(Qo,Wo),d(f,_o),d(f,Xo),d(Xo,Yo),d(f,ai),d(f,ri),d(ri,ei),d(f,hi),d(f,fi),d(fi,ni),d(f,oi),d(f,ii),d(ii,ci),d(f,ti),d(f,si),d(si,ui),d(f,vi),d(f,li),d(li,Ai),d(f,Ei),d(f,di),d(di,gi),d(f,mi),d(f,yi),d(yi,bi),d(f,pi),d(f,Si),d(Si,Ci),d(f,Bi),d(f,Mi),d(Mi,wi),d(f,ki),d(f,Ii),d(Ii,Ni),d(f,Li),d(f,zi),d(zi,Gi),d(f,Ti),d(f,Pi),d(Pi,Di),d(f,Ri),d(f,$i),d($i,Vi),d(f,Ki),d(f,Hi),d(Hi,Ui),d(f,xi),d(f,Fi),d(Fi,ji),d(f,qi),d(f,Ji),d(Ji,Zi),d(f,Oi),d(f,Qi),d(Qi,Wi),_i=!0},p:function(a,r){var f=w(r,1)[0];a[5]?Xi||((Xi=F()).c(),Xi.m(e.parentNode,e)):Xi&&(Xi.d(1),Xi=null),a[5]?Yi&&(P(),S(Yi,1,1,function(){Yi=null}),k()):Yi?(Yi.p(a,f),p(Yi,1)):((Yi=j(a)).c(),p(Yi,1),Yi.m(h.parentNode,h))},i:function(a){_i||(p(Yi),_i=!0)},o:function(a){S(Yi),_i=!1},d:function(a){a&&v(r),Xi&&Xi.d(a),a&&v(e),Yi&&Yi.d(a),a&&v(h),a&&v(f)}}}function J(a){return Z.apply(this,arguments)}function Z(){return(Z=D(R.mark(function a(r){return R.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,$(r.detail);case 2:case"end":return a.stop()}},a)}))).apply(this,arguments)}function O(a,r,e){var h=[],f=[],n="none",o="",i=0,c={cases:0,deaths:0,recovered:0},t=!0;return I(D(R.mark(function a(){return R.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:V.subscribe(function(a){a&&(e(0,f=a.dataByCountry.data),e(8,h=a.dataByCountry.data),e(4,c=a.worldStats),e(5,t=!1))});case 1:case"end":return a.stop()}},a)}))),a.$$.update=function(){260&a.$$.dirty&&e(0,f=K(h,o)),4&a.$$.dirty&&o.length>0&&e(3,i=0)},[f,n,o,i,c,t,["Cases","Deaths","Recovered","Active","Critical"],["Cases","Deaths","Recovered","Active","Critical"],h,function(a){e(1,n=a)},function(a){e(2,o=a)},function(a){e(3,i=a),e(2,o)}]}export default(function(o){a(c,n);var i=x(c);function c(a){var n;return r(this,c),n=i.call(this),e(f(n),a,O,q,h,{}),n}return c}());