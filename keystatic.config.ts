// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
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
      path: "content/authors/*",
      slugField: "name",
      schema: {
        name: fields.text({
          label: "Name",
          validation: { isRequired: true },
        }),

        bio: fields.text({
          label: "Bio",
          multiline: true,
        }),
        avatar: fields.image({
          label: "Avatar",
        }),
      },
    }),

    // Categories Collection
    categories: collection({
      label: "Categories",
      path: "content/categories/*",
      slugField: "name",
      schema: {
        name: fields.text({
          label: "name",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
      },
    }),
  },
});
