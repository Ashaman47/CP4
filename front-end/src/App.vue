<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/books.jpeg" width="80" height ="80">
      </div>
    </router-link>
    <div class="title">
      <h1>Library</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/admin">Admin</router-link>
    <p></p>
    <router-link to="/reviews">Reviews</router-link>
  </div>
  <div>
    <a class="git-link" href="https://github.com/BYU-CS-260-Winter-2020/lab-4-museum-of-ordinary-objects-Ashaman47.git">Find me on <em>Github</em></a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}
.git-link {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #e3e3e3;
  color: #000;
  text-align: center;
  }
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #5BDEFF;
  color: #1C454F;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 20px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
