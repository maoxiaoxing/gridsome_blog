<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title" v-text="$page.post.title" />
          <div class="project-info">

            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span 
                  class="category"
                  v-for="(category, index) in $page.post.categories" 
                  :key="index"
                  v-text="category.title"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.post.published_at"/>
            </div>
          </div>
        </div>

        <div class="content">
          <img :src="GRIDSOME_API_URL + $page.post.thumbnail.url" alt="图片">
        </div>

      </div>

    </div>
  </Layout>
</template>

<page-query>
query ProjectPost ($id: ID!) {
  post: strapiProject (id: $id) {
    id
    title
    thumbnail {
      url
    }
    categories {
      title
    }
    published_at (format: "YYYY")
  }
}
</page-query>

<script>
export default {
  name: 'ProjectPost',
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
