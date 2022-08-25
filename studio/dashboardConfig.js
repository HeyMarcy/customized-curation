export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '630776c2074b260058b2d1a0',
                  title: 'Sanity Studio',
                  name: 'customized-curation-studio',
                  apiId: '9f21428a-e2d8-4060-b771-83a7c58b31e9'
                },
                {
                  buildHookId: '630776c2bd502d006601b211',
                  title: 'Portfolio Website',
                  name: 'customized-curation',
                  apiId: '21d5ef63-f8ec-4365-9a9e-1f2b981d5755'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HeyMarcy/customized-curation',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://customized-curation.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
