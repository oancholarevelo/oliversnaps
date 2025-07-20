// sanity/schemas/portfolioImage.js
export default {
  name: 'portfolioImage',
  title: 'Portfolio Image',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'captureDate', title: 'Capture Date', type: 'date' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Portrait', value: 'portrait' },
          { title: 'Landscape', value: 'landscape' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
  ],
};