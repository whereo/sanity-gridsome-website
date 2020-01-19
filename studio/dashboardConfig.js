export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e2478fca59a242b31814266',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-website-studio',
                  apiId: '8f9f03df-ccaf-4076-9a4a-f16a689ea809'
                },
                {
                  buildHookId: '5e2478fc2f1507893f6a9970',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-website',
                  apiId: '97e92d19-dfd4-497f-8ccd-84cbb6d07f04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/whereo/sanity-gridsome-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-website.netlify.com', category: 'apps'}
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
