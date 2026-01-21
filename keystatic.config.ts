import { config, fields, collection, singleton } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default config({
    storage: import.meta.env.PROD
        ? {
            kind: 'github',
            repo: {
                owner: import.meta.env.PUBLIC_REPO_OWNER || 'longngo',
                name: import.meta.env.PUBLIC_REPO_NAME || 'portfolio-longngo',
            },
        }
        : {
            kind: 'local',
        },
    collections: {
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { contentField: 'content' },
            columns: ['title', 'category', 'coverImagePosition'],
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                category: fields.text({ label: 'Category' }),
                coverImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/projects',
                    publicPath: '/images/projects/',
                }),
                coverImagePosition: fields.select({
                    label: 'Cover Image Focus',
                    description: 'Adjust the focal point of the cover image.',
                    options: [
                        { label: 'Center', value: 'center' },
                        { label: 'Top', value: 'top' },
                        { label: 'Bottom', value: 'bottom' },
                        { label: 'Left', value: 'left' },
                        { label: 'Right', value: 'right' },
                    ],
                    defaultValue: 'center',
                }),
                contentAlignment: fields.select({
                    label: 'Content Alignment',
                    description: 'Choose how the content is aligned.',
                    options: [
                        { label: 'Center (Default)', value: 'center' },
                        { label: 'Left Aligned', value: 'left' },
                        { label: 'Wide Width', value: 'wide' },
                    ],
                    defaultValue: 'center',
                }),
                content: fields.mdx({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'public/images/projects',
                            publicPath: '/images/projects/',
                        }
                    },
                    components: {
                        VideoPlayer: block({
                            label: 'Video',
                            schema: {
                                src: fields.file({
                                    label: 'Video File',
                                    directory: 'public/videos/projects',
                                    publicPath: '/videos/projects/',
                                }),
                                caption: fields.text({ label: 'Caption' }),
                                autoplay: fields.checkbox({ label: 'Autoplay', defaultValue: true }),
                                loop: fields.checkbox({ label: 'Loop', defaultValue: true }),
                                muted: fields.checkbox({ label: 'Muted', defaultValue: true }),
                                controls: fields.checkbox({ label: 'Show Controls', defaultValue: false }),
                            },
                        }),
                    }
                }),
            },
        }),
    },
    singletons: {
        homepage: singleton({
            label: 'Homepage / Project Ordering',
            path: 'src/content/homepage/settings',
            schema: {
                featuredProjects: fields.array(
                    fields.relationship({
                        label: 'Project',
                        collection: 'projects',
                    }),
                    {
                        label: 'Ordered Projects',
                        itemLabel: (props) => props.value || 'Select a project',
                        description: 'Drag and drop to reorder projects. Projects at the top appear first.',
                    }
                ),
            },
        }),
    },
});
