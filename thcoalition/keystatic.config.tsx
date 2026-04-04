import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        pubDate: fields.date({
          label: 'Publication Date',
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: 'Last Updated',
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'THC Staff',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Investigation', value: 'investigation' },
            { label: 'News', value: 'news' },
            { label: 'Press Release', value: 'press-release' },
            { label: 'Analysis', value: 'analysis' },
            { label: 'Data Release', value: 'data-release' },
            { label: 'Community', value: 'community' },
          ],
          defaultValue: 'news',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value,
          }
        ),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        draft: fields.checkbox({
          label: 'Draft',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
