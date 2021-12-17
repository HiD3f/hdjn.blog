<template>

<div class="page">
  <Header/>

  <div class="page-body ">
    <div class="wrapper max-w-4xl mx-auto p-8">
      <h2 class="uppercase text-xl font-light mb-6"> index</h2>
      <div>
          <!-- <nuxt-content :document="doc" /> -->
      </div>
      <div>
        <h1 class="text-center mb-4 text-3xl font-bold">Blog Posts</h1>
        <ul class="grid grid-cols-3">
          <li v-for="article of articles" :key="article.slug" class="col-span-3 border-2 border-black p-6 mb-8">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <img :src="require('@/assets/img/' + article.img)"/>
              <div>
                <h2>{{ article.title }}</h2>
                <p>by {{ article.author.name }}</p>
                <p>{{ article.description }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>

</template>

<style scoped>

</style>

<script>
export default {
  async asyncData({$content}){
    const doc = await $content("index").fetch();
    return {doc};
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
