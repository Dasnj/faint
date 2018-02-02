<template>
  <div id="app">
    <header class="header">
      <section class="container">
        <a class="header-title" href="/index"><h1>Faint</h1></a>
        <ul class="header-list float-right">
          <li class="float-left"><router-link to="/doument">Document</router-link></li>
          <li class="float-left"><router-link to="/doument">Github</router-link></li>
        </ul>
      </section>
    </header>
    <main class="mainly">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .header {
    max-width: 100%;
    width: 100%;
    border-bottom: .1rem solid #d1d1d1;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #f4f5f6;
    z-index: 1;
    .header-title h1 {
      display: inline;
      font-size: 2.6rem;
      line-height: 5rem;
      padding: 0 1rem;
      text-decoration: none;
    }
    .header-list {
      margin-bottom: 0;
      margin-right: 5rem;
      list-style: none;
      text-align: right;
      li {
        margin-left: 2.5rem;
        margin-bottom: 0;
        position: relative;
      }
    }
  }
  .mainly {
    padding-top: 10rem;
  }
</style>
