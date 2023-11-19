<script>
export default{
    data(){
        return{
            Name: "Martin Feineis",
            content: 'Hi Content',
            links: {},
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg",
            Description: "My experience with Java, Vue.JS, and Nuxt.JS demonstrates my proficiency in developing and deploying web applications, while my knowledge of Terraform and infrastructure as code showcases my ability to automate infrastructure provisioning and management. I am proficient in Cloud Service providers like AWS, Azure, GCP and Linode. Expert skills in Linux, PowerShell, and Python highlight my expertise in scripting and automation, as well as my ability to work with a variety of operating systems and platforms. Overall, I bring a broad range of skills and expertise to any project, with a focus on leveraging technology to streamline development, deployment, and operations processes",
            techstack: {
              Linux: {
                id: "t1",
                title: "Linux",
                bgimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
                desc: "plenty of shell scripting",
                links: [{ target: "https://martinfeineis.gitbook.io/newlib/operating-systems/linux/bash", name : "bash"},
                        { target: "https://martinfeineis.gitbook.io/newlib/operating-systems/macosx", name : "MacOSx"}]
              },
              AWS: {
                id: "t2",
                title: "AWS",
                bgimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                desc: "Everything in cloud",
                links: [{ target: "https://github.com/MartinFeineis", name : "Github"},
                        { target: "https://www.linkedin.com/in/martinfeineis/", name : "LinkedIn"}]
              },
              Terraform: {
                id: "t3",
                title: "Terraform",
                bgimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg",
                desc: "terraforming everything",
                links: [{ target: "https://github.com/MartinFeineis/terraform", name : "TF Playground"}]
              },
              Nuxt: {
                id: "t4",
                title: "Nuxt",
                bgimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original-wordmark.svg",
                desc: "This Website was coded and with Vue and Nuxt.js",
                links: [{ target: "https://page-collection-git-qrcodereader-martinfeineis-projects.vercel.app/", name : "Vercel Playground"}]
              },
              Python: {
                id: "t5",
                title: "Python",
                bgimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
                desc: "The backend of the contact me form is running on Python in AWS Lambda Functions.",
                links: [{ target: "https://martinfeineis.gitbook.io/newlib/languages/python", name : "Tips 'n Tricks"}]
              },
              Ubuntu: {
                id: "t6",
                title: "Git",
                bgimg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
                desc: 'I am using git to store and managed codebases. I worked with GitHub, AWS CodeCommit and Gitlab. I also used CI/CD Pipelines like Github actions, CircleCI and Jenkins.',
                links: [{ target: "https://github.com/MartinFeineis", name : "Github"}]
              }
            }
        }
    },
    methods: {
    changeContent(key) {
      //this.content = newContent; 
      this.content = this.techstack[key].desc;
      this.links = this.techstack[key].links
    },
  },
}
</script>
<style scoped>
    .lang {
        width: 100px;
        height: 100px; 
        padding: 10px 15px 10px 15px;
    }
    img.lang:hover {
        transform: scale(1.5);
        transition: transform 0.2s ease-in-out;
        fill: red;
    }
    .tsbtn {
      width: 100px;
      height: 100px;
    }
</style>
<template>
    <div >
      <button v-for='( tech, key ) in techstack' :key='techstack.id' class="btn" type="button" aria-expanded="false" aria-controls="collapseExample" @click="changeContent(key)">
        <img class="tsbtn lang" :src="tech.bgimg" />
      </button>
    <div v-html="content"></div>
    <div v-for="link in links" :key="techstack.id"> <a v-bind:href="link.target">{{link.name}}</a></div>
    </div>
    <!-- <div v-for='(thing , key, index ) in techstack'>
       {{ thing }} - {{ key }} - {{ index }}
    </div> -->
</template>