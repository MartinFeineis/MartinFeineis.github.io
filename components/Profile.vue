<script>

export default{
    data(){
        return{
            Name: "Martin Feineis",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg",
            Description: '<p><div> <a href="https://www.linkedin.com/in/martinfeineis/" >LinkedIn</a></p><p><a href="https://www.xing.com/profile/Martin_Feineis/cv">XING</a></p>I was raised in Waldbüttelbrunn and visited the Deutschhaus Gymnasium in Würzburg where I made my Abitur in 2006. After my military service I studied technical physics at the TU Ilmenau and got my Bachelors degree in 2011. While working at Siemens in Berlin I started my Masters at the FU Hagen in electrical engineering. Since I moved to the United States in 2014 I did not finish my Masters degress and started working in software engineering in Philadelphia. <p></p></div>',
            pictures: [
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
<style></style>
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
    <p v-html="Description"></p>
    <TechIcons />
  </div>
</div>
</template>
