<template>

<div class="page">
  <Header/>

  <div class="page-body">
    <div class="content-wrapper flex flex-col">

      <article class=" max-w-4xl mx-auto bg-white p-8 mt-16 shadow-md">
        <div class="head mb-8">
          <h1 class=" font-bold text-4xl text-center mb-2">{{article.title}}</h1>
          <p class=" font-medium text-xl text-center mb-4">{{article.description}}</p>
          <img class=" w-80 h-60 bg-blue-400 mx-auto mb-2" :src="article.img" :alt="article.alt">
          <p class="text-center" >Post last updated: {{formatDate(article.updatedAt)}}</p>
        </div>

        <nav class="mb-8">
          <ul>
            <li v-for="link of article.toc" :key="link.id"
              :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nuxt-content :document="article" class="mb-8"/>

         <author :author="article.author" />

               <PrevNext :prev="prev" :next="next" />
      </article>



    </div>

  </div>


</div>

</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },

    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    },

    async asyncData({ $content, params}) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt','asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    },
  }
</script>

<style>
  .nuxt-content > h2 {
    @apply font-bold text-3xl
  }
  .nuxt-content > h3 {
    @apply font-bold text-2xl
  }
  .nuxt-content > p{
    @apply mb-6 font-normal text-base
  }

  .icon.icon-link {
  /* content: url('~assets/svg/icon-hashtag.svg'); */
  display: inline-block;
  background: rgb(150, 165, 189);
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
