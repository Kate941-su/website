import clsx from "clsx";
import Image from "next/image";

interface CircleAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  withRing?: boolean;
}

export const CircleAvatar = ({
  src,
  alt,
  size = 128,
  className,
  withRing = true,
}: CircleAvatarProps): JSX.Element => (
  <div
    className={clsx(
      "relative rounded-full overflow-hidden shadow-md bg-gray-200",
      withRing && "ring-2 ring-blue-500/40",
      className
    )}
    style={{ width: size, height: size }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes={`${size}px`}
      className="object-cover"
      priority
    />
  </div>
);

