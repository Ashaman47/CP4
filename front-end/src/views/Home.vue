<template>
  <div class="home">
    <section class="image-gallery">
      <div class="image" v-for="item in items" :key="item.id">
        <h2>{{item.title}}</h2>
        <img :src="item.path"/>
        <h3>Genre:</h3>
        <p class="description">{{item.genre}}</p>
        <h3>Author:</h3>
        <p class="description">{{item.author}}</p>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
  name: 'Home',
  data() {
  return {
  items: [],
  }
  },
  created() {
  this.getItems();
  },
  methods: {
  async getItems() {
  try {
  let response = await axios.get("/api/items");
  this.items = response.data;
  return true;
  } catch (error) {
  console.log(error);
  }
  },
  }
  }
</script>
<style scoped="">
  .image h2 {
  font-style: italic;
  }

  /* Masonry */
  *,
  *:before,
  *:after {
  box-sizing: inherit;
  }
  h3{
    margin:0;
    padding: 5px;
  }
  .image-gallery {
  column-gap: 1.5em;
  }
  .description{
      border: 2px solid black;
      margin: 0;
      padding: 5px;
  }
  h2{
    font-size: 24px;
  }
  .image {
  margin: 0 0 8px;
  display: inline-block;
  width: 100%;
  padding-bottom: 0;
  font-size: 12px;
  }

  .image img {
  width: 100%;

  }

  /* Masonry on large screens */
  @media only screen and (min-width: 1024px) {
  .image-gallery {
  column-count: 4;
  }
  }

  /* Masonry on medium-sized screens */
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
  column-count: 3;
  }
  }

  /* Masonry on small screens */
  @media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
  column-count: 2;
  }
  }
</style>