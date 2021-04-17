<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
query {
  projects: allStrapiProject (order: ASC) {
    edges {
      node {
        id
        title
        path
        published_at
        thumbnail {
          url
        }
        categories {
          title
        }
      }
    }
  },
  journals: allStrapiJournal {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
