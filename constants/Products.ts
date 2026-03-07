import type { Category, CategoryDetails } from "./categories"

type Product = Pick<CategoryDetails, "name" | "description" | "href"> & { id: string, imageSrc: string, category: Category }

const productsList: Product[] = [
  {
    id: "3f2d9c6e-6c2a-4b7f-9a3c-1b7a8f1c2e41",
    name: "cutting machine",
    description: "High-precision cutting machine designed for accurate and consistent key and lock component cutting in industrial environments.",
    category: "locks",
    href: "/cutting-machine",
    imageSrc: "https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/cutting-machine.webp"
  },
  {
    id: "a91f4d3b-2c87-4c6a-b7e1-8a3d0e5c6b92",
    name: "key chamfer machine",
    description: "Efficient key chamfer machine used to create smooth and precise chamfers on keys for improved fit and durability.",
    category: "locks",
    href: "/key-chamfer-machine",
    imageSrc: "https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/key-chamfer-machine.webp"
  },
  {
    id: "6e4c2b1a-9f7d-4d88-a5c2-3e91b6d4f8aa",
    name: "key dimpling lock cylinder and barrel hole double spindle machine",
    description: "Double spindle machine engineered for high-speed dimpling and drilling of lock cylinders and barrel holes with superior accuracy.",
    category: "locks",
    href: "/key-dimpling-lock-cylinder-and-barrel-hole-double-spindle-machine",
    imageSrc: "https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/key-dimpling-lock-cylinder-and-barrel-hole-double-spindle-machine.webp"
  },
  {
    id: "d7a8e2f4-1c5b-46f2-9c3e-0a6b9e1d4f33",
    name: "key dimpling lock cylinder and barrel hole single spindle machine",
    description: "Single spindle solution for precise key dimpling and lock cylinder barrel hole drilling, ideal for controlled and detailed operations.",
    category: "locks",
    href: "/key-dimpling-lock-cylinder-and-barrel-hole-single-spindle-machine",
    imageSrc: "https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/key-dimpling-lock-cylinder-and-barrel-hole-single-spindle-machine.webp"
  },
  {
    id: "9c1f7a4d-8b2e-4f1c-a6e5-3d9b0a7c2e18",
    name: "key slotting machine",
    description: "Robust key slotting machine designed to deliver accurate and clean slots with consistent depth and alignment.",
    category: "locks",
    href: "/key-slotting-machine",
    imageSrc: "https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/key-slotting-machine.webp"
  },
  {
    id: "4b9a3e2f-6c7d-4e91-8a5c-1f2d0b7e6c44",
    name: "lock cylinder hole drill machine",
    description: "Precision drilling machine built specifically for lock cylinder hole creation, ensuring accuracy and smooth finishing.",
    category: "locks",
    href: "/lock-cylinder-hole-drill-machine",
    imageSrc: "https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/lock-cylinder-hole-drill-machine.webp"
  },
  {
    id: "e2f6b8c1-5d9a-4e7f-9a3b-0c4d8e1f6a77",
    name: "lock cylinder single slotting machine",
    description: "Single slotting machine optimized for precise slot creation in lock cylinders with high operational reliability.",
    category: "locks",
    href: "/lock-cylinder-single-slotting-machine",
    imageSrc: "https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/lock-cylinder-single-slotting-machine.webp"
  }
];

export default productsList