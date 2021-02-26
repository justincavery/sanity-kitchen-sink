export default {
  widgets: [
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
                  buildHookId: '60390d01556e280e0e4a4a83',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ia16sf1r',
                  apiId: '8eadf279-f17f-46c3-883d-566ce1e1d9bb'
                },
                {
                  buildHookId: '60390d01105c8aff820caefe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-su8edhry',
                  apiId: '45dc5d77-f329-4a39-8d6d-876a608bbd22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justincavery/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-su8edhry.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
