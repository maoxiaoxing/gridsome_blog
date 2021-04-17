// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Amanisky Blog',
  plugins: [
    // 将 strapi 平台的数据预取到 Gridsome 应用中
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        // typeName: 'Strapi',
        contentTypes: ['project', 'category', 'journal', 'post'],
        // singleTypes: ['home-banner']
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'admin@email.com',
        //   password: '123456'
        // }
      }
    }
  ],
  templates: {
    StrapiProject: [
      {
        path: '/project/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiJournal: [
      {
        path: '/journal/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
}
