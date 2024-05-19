// import PDF
// import PDF from "./Docs/Sally's CV.pdf";

export const navlinks = [
  { path: "/", text: "home" },
  { path: "/about", text: "about" },
  {
    path: "https://drive.google.com/file/d/1-ChbP6tyhuBL4pD_iMNNeY5bOaLauNSI/view?usp=sharing",
    text: "resume",
  },
  {
    path: "/portfolio",
    text: "portfolio",
    // submenu: true,
    sublink: [
      { path: "/design-brief", text: "design brief" },
      { path: "/inspirational-board", text: "inspirational board" },
      { path: "/moodboard", text: "moodboard" },
      { path: "/color-palette", text: "color palette" },
      { path: "/fabric-board", text: "fabric board" },
      { path: "/flats", text: "flats" },
      { path: "/croquis", text: "croquis" },
      { path: "/pattern-charts", text: "pattern charts" },
      { path: "/working-sketches", text: "working sketches" },
      { path: "/design-specifications", text: "design specifications" },
      { path: "/drafting", text: "Drafting" },
      { path: "/cutting-of-fabrics", text: "cutting of fabrics" },
      { path: "/final-work", text: "final work" },
      { path: "/cost-sheet", text: "cost sheet" },
      // { path: "/accessories", text: "accessories" },
      // { path: "/style-board", text: "style board" },
      // { path: "/embroidery-applique", text: "Embroidery/Applique " },
    ],
  },
  { path: "/contact", text: "contact" },
];
