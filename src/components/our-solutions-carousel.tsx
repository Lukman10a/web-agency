import React from "react";

interface GenericWorkItemProps<T> {
  header: string;
  title: string;
  description: string;
  tags: string[];
  images: T[]; // Generic type for images to allow different formats if necessary
  renderImage: (src: T) => JSX.Element; // A function to render the image
  currentSlide?: number; // Current slide index to display
}

const GenericWorkItem = <T,>({
  header,
  title,
  description,
  tags,
  images,
  renderImage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
}: GenericWorkItemProps<T>) => {
  return (
    <article className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
          Our Work {header}
        </h2>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 mt-4 text-gray-600">{description}</p>
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mx-auto flex aspect-auto h-[400] justify-center">
          {renderImage(images[0])}
        </div>
      </div>
    </article>
  );
};

export default GenericWorkItem;
