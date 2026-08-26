"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "fill" | "width" | "height"> & {
  className?: string;
  aspectRatio?: string;
};

export function BlurredBackdropImage({
  src,
  alt,
  className,
  aspectRatio = "1 / 1",
  ...rest
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover scale-110 blur-2xl brightness-50 transition-all duration-700 group-hover:brightness-75 group-hover:blur-xl"
        quality={20}
      />
      <motion.div
        className="absolute inset-0"
        whileHover={reduce ? undefined : { scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        initial={{ opacity: 0, y: 30, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
          {...rest}
        />
      </motion.div>
    </div>
  );
}
