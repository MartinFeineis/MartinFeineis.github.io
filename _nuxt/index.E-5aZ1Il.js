import{_ as g,t as s,v as a,L as m,M as b,x as e,y as p,z as h,N as f,O as y,P as w,Q as d,R as v,S as _}from"./entry.KZQIwn05.js";const x={data(){return{Name:"Martin Feineis",content:"Click on any picture to learn more.",links:{},image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg",Description:"My experience with Java, Vue.JS, and Nuxt.JS demonstrates my proficiency in developing and deploying web applications, while my knowledge of Terraform and infrastructure as code showcases my ability to automate infrastructure provisioning and management. I am proficient in Cloud Service providers like AWS, Azure, GCP and Linode. Expert skills in Linux, PowerShell, and Python highlight my expertise in scripting and automation, as well as my ability to work with a variety of operating systems and platforms. Overall, I bring a broad range of skills and expertise to any project, with a focus on leveraging technology to streamline development, deployment, and operations processes",techstack:{Linux:{id:"t1",title:"Linux",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",desc:"The projects that are not mission critical run on my Linux server at home. Like PostgresQL, Plex or sometimes Minikube.",links:[{target:"https://martinfeineis.gitbook.io/newlib/operating-systems/linux/bash",name:"bash"},{target:"https://martinfeineis.gitbook.io/newlib/operating-systems/macosx",name:"MacOSx"}]},AWS:{id:"t2",title:"AWS",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",desc:"I don&#39;t have enough money for my own datacenter, so everything I can&#39;t run on my home server I run in the cloud, like Lambda Functions API Gateways, DynamoDB Tables, VPCs, etc.",links:[{target:"https://github.com/MartinFeineis",name:"Github"},{target:"https://www.linkedin.com/in/martinfeineis/",name:"LinkedIn"}]},Terraform:{id:"t3",title:"Terraform",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg",desc:"I am using Terraform to deploy Infrastructure in AWS. My tf-state is stored in S3 and DynamoDB, and most stacks are comprised of hand written modules, some with cross account deployments from a singel Pipeline.",links:[{target:"https://github.com/MartinFeineis/terraform",name:"TF Playground"}]},Nuxt:{id:"t4",title:"Nuxt",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original-wordmark.svg",desc:"This Website was coded and with Vue and Nuxt.js. My Vercel playground contains some more frontend finger exercise I am dabbling with.",links:[{target:"https://www.rjo.me",name:"Vercel Playground"}]},Python:{id:"t5",title:"Python",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",desc:"The backend of the contact me form is running on Python in AWS Lambda Functions.",links:[{target:"https://martinfeineis.gitbook.io/newlib/languages/python",name:"Tips &#39;n Tricks"}]},Ubuntu:{id:"t6",title:"Git",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",desc:"I am using git to store and managed codebases. I worked with GitHub, AWS CodeCommit and Gitlab. I also used CI/CD Pipelines like Github actions, CircleCI and Jenkins.",links:[{target:"https://github.com/MartinFeineis",name:"Github"}]}}}},methods:{changeContent(r){this.content=this.techstack[r].desc,this.links=this.techstack[r].links}}},k=["onClick"],S=["src"],T=["innerHTML"],M=["href","innerHTML"];function I(r,i,u,c,t,l){return s(),a("div",null,[(s(!0),a(m,null,b(t.techstack,(n,o)=>(s(),a("button",{key:t.techstack.id,class:"btn",type:"button","aria-expanded":"false","aria-controls":"collapseExample",onClick:ge=>l.changeContent(o)},[e("img",{class:"tsbtn lang",src:n.bgimg},null,8,S)],8,k))),128)),e("div",{innerHTML:t.content},null,8,T),(s(!0),a(m,null,b(t.links,n=>(s(),a("div",{key:t.techstack.id},[e("a",{href:n.target,innerHTML:n.name},null,8,M)]))),128))])}const C=g(x,[["render",I],["__scopeId","data-v-d9a79017"]]),D={data(){return{Name:"Martin Feineis",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg",Description:'<p><div> <a href="https://www.linkedin.com/in/martinfeineis/" >LinkedIn</a></p><p><a href="https://www.xing.com/profile/Martin_Feineis/cv">XING</a></p><p>I grew up in Waldbüttelbrunn and attended Deutschhaus Gymnasium in Würzburg, where I earned my Abitur in 2006. Following my military service, I pursued technical physics at Technische Universität Ilmenau, obtaining my Bachelor&#39;s degree in 2011. While working at Siemens in Berlin, I commenced my Masters studies in electrical engineering at FernUniversität Hagen. Upon relocating to the United States in 2014, I transitioned into software engineering in Philadelphia, leaving my Master&#39;s degree unfinished."</p></div>',pictures:[{id:"1",src:"https://ghoulmanorpublic.s3.amazonaws.com/picture1.jpeg",isActive:!0,altText:"Celebrating Open Source Techonolgy for Enterprise"},{id:"2",src:"https://ghoulmanorpublic.s3.amazonaws.com/picture2.jpeg",isActive:!1,altText:"Bewerbungsfoto"},{id:"3",src:"https://ghoulmanorpublic.s3.amazonaws.com/picture3.jpeg",isActive:!1,altText:"Professional picture from company conference"}]}}},P={class:"row g-0"},E={class:"col-md-4"},A={id:"carouselExample",class:"carousel slide"},$={class:"carousel-inner"},j=["src","alt"],L=f('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),W={class:"col-md-8"},F=["innerHTML"];function N(r,i,u,c,t,l){const n=C;return s(),a("div",P,[e("div",E,[e("div",A,[e("div",$,[(s(!0),a(m,null,b(t.pictures,o=>(s(),a("div",{key:o.id,class:y(["carousel-item",{active:o.isActive}])},[e("img",{src:o.src,class:"img-thumbnail d-block w-100",alt:o.altText},null,8,j)],2))),128))]),L])]),e("div",W,[e("h1",null,p(t.Name),1),e("p",{innerHTML:t.Description},null,8,F),h(n)])])}const R=g(D,[["render",N]]),B={},z=e("a",{href:"https://github.com/martinfeineis/github-readme-stats"},[e("img",{height:"200",align:"center",src:"https://github-readme-stats.vercel.app/api?username=martinfeineis"})],-1),H=e("a",{href:"https://github.com/martinfeineis/convoychat"},[e("img",{height:"200",align:"center",src:"https://github-readme-stats.vercel.app/api/top-langs?username=martinfeineis&layout=compact&langs_count=8&card_width=320"})],-1),O=[z,H];function V(r,i){return s(),a("div",null,O)}const G=g(B,[["render",V]]),U={data(){return{showTo:!1,showFrom:!0,showMsg:!0,sender:"",recipient:"ich",message:"",sentMsgId:0}},props:{to:{type:String,default:"personalWebsite"},from:{type:String,default:"anonymous"},readId:{type:Number}},methods:{async uploadMessage(){var r={Sender:this.sender,Recipient:this.recipient,Message:this.message},i="https://api.404founders.com/send";const c=await(await fetch(i,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)})).json();this.sentMsgId=c.MsgId,console.log(this.msgIds)}}},J=e("p",null,[e("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"}," Contact Me ")],-1),Q={class:"collapse",id:"collapseExample"},q={class:"card card-body"},X={class:"input-group mb-3"},Y=e("span",{class:"input-group-text",id:"basic-addon1"},"From: ",-1),K={class:"input-group mb-3"},Z=e("span",{class:"input-group-text",id:"basic-addon1"},"To: ",-1),ee={class:"input-group"},te=e("span",{class:"input-group-text"},"Message ",-1),ne=e("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function ie(r,i,u,c,t,l){return s(),a(m,null,[J,e("div",Q,[e("div",q,[e("form",{onSubmit:i[3]||(i[3]=w((...n)=>l.uploadMessage&&l.uploadMessage(...n),["prevent"]))},[d(e("div",X,[Y,d(e("input",{"onUpdate:modelValue":i[0]||(i[0]=n=>t.sender=n),type:"text",class:"form-control",placeholder:"Sender","aria-label":"Sender","aria-describedby":"basic-addon1"},null,512),[[_,t.sender]])],512),[[v,t.showFrom]]),d(e("div",K,[Z,d(e("input",{"onUpdate:modelValue":i[1]||(i[1]=n=>t.recipient=n),type:"text",class:"form-control",placeholder:"Recipient","aria-label":"Recipient","aria-describedby":"basic-addon1"},null,512),[[_,t.recipient]])],512),[[v,t.showTo]]),d(e("div",ee,[te,d(e("textarea",{"onUpdate:modelValue":i[2]||(i[2]=n=>t.message=n),class:"form-control","aria-label":"With textarea"},`
      `,512),[[_,t.message]])],512),[[v,t.showMsg]]),ne],32),d(e("div",null,[e("p",null,"Your message Id is: "+p(t.sentMsgId),1)],512),[[v,t.sentMsgId!=0]])])])],64)}const se=g(U,[["render",ie]]),ae={data(){return{jobs:[{id:"4",Company:"Cognizant",selectStr:"#Cognizant",Positions:[{id:"43",Title:"Technical Principal",Responsibilities:"Managing technial understanding and deliverable between client and engineering team. Ensuring contractual obligations are fulfilled within the agreed upon time and quality. Creating personalized training manuals for engineering teams for team specific cases. Training junior Technical Principals in client management. Building out CCoE based on AWS Well architected Framework, decreased cloud spending, increased and visualized security posture of AWS Accounts, Architecture and Software.",StartDate:"October 2023",EndDate:"present"},{id:"42",Title:"Software Engineering Manager",Responsibilities:"Creating Value Stream Maps to identify waste and decrease development time by up to 20%. Train Engineering Teams on best cloud practices and architectural desicion making to decrease cloud spending , increase security posture and following general and specific best practices.",StartDate:"September 2022",EndDate:"November 2022"},{id:"41",Title:"Lead Consultant",Responsibilities:"Wrote DO178C complaint Terraform IaC in AWS to for remote Pilots to communicate with unmanned aerial vehicles. Trained Engineering Team on Terraform industry best practices and CI/CD Implementations. Developed and implemented one-click IaC solution to accelerate cloud adoption by 50%. Wrote HIPPA compliant serverless Cloudformation IaC and business logic in Python for Healthcare customers to solve crossstate plan coverage.",StartDate:"January 2021",EndDate:"September 2022"}]},{id:"3",Company:"Berkadia",selectStr:"#Berkadia",Positions:[{id:"31",Title:"SRE",Responsibilities:"Build Serverless Application for Mortgage Brokers to submit Property Data for commercial real estate developments. Accelerated deal-closing time by 300%",StartDate:"May 2020",EndDate:"December 2020"},{id:"32",Title:"DevOps Engineer",Responsibilities:"Supporting, driving and reviewing Change Management and Implementation. Resolving Deployment issues in production on Windows Servers with Powershell.",StartDate:"June 2018",EndDate:"May 2020"}]},{id:"2",Company:"Cloudmine",selectStr:"#Cloudmine",Positions:[{id:"21",Title:"SRE",Responsibilities:"Maintained and improved HIPAA compliant AWS Software with focus on high availability, and self-healing rapid failover processes. Increased resiliency and overall operating model",StartDate:"April 2017",EndDate:"April 2018"}]},{id:"1",Company:"PointIO",selectStr:"#PointIO",Positions:[{id:"11",Title:"DevOps Engineer",Responsibilities:"Build 1-click CI/CD Pipeline allowing globally distributed Engineers to deploy changes reliable into Development environments including rollback strategies. Decreasing deployment time from 24hours to 20min.",StartDate:"Deember 2014",EndDate:"March 2017"}]}]}}},oe=["data-bs-target"],re=["id"],le={class:"card card-body"};function ce(r,i,u,c,t,l){return s(!0),a(m,null,b(t.jobs,n=>(s(),a("div",{key:t.jobs.id},[e("p",null,[e("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":n.selectStr,"aria-expanded":"false","aria-controls":"collapseExample"},p(n.Company),9,oe)]),e("div",{class:"collapse",id:n.Company},[(s(!0),a(m,null,b(n.Positions,o=>(s(),a("div",{key:o.id},[e("div",le,[e("p",null,[e("h5",null,p(o.Title),1),e("p",null,[e("small",null,"Started: "+p(o.StartDate)+" Finished: "+p(o.EndDate),1)]),e("p",null,p(o.Responsibilities),1)])])]))),128))],8,re)]))),128)}const de=g(ae,[["render",ce]]),pe={},me=e("head",null,[e("meta",{charset:"UTF-8"}),e("link",{rel:"icon",href:"/favicon.ico"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("title",null,"Resume Martin Feineis")],-1);function ue(r,i){const u=R,c=G,t=se,l=de;return s(),a(m,null,[me,e("div",null,[h(u),h(c),h(t,{"to:martinfeineis":""}),h(l)])],64)}const be=g(pe,[["render",ue]]);export{be as default};
