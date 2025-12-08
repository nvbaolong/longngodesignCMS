import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'cloud',
    },
    collections: {
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { contentField: 'content' },
            columns: ['title', 'isFeatured', 'category'],
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                isFeatured: fields.checkbox({
                    label: 'Highlight on Home Page',
                    description: 'If checked, this project will be prioritized on the home page (Max 8 projects shown).'
                }),
                description: fields.text({ label: 'Description', multiline: true }),
                category: fields.text({ label: 'Category' }),
                coverImage: fields.cloudImage({
                    label: 'Cover Image',
                }),
                content: fields.mdx({
                    label: 'Content',
                }),
            },
        }),
    },
});
