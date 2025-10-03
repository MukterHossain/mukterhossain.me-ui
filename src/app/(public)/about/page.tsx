
const AboutPage = async () => {
    const email = "mukterhossain3075@gmail.com"
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/owner/${email}`, {
        cache: "no-store",
    })
    const data = await res.json()
    const user = data?.user;
    return (
        <div className="max-w-7xl mx-auto p-5 my-16 px-5">
            <div className="text-center mb-10">
                <h1 className="text-2xl sm:text-4xl font-bold mb-3">About me</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    I’m <span className="font-medium">{user?.name}</span>, a passionate{" "}
                    <span className="text-primary">Web Developer</span> focused on bilding modern, scalable, and user-friendly web applications.
                </p>
            </div>
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="">
                    <h2 className="text-2xl font-semibold mb-3">Personal Information</h2>
                    <ul className="text-muted-foreground space-y-2">
                        <li><strong>Name: </strong>{user?.name}</li>
                        <li><strong>Email: </strong>{user?.email}</li>
                        <li><strong>Location: </strong>Dhaka, Bangladesh</li>
                        <li><strong>Available: </strong>Yes, open for freelance & remote jobs</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-2xl font-semibold mb-3">My Skills</h2>
                    <div className="flex flex-wrap gap-2 ">
                        {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "HTML5", "CSS3", "Tailwind CSS", "Git", "GitHub"].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {/* My Story */}
            <div className="mt-10">
                <h1 className="text-2xl  font-semibold mb-3">My Journey</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    I started my web development journey about 2 years ago, driven by a strong curiosity for how the web works. Over tiime, I mastered fronted technologies like React, Next.js, and later expended my skills to backend development using Node.js and Express. My ultimate goal is to become a full-stack developer who can design, build, and deploy complete web solution from scratch.
                </p>
            </div>
            {/* CTA */}
            <div className="text-center bg-primary/5 py-10 rounded-lg mt-10">
                <h2 className="text-2xl  font-semibold mb-3">🚀 Let’s Work Together</h2>
                <p className=" text-muted-foreground mb-4">
                    I’m always excited to collaborate on interesting projects. Feel free to reach out.
                </p>
                <a href="mailto:mukterhossain3075@gmail.com" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition duration-300">Contact Me</a>
            </div>

        </div>
    );
};

export default AboutPage;