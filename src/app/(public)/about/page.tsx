
const AboutPage =async () => {
    const email ="mukterhossain3075@gmail.com"
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/owner/${email}`,{
   cache: "no-store",
  })
  const data = await res.json()
  console.log("data", data?.user)
    return (
        <div className="max-w-7xl mx-auto p-5">
            <h1>About</h1>
            <p>{data?.user?.name}</p>
            <p>{data?.user?.email}</p>
        </div>
    );
};

export default AboutPage;