export default {
  name: 'portfolioImage',
  title: 'Portfolio Image',
  type: 'document',
  fields: [
    {
      name: 'imageUrl',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // This helps with cropping in Sanity
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Select a category for the image.',
      options: {
        list: [
          { title: 'Portraits', value: 'portraits' },
          { title: 'Landscapes', value: 'landscapes' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}