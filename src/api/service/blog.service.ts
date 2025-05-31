import { Blog } from "../interfaces/blog.interface";

const blog: Blog[] = [
  {
    id: "1",
    title: "Understanding React Hooks",
    content:
      "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have since become a fundamental part of React development.",
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      { id: "1", name: "React" },
      { id: "2", name: "Hooks" },
    ],
    createdAt: new Date("2023-01-01"),
  },
  {
    id: "2",
    title: "A Guide to TypeScript",
    content:
      "TypeScript is a superset of JavaScript that adds static types. It helps catch errors early and makes code more maintainable.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [{ id: "3", name: "TypeScript" }],
    createdAt: new Date("2023-02-01"),
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox",
    content:
      "CSS Grid and Flexbox are two powerful layout systems in CSS. They can be used together to create complex layouts with ease.",
    image:
      "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      { id: "4", name: "CSS" },
      { id: "5", name: "Layout" },
    ],
    createdAt: new Date("2023-03-01"),
  },
  {
    id: "4",
    title: "Exploring Next.js",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation. It simplifies the development of React applications with built-in features.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [{ id: "6", name: "Next.js" }],
    createdAt: new Date("2023-04-01"),
  },
];

export async function getBlogs(): Promise<Blog[]> {
  return blog;
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  console.log("Fetching blog with ID:", id);
  return blog.find((b) => b.id === id);
}
