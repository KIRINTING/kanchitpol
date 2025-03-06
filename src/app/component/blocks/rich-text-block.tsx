"use client";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";

export interface RichTextBlock {
  __component: "blocks.rich-text";
  id: number;
  content: BlocksContent;
}

export function RichTextBlock({ block }: { block: RichTextBlock }) {
  console.log("block.content:", block.content);

  // แปลงให้เป็นอาร์เรย์เสมอ
  const normalizedContent = Array.isArray(block.content)
    ? block.content
    : [block.content];

  return (
    <div className="richtext">
      <BlocksRenderer
        content={normalizedContent}
        blocks={{
          image: ({ image }: any) => {
            console.log("image", image);
            if (!image) return null;
            return (
              <div className="my-4 flex justify-center">
                <Image
                  src={image.url}
                  width={image.width || 800}
                  height={image.height || 600}
                  alt={image.alternativeText || ""}
                  className="rounded-lg shadow-md h-[300px] w-full object-cover"
                />
              </div>
            );
          },
        }}
      />
    </div>
  );
}
