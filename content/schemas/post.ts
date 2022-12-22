export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Content',
    },
  ],
}
