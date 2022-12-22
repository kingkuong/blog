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
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'tag', title: 'Tag', type: 'reference', to: [{type: 'tag'}], readOnly: true},
          ],
          preview: {
            select: {
              title: 'tag.title',
            },
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'note',
      type: 'text',
      title: 'Note',
    },
  ],
}
