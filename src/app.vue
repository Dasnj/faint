<template>
  <div id="app">
    <header>
      <section class="container">

      </section>
    </header>

    <nav class="navigation">
    <section class="container">
      <a class="navigation-title" href="">
        <span class="title">Faint</span>
      </a>
      <ul class="navigation-list float-right">
        <li class="navigation-item">
          <a class="navigation-link">Docs</a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link">Support</a>
        </li>
      </ul>
    </section>
  </nav>

    <div class="container">
      <section class="cutik-core">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
