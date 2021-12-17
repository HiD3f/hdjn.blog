---
title: My third Blog Post
description: Learning how to use @nuxt/content to create a blog
img: image.png
alt: my third blog post
author:
  name: Benjamin
  bio: All about Benjamin
  image: https://images.unsplash.com/.....
---

## This is a heading

This is some more info

<div class="p-4 mb-4 text-white bg-blue-500">
  This is HTML inside markdown that has a class of note
</div>

### This is a sub heading

This is some more info

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>

### This is another sub heading

This is some more info

<pre><code class="language-css">p { color: red }</code></pre>

## This is another heading

This is some more info



<code class="language-sass">
html {
  @apply h-screen w-full;
}
body {
  @apply bg-yellow-600 bg-opacity-25 h-full w-full overflow-y-auto;
}
#__layout,#__nuxt, .page  {
     @apply h-full
}
.page  {
    @apply h-full flex flex-col
}
.page-body {
  @apply flex-1
}

</code>

https://www.markdownguide.org/basic-syntax
