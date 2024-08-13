import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end lg:p-10 bg-gradient-to-t from-black via-transparent to-transparent",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start select-none",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Kiraanimelist",
    des: "Explore the world of anime with our comprehensive platform. Connect with fellow enthusiasts, discover new series, and dive into the latest trends.",
    img: "/kiraanimelist.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/fm.svg", "/git.svg"],
    link: "https://kiraanimelist.vercel.app/",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      `"Working with Kira has proven to be exceptionally advantageous. He demonstrates remarkable leadership skills by effectively commanding the Astrall Express team. His ability to discern the right moments to advance or retreat showcases his strategic acumen. Kira’s reliability is unmatched; he consistently provides support and guidance to team members facing challenges. His keen sense of timing and his dedication to the team's success make him an invaluable asset. His proactive approach and willingness to assist others not only enhance team dynamics but also contribute significantly to achieving collective goals."`,
    name: "Welt Yang",
    title: "Member of the Astral Express Crew",
    img: "https://upload-os-bbs.hoyolab.com/upload/2022/07/07/175387813/3c00cf50e540a5cfe0f523ce2c1ce7a1_907939677121561953.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
  },
  {
    quote:
      `"Kira is someone you can absolutely trust. He's skilled at negotiating, always knows how to get the best deals, and is incredibly smart. But most importantly, he has a soft spot for Numby. Honestly, seeing how much he adores Numby just makes me trust him even more—it's the little things that show his true character."`,
    name: "Topaz",
    title: " Senior Manager of the Strategic Investment Department of Interastral Peace Corporation",
    img: "https://i.pinimg.com/originals/52/7f/0c/527f0cfc93e038ea1b067548e4d8c69b.jpg"
  },
  {
    quote: `"Why Am I here?"`,
    name: "Stelle",
    title: "Member of the Astral Express Crew",
    img: "https://i.pinimg.com/originals/27/e7/9e/27e79ed3f3a4a252e4687fb59a3c4c0c.png"
  },

  {
    quote:
      `"Working with Kira has been a true pleasure. He is an exemplary colleague who approaches problem-solving with both logic and efficiency. His attention to detail and his genuine concern for those around him are remarkable. Kira's ability to navigate complex issues and provide thoughtful, actionable solutions has significantly contributed to our team's success. Beyond his professional skills, Kira is a dependable and empathetic team member who consistently fosters a supportive work environment. His dedication and collaborative spirit make him an invaluable asset to any team."`,
    name: "Bronya",
    title: "Supreme Guardian of Belobog",
    img: "https://i.pinimg.com/736x/d2/9b/38/d29b38248c9a967c33baaac98574142b.jpg"
  },

  {
    quote:
      `"Ah, Kira, my kind of friend! I’ve always admired his 'high risk, high return' approach to business—reminds me a lot of myself. He’s got that edge, yet somehow manages to stay loyal to his partners. Gotta respect that. One day, I’m hoping we’ll have the chance to gamble together—now that would be a real thrill. Just don’t expect me to play nice!"`,
    name: "Aventurine",
    title: "A senior manager in the IPC Strategic Investment Department",
    img: "https://i.pinimg.com/originals/73/6b/49/736b49d9267755c013e91d5dadb8a536.jpg"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",

  },
  {
    id: 6,
    name: "hoyoverse",
    img: "/hoyoLG.jpg",
    nameImg: "/hoyo.svg",
    soloImg: true
  },
];

export const techStack = [
  {
    id: 1,
    title: "JavaScript",
    desc: "Proficient in JavaScript for adding interactivity and functionality to web applications.",
    className: "md:col-span-2",
    thumbnail: "/js.svg", // Ganti dengan thumbnail yang sesuai
  },
  {
    id: 2,
    title: "Next.js",
    desc: "Experienced in building server-side rendered applications and static sites using Next.js.",
    className: "md:col-span-2",
    thumbnail: "/next-js.svg", // Ganti dengan thumbnail yang sesuai
  },
  {
    id: 3,
    title: "Tailwind",
    desc: "Skilled in using Tailwind for utility-first styling to build responsive and modern web interfaces.",
    className: "md:col-span-2",
    thumbnail: "/tailwind.svg", // Ganti dengan thumbnail yang sesuai
  },
  {
    id: 4,
    title: "Backend Development",
    desc: "Experienced with Node.js, Prisma ORM, and MySQL for building and managing backend systems.",
    className: "md:col-span-2",
    thumbnail: "/backend.png", // Ganti dengan thumbnail yang sesuai
  },
]



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];