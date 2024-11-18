// keystatic.config.ts
import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "public/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        banner: fields.image({
          label: "Banner",
          publicPath: "/content/posts/",
        }),
        date: fields.date({
          label: "Published Date",
          validation: { isRequired: true },
          defaultValue: new Date().toISOString(),
        }),
        content: fields.markdoc({ label: "Content" }),
        featured: fields.checkbox({
          label: "Featured",
          description: "Mark this post as featured.",
          defaultValue: false,
        }),
        author: fields.relationship({
          label: "Author",
          collection: "authors",
          validation: { isRequired: true },
        }),
        category: fields.relationship({
          label: "Category",
          collection: "categories",
          validation: { isRequired: true },
        }),
        excerpt: fields.text({
          label: "Excerpt",
          multiline: true,
        }),
        tags: fields.array(
          fields.text({
            label: "Tag",
            validation: { isRequired: false },
          }),
          {
            label: "Tags",
            itemLabel: (props) => props.value,
          },
        ),
      },
    }),

    // Authors Collection
    authors: collection({
      label: "Authors",
      path: "public/content/authors/*",
      slugField: "name",
      format: { contentField: "content" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        content: fields.markdoc({
          label: "Bio",
        }),
        avatar: fields.image({
          label: "Avatar",
          publicPath: "/content/authors/",
        }),
      },
    }),

    // Categories Collection
    categories: collection({
      label: "Categories",
      path: "public/content/categories/*",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        content: fields.text({
          label: "Description",
          multiline: true,
        }),
      },
    }),

    // Projects Case Studies Collection
    caseStudies: collection({
      label: "Case Studies",
      path: "public/content/case-studies/*",
      slugField: "title",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        description: fields.text({
          label: "Short Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        client: fields.text({
          label: "Client",
          validation: { isRequired: true },
        }),
        client_logo: fields.image({
          label: "Client Logo",
          publicPath: "/content/case-studies/",
          validation: { isRequired: false },
        }),
        date: fields.date({
          label: "Date",
          validation: { isRequired: true },
        }),
        featuredImage: fields.image({
          label: "Featured Image",
          publicPath: "/content/case-studies/",
          validation: { isRequired: false },
        }),
        content: fields.markdoc({
          label: "Content",
        }),
        tags: fields.array(
          fields.text({
            label: "Tag",
          }),
          {
            label: "Tags",
            itemLabel: (props) => props.value,
          },
        ),
        projectLink: fields.url({
          label: "Project Link",
          validation: { isRequired: false },
        }),
        outcome: fields.text({
          label: "Outcome/Impact",
          multiline: true,
          validation: { isRequired: false },
        }),
      },
    }),

    caseStudiesV2: collection({
      label: "Case Studies V2",
      slugField: "title",
      path: "content/case-studies/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        client: fields.text({ label: "Client" }),
        date: fields.date({ label: "Date" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        executiveSummary: fields.text({
          label: "Executive Summary",
          multiline: true,
        }),
        background: fields.text({ label: "Background", multiline: true }),
        solution: fields.markdoc({
          label: "Solution",
        }),
        results: fields.array(
          fields.object({
            title: fields.text({ label: "Result Title" }),
            description: fields.text({ label: "Result Description" }),
          }),
          { label: "Results" },
        ),
        outcome: fields.text({ label: "Outcome", multiline: true }),
        testimonial: fields.object({
          quote: fields.text({ label: "Quote", multiline: true }),
          author: fields.text({ label: "Author" }),
        }),
        toolsUsed: fields.array(
          fields.object({
            name: fields.text({ label: "Tool Name" }),
            description: fields.text({ label: "Tool Description" }),
          }),
          { label: "Tools Used" },
        ),
        aboutClient: fields.text({
          label: "About the Client",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});
