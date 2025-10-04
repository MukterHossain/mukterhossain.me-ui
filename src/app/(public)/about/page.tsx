import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

export const metadata:Metadata ={
    title: "About Me | Portfolio",
    description: "Learn more about Mukter Hossain, a passionate Frontend Developer specializing in building responsive and user-friendly web applications. Discover his background, skills, and journey in web development.",
}
const AboutPage = async () => {
    

    // console.log(session);
    return (
        <div className="max-w-7xl mx-auto py-20 space-y-12 px-5">
            <section className="text-center mb-10  p-5 rounded-lg">
                <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent "> I’m MD MUKTER HOSSAIN</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    <span className="font-medium"></span> a passionate{" "}
                    <span className="text-primary">Frontend Developer</span> with a strong focus on building respoonsive, modern, scalable, and user-friendly web applications.
                </p>
            </section>
            <section className="bg-muted/20 shadow p-6 rounded-xl">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3">🎓My Background</h1>
                <p className="text-lg text-muted-foreground">
                    I completed my <span className="font-medium">Honors and Master’s in Polititical Science </span> from Dhaka College. Although my academic background is different, my deep interest in technology led me into the world of web development, where I’ve been continuously learning and improving my skills.
                </p>
            </section>
            {/* Personal Information and Skills */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted/20 shadow p-5 rounded-xl space-y-3">
                    <h2 className="text-2xl font-semibold mb-3">Personal Information</h2>
                    <ul className="text-muted-foreground space-y-2">
                        <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary"></Mail>mukterhossain3075@gmail.com
                        </li>
                        <li className="flex items-center gap-2"><FaLinkedin className="w-5 h-5 text-blue-600"></FaLinkedin>
                            <Link target="_blank" href={`https://www.linkedin.com/in/md-mukter-hossain-341358295`} className="text-sm flex items-center gap-x-1 text-blue-500">Linkedin.com/in/mukter</Link>
                        </li>
                        
                        <li className="flex items-center gap-2"><FaGithub className="w-5 h-5 text-blue-600"></FaGithub>
                            <Link target="_blank" href={`https://github.com/MukterHossain`} className="text-sm flex items-center gap-x-1 text-blue-500">GitHub.com/MukterHossain</Link>
                        </li>
                    </ul>
                </div>
                {/* Skills */}
                <div className="bg-muted/20 shadow p-6 rounded-xl space-y-3">
                    <h2 className="text-2xl font-semibold mb-3">My Skills</h2>
                    <ul className="list-disc list-inside space-y-2 ">
                        <li className="font-semibold">
                            <span className="font-bold"> Frontedn: </span>HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript, React.js, Next.js  </li>
                        <li className="font-semibold">
                            <span className="font-bold">Backend: </span>Node.js, Express.js, Prisma, MongoDB, PostgreSQL  </li>
                        <li className="font-semibold">
                            <span className="font-bold">Tools: </span>Git, GitHub, Redux Toolkit  </li>
                    </ul>
                </div>
            </section>  
            {/* My journey */}
            <section className="bg-muted/20 rounded-xl p-6 space-y-3 shadow">
                <h1 className="text-2xl  font-semibold mb-3">My Journey</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    I’m passionate about continous learning, problem-solving, and collaborating with teams to build impactful digital projucts. My goal is to join a dynamic team where I can contribute to meaningful projects and grow as a developer.
                </p>
            </section>
            {/* CTA */}
            <section className="text-center bg-primary/10 p-10 rounded-xl shadow space-y-4">
                <h2 className="text-2xl  font-semibold mb-3">🚀 Let’s Work Together</h2>
                <p className=" text-muted-foreground mb-4">
                    I’m always excited to collaborate on interesting projects. Feel free to reach out.
                </p>
                <a href="mailto:mukterhossain3075@gmail.com" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition duration-300">Contact Me</a>
            </section>

        </div>
    );
};

export default AboutPage;