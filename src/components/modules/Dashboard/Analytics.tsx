

const Analytics = async () => {
    const resBlog = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
    const dataBlog = await resBlog.json()
    const blogs = dataBlog?.result?.blogs

    const resProject = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
    const dataProject = await resProject.json()
    console.log("data", dataProject.data.projects)
    const projects = dataProject.data.projects
    console.log("blogs", blogs)
    return (
        <div className="">
            <div className="flex justify-center  items-center gap-10 sm:gap-20">
                <div className="bg-gray-50 p-6 sm:p-12 md:16 border border-gray-200 shadow-md rounded-xl hover:bg-blue-200 transform hover:scale-105 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-full text-center">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl  font-bold">{blogs?.length}</h1>
                        <p className="text-gray-500 text-centr mt-2">Total Blogs</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-6 sm:p-12 md:16 border border-gray-200 shadow-md rounded-xl hover:bg-blue-200 transform hover:scale-105 hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">{projects?.length}</h1>
                        <p className="text-gray-500 mt-2">Total Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;