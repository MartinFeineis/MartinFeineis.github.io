<script>

export default{
    data(){
        return{
            Name: "Martin Feineis",
            Description: "My experience with Golang, Vue.JS, and Nuxt.JS demonstrates my proficiency in developing and deploying web applications, while my knowledge of Terraform and infrastructure as code showcases my ability to automate infrastructure provisioning and management. I am proficient in Cloud Service providers like AWS, Azure, GCP and Linode. Expert skills in Linux, PowerShell, and Python highlight my expertise in scripting and automation, as well as my ability to work with a variety of operating systems and platforms. Overall, I bring a broad range of skills and expertise to any project, with a focus on leveraging technology to streamline development, deployment, and operations processes",            pictures: [
              {
              id: "1",
              src: "https://www.404founders.com/picture1.jpeg",
              isActive: true,
              altText: "Celebrating Open Source Techonolgy for Enterprise"
              },
              {
              id: "2",
              src: "https://www.404founders.com/picture2.jpeg",
              isActive: false,
              altText: "Bewerbungsfoto"
              },
              {
              id: "3",
              src: "https://www.404founders.com/picture3.jpeg",
              isActive: false,
              altText: "Professional picture from company conference"
              }
            ]
        }
    }
}
</script>
<template>
  <div class="row g-0">
    <div class="col-md-4">
    <div id="carouselExample" class="carousel slide ">
  <div class="carousel-inner">
    <div v-for="picture in pictures" :key='picture.id' class="carousel-item" :class="{active : picture.isActive}">
      <img :src="picture.src" class="img-thumbnail d-block w-100" :alt="picture.altText">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
  <div class="col-md-8">
    <h1>{{ Name }}</h1>
    <p>{{ Description }}</p>
  </div>
</div>
</template>
