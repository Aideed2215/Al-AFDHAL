"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { fadeUp } from "@/components/motion/presets";

interface Props {
  item: GalleryItem;
  index: number;
  onSelect: (id: number) => void;
}

export default function StoryGalleryItem({ item, index, onSelect }: Props) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center`}
        >
          <div
            className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelect(item.id)}
              className="block w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.button>
          </div>

          <div
            className={`text-center lg:text-right ${isReversed ? "lg:order-1" : "lg:order-2"}`}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-text-primary leading-tight">
              {item.title}
            </h3>
            <div className="mt-4 sm:mt-6 w-16 h-1 rounded-full bg-primary/30 mx-auto lg:mx-0 lg:ml-auto" />
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {item.description}
            </p>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
