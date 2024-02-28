import{_ as u,t,v as i,L as c,M as m,x as e,y as r,z as d,N as b,O as v,i as _}from"./entry.wgXschNO.js";const f={data(){return{Name:"Martin Feineis",content:"Click on any picture to learn more.",links:{},image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg",Description:"My experience with Java, Vue.JS, and Nuxt.JS demonstrates my proficiency in developing and deploying web applications, while my knowledge of Terraform and infrastructure as code showcases my ability to automate infrastructure provisioning and management. I am proficient in Cloud Service providers like AWS, Azure, GCP and Linode. Expert skills in Linux, PowerShell, and Python highlight my expertise in scripting and automation, as well as my ability to work with a variety of operating systems and platforms. Overall, I bring a broad range of skills and expertise to any project, with a focus on leveraging technology to streamline development, deployment, and operations processes",techstack:{Linux:{id:"t1",title:"Linux",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",desc:"The projects that are not mission critical run on my Linux server at home. Like PostgresQL, Plex or sometimes Minikube.",links:[{target:"https://martinfeineis.gitbook.io/newlib/operating-systems/linux/bash",name:"bash"},{target:"https://martinfeineis.gitbook.io/newlib/operating-systems/macosx",name:"MacOSx"}]},AWS:{id:"t2",title:"AWS",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",desc:"I don&#39;t have enough money for my own datacenter, so everything I can&#39;t run on my home server I run in the cloud, like Lambda Functions API Gateways, DynamoDB Tables, VPCs, etc.",links:[{target:"https://github.com/MartinFeineis",name:"Github"},{target:"https://www.linkedin.com/in/martinfeineis/",name:"LinkedIn"}]},Terraform:{id:"t3",title:"Terraform",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg",desc:"I am using Terraform to deploy Infrastructure in AWS. My tf-state is stored in S3 and DynamoDB, and most stacks are comprised of hand written modules, some with cross account deployments from a singel Pipeline.",links:[{target:"https://github.com/MartinFeineis/terraform",name:"TF Playground"}]},Nuxt:{id:"t4",title:"Nuxt",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original-wordmark.svg",desc:"This Website was coded and with Vue and Nuxt.js. My Vercel playground contains some more frontend exercise I am dabbling with.",links:[{target:"https://www.rjo.me",name:"Vercel Playground"}]},Python:{id:"t5",title:"Python",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",desc:"The backend of the contact me form is running on Python in AWS Lambda Functions.",links:[{target:"https://martinfeineis.gitbook.io/newlib/languages/python",name:"Tips &#39;n Tricks"}]},Ubuntu:{id:"t6",title:"Git",bgimg:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",desc:"I am using git to store and managed codebases. I worked with GitHub, AWS CodeCommit and Gitlab. I also used CI/CD Pipelines like Github actions, CircleCI and Jenkins.",links:[{target:"https://github.com/MartinFeineis",name:"Github"}]}}}},methods:{changeContent(o){this.content=this.techstack[o].desc,this.links=this.techstack[o].links}}},y=["onClick"],w=["src"],k=["innerHTML"],x=["href","innerHTML"];function S(o,p,g,h,n,l){return t(),i("div",null,[(t(!0),i(c,null,m(n.techstack,(a,s)=>(t(),i("button",{key:n.techstack.id,class:"btn",type:"button","aria-expanded":"false","aria-controls":"collapseExample",onClick:Y=>l.changeContent(s)},[e("img",{class:"tsbtn lang",src:a.bgimg},null,8,w)],8,y))),128)),e("div",{innerHTML:n.content},null,8,k),(t(!0),i(c,null,m(n.links,a=>(t(),i("div",{key:n.techstack.id},[e("a",{href:a.target,innerHTML:a.name},null,8,x)]))),128))])}const C=u(f,[["render",S],["__scopeId","data-v-c0bff69e"]]),T={data(){return{Name:"Martin Feineis",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg",Description:'<p><div> <a href="https://www.linkedin.com/in/martinfeineis/" >LinkedIn</a></p><p><a href="https://www.xing.com/profile/Martin_Feineis/cv">XING</a></p><p>I grew up in Waldbüttelbrunn and attended Deutschhaus Gymnasium in Würzburg, where I earned my Abitur in 2006. Following my military service, I pursued technical physics at Technische Universität Ilmenau, obtaining my Bachelor&#39;s degree in 2011. While working at Siemens in Berlin, I commenced my Masters studies in electrical engineering at FernUniversität Hagen. Upon relocating to the United States in 2014, I transitioned into software engineering in Philadelphia, leaving my Master&#39;s degree unfinished."</p></div>',pictures:[{id:"1",src:"https://ghoulmanorpublic.s3.amazonaws.com/picture1.jpeg",isActive:!0,altText:"Celebrating Open Source Techonolgy for Enterprise"},{id:"2",src:"https://ghoulmanorpublic.s3.amazonaws.com/picture2.jpeg",isActive:!1,altText:"Bewerbungsfoto"},{id:"3",src:"https://ghoulmanorpublic.s3.amazonaws.com/picture3.jpeg",isActive:!1,altText:"Professional picture from company conference"}]}}},D={class:"row g-0"},I={class:"col-md-4"},P={id:"carouselExample",class:"carousel slide"},M={class:"carousel-inner"},A=["src","alt"],E=b('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),$={class:"col-md-8"},L=["innerHTML"];function j(o,p,g,h,n,l){const a=C;return t(),i("div",D,[e("div",I,[e("div",P,[e("div",M,[(t(!0),i(c,null,m(n.pictures,s=>(t(),i("div",{key:s.id,class:v(["carousel-item",{active:s.isActive}])},[e("img",{src:s.src,class:"img-thumbnail d-block w-100",alt:s.altText},null,8,A)],2))),128))]),E])]),e("div",$,[e("h1",null,r(n.Name),1),e("p",{innerHTML:n.Description},null,8,L),d(a)])])}const W=u(T,[["render",j]]),F={},B=e("a",{href:"https://github.com/martinfeineis/github-readme-stats"},[e("img",{height:"200",align:"center",src:"https://github-readme-stats.vercel.app/api?username=martinfeineis"})],-1),N=e("a",{href:"https://github.com/martinfeineis/convoychat"},[e("img",{height:"200",align:"center",src:"https://github-readme-stats.vercel.app/api/top-langs?username=martinfeineis&layout=compact&langs_count=8&card_width=320"})],-1),z=[B,N];function H(o,p){return t(),i("div",null,z)}const R=u(F,[["render",H]]),G={data(){return{jobs:[{id:"4",Company:"Cognizant",selectStr:"#Cognizant",Positions:[{id:"43",Title:"Technical Principal",Responsibilities:"Managing technial understanding and deliverable between client and engineering team. Ensuring contractual obligations are fulfilled within the agreed upon time and quality. Creating personalized training manuals for engineering teams for team specific cases. Training junior Technical Principals in client management. Building out CCoE based on AWS Well architected Framework, decreased cloud spending, increased and visualized security posture of AWS Accounts, Architecture and Software.",StartDate:"October 2023",EndDate:"present"},{id:"42",Title:"Software Engineering Manager",Responsibilities:"Creating Value Stream Maps to identify waste and decrease development time by up to 20%. Train Engineering Teams on best cloud practices and architectural desicion making to decrease cloud spending , increase security posture and following general and specific best practices.",StartDate:"September 2022",EndDate:"November 2022"},{id:"41",Title:"Lead Consultant",Responsibilities:"Wrote DO178C complaint Terraform IaC in AWS to for remote Pilots to communicate with unmanned aerial vehicles. Trained Engineering Team on Terraform industry best practices and CI/CD Implementations. Developed and implemented one-click IaC solution to accelerate cloud adoption by 50%. Wrote HIPPA compliant serverless Cloudformation IaC and business logic in Python for Healthcare customers to solve crossstate plan coverage.",StartDate:"January 2021",EndDate:"September 2022"}]},{id:"3",Company:"Berkadia",selectStr:"#Berkadia",Positions:[{id:"31",Title:"SRE",Responsibilities:"Build Serverless Application for Mortgage Brokers to submit Property Data for commercial real estate developments. Accelerated deal-closing time by 300%",StartDate:"May 2020",EndDate:"December 2020"},{id:"32",Title:"DevOps Engineer",Responsibilities:"Supporting, driving and reviewing Change Management and Implementation. Resolving Deployment issues in production on Windows Servers with Powershell.",StartDate:"June 2018",EndDate:"May 2020"}]},{id:"2",Company:"Cloudmine",selectStr:"#Cloudmine",Positions:[{id:"21",Title:"SRE",Responsibilities:"Maintained and improved HIPAA compliant AWS Software with focus on high availability, and self-healing rapid failover processes. Increased resiliency and overall operating model",StartDate:"April 2017",EndDate:"April 2018"}]},{id:"1",Company:"PointIO",selectStr:"#PointIO",Positions:[{id:"11",Title:"DevOps Engineer",Responsibilities:"Build 1-click CI/CD Pipeline allowing globally distributed Engineers to deploy changes reliable into Development environments including rollback strategies. Decreasing deployment time from 24hours to 20min.",StartDate:"Deember 2014",EndDate:"March 2017"}]}]}}},O=["data-bs-target"],V=["id"],J={class:"card card-body"};function U(o,p,g,h,n,l){return t(!0),i(c,null,m(n.jobs,a=>(t(),i("div",{key:n.jobs.id},[e("p",null,[e("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":a.selectStr,"aria-expanded":"false","aria-controls":"collapseExample"},r(a.Company),9,O)]),e("div",{class:"collapse",id:a.Company},[(t(!0),i(c,null,m(a.Positions,s=>(t(),i("div",{key:s.id},[e("div",J,[e("p",null,[e("h5",null,r(s.Title),1),e("p",null,[e("small",null,"Started: "+r(s.StartDate)+" Finished: "+r(s.EndDate),1)]),e("p",null,r(s.Responsibilities),1)])])]))),128))],8,V)]))),128)}const q=u(G,[["render",U]]),Q={},X=e("head",null,[e("meta",{charset:"UTF-8"}),e("link",{rel:"icon",href:"/favicon.ico"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("title",null,"Resume Martin Feineis")],-1);function K(o,p){const g=W,h=R,n=_("Sendmsg"),l=q;return t(),i(c,null,[X,e("div",null,[d(g),d(h),d(n,{"to:martinfeineis":""}),d(l)])],64)}const ee=u(Q,[["render",K]]);export{ee as default};
