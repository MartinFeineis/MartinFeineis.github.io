import{a as b,b as i,e,w as h,F as y,h as _,i as f,j as B,o,t as m}from"./entry.af713c16.js";const M={data(){return{originalMortgage:null,interestRate:null,remainingPayments:null,currentBalance:null,mortgageBalance:[]}},methods:{calculateMortgageBalance(){const{originalMortgage:u,interestRate:l,remainingPayments:s,currentBalance:c}=this;let t=parseFloat(c),a=parseFloat(l)/12,n=parseFloat(s),r=a*t/(1-Math.pow(1+a,-n));for(let g=0;g<=n;g++){let d=t*a,p=r-d;t-=p,this.mortgageBalance.push(t.toFixed(2))}}}},F={lang:"en"},x=e("head",null,[e("meta",{charset:"UTF-8"}),e("link",{rel:"icon",href:"/favicon.ico"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("title",null,"Resume Martin Feineis")],-1),P=B('<label for="original-mortgage">Original Mortgage:</label><input type="text" id="original-mortgage" name="original-mortgage"><br><br><label for="interest-rate">Interest Rate:</label><input type="text" id="interest-rate" name="interest-rate"><br><br><label for="remaining-payments">Remaining Payments:</label><input type="text" id="remaining-payments" name="remaining-payments"><br><br><label for="current-balance">Current Balance:</label><input type="text" id="current-balance" name="current-balance"><br><br>',16),k={key:0},w=e("thead",null,[e("tr",null,[e("th",null,"Month"),e("th",null,"Balance")])],-1);function R(u,l,s,c,t,a){return o(),i("html",F,[x,e("body",null,[e("div",null,[e("form",null,[P,e("button",{type:"submit",onClick:l[0]||(l[0]=h((...n)=>a.calculateMortgageBalance&&a.calculateMortgageBalance(...n),["prevent"]))},"Calculate")]),t.mortgageBalance.length?(o(),i("table",k,[w,e("tbody",null,[(o(!0),i(y,null,_(t.mortgageBalance,(n,r)=>(o(),i("tr",{key:r},[e("td",null,m(r+1),1),e("td",null,m(n),1)]))),128))])])):f("",!0)])])])}const C=b(M,[["render",R]]);export{C as default};
