'use client'
import { IDashboardData } from "@/types";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Analytics = ({ dashboardData }: { dashboardData: IDashboardData }) => {


    const chartData = [
        { name: "Total Blogs", value: dashboardData?.stats?.totalBlogs },
        { name: "Total Projects", value: dashboardData?.stats?.totalProjects },
        { name: "Published Blogs", value: dashboardData?.stats?.publishedBlogs },
    ]

    return (
        <main className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-2xl shadow text-center">
                    <p className="text-2xl sm:text-4xl font-bold">{dashboardData?.stats?.totalBlogs}</p>
                    <h2 className="text-lg font-medium">Total Blogs</h2>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-2xl shadow text-center">
                    <p className="text-2xl sm:text-4xl font-bold">{dashboardData?.stats?.totalProjects}</p>
                    <h2 className="text-lg font-medium">Total Projects</h2>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-2xl shadow text-center">
                    <p className="text-2xl sm:text-4xl font-bold">{dashboardData?.stats?.publishedBlogs}</p>
                    <h2 className="text-lg font-medium">Published Blogs</h2>
                </div>
            </div>
            {/* bar chart */}
            <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-2xl font-semibold mb-4">Activity Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            <Cell fill="#05a83b"></Cell>
                            <Cell fill="#1d4ed8"></Cell>
                            <Cell fill="##1184e2"></Cell>
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
};

export default Analytics;