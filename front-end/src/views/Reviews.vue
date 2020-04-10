<template>
  <div class="home">
    <section class="image-gallery">
      <div class="image" v-for="item in items" :key="item.id">
        <h2>{{item.title}}</h2>
        <div class="Reviews" v-for="review in item.reviews" :key="review.id">
          <p>-{{review}}</p>
        </div>
      </div>
        <div class="form">
          <h1>Add A Review</h1>
        <input v-model="findTitle" placeholder="Search">
          <div class="suggestions" v-if="suggestions.length > 0">
            <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">
              {{s.title}}
            </div>
          </div>
          <div v-if="findItem">
            <p>{{findItem.title}}</p>
          </div>
      <textarea v-model="reviews" rows="4" columns="500" placeholder="Write a review"></textarea>
      <button @click="editItem(findItem)">Add Review</button>
    </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
  name: 'Reviews',
  data() {
  return {
  items: [],
  reviews: "",
  findTitle: "",
  findItem: null,
  }
  },
  computed: {
  suggestions() {
  let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
  return items.sort((a, b) => a.title > b.title);
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
  selectItem(item) {
  this.findTitle = "";
  this.findItem = item;
  },
  async editItem(item) {
  try {
  await axios.put("/api/items/" + item._id, {
  title: item.title,
  genre: item.genre,
  author: item.author,
  reviews: this.reviews
  });
  this.getItems();
  return true;
  } catch (error) {
  console.log(error);
  }
  },
  }
  }
</script>
<style scoped="">
  .Reviews{
  border-top: 2px solid black;
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

  /* Suggestions */
  .suggestions {
  width: 200px;
  border: 1px solid #ccc;
  }

  .suggestion {
  min-height: 20px;
  }

  .suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
  }
  /* Form */
  input,
  textarea,
  select,
  button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  }

  textarea{
    width: 100%;
  }
  .form {
  margin-right: 50px;
  }
</style>