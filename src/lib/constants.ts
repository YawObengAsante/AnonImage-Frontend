export const NAV_LINKS = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Images",
    path: "/image",
  },
];

export const STEPS = [
  {
    title: "Upload Your Image",
    description: "Drag and drop or select an image from your device to upload.",
  },
  {
    title: "Get Shareable Link",
    description: "We generate a unique link you can share with anyone.",
  },
  {
    title: "View in Your Gallery",
    description: "All your shared images appear in your private dashboard.",
  },
];

export const NAV_INACTIVE =
  "relative inline-block before:absolute before:top-6 before:h-1 before:bg-black before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:duration-300";

export const NAV_ACTIVE =
  "relative inline-block before:absolute before:top-6 before:h-1 before:bg-black before:w-full";
