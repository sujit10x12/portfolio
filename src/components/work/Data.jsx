import bed from "../../assets/dashboard.png"
import coffee from "../../assets/coffee.jpg"
import card from "../../assets/card.png"
import beverages from "../../assets/beverages.png"
import tableau from "../../assets/tableau.png"


export const projectData = [
    {
        id: 1,
        image: bed,
        title: "Head Rest Bed Company Sales Analysis",
        category: "DRF",
        link: "https://github.com/sujit10x12/excel-sales-dashboard",
        tools: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "DAX"],
        description: ["This project showcases two interactive dashboards built in Excel using Power Query, Power Pivot, and Pivot Tables/Charts.The dashboards provide a business overview and store performance insights for the Head Rest Bed Company."]
    },
    {
        id: 2,
        image: coffee,
        title: "Coffee Shop Sales Analysis",
        category: "react",
        link: "https://blake-online-store.vercel.app/",
        tools: ["PostgreSQL", "Power BI", "DAX", "Github"],
        description: [""]
    },
    {
        id: 3,
        image: card,
        title: "Customer Card Behavior Analytics",
        category: "django",
        link: "https://github.com/sujit10x12/Customer-Card-Behavior-Analytics",
        tools: ["SQL", "Power BI", "DAX", "Github"],
        description: ["This project focuses on analyzing credit card transaction data to uncover key insights, trends, and performance metrics. Using SQL for data extraction and transformation, and Power BI for visualization, the goal is to build a dynamic weekly dashboard that empowers stakeholders with real-time, data-driven insights into credit card operations."]
    },
    {
        id: 4,
        image: beverages,
        title: "Beverages Sales EDA",
        category: "react",
        link: "https://github.com/sujit10x12/beverage-sales-eda",
        tools: ["Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn", "Github"],
        description: ["A Bloging Website that I have created with React, Appwrite, TinyMCE, React-Redux, React-Router-Dom, Tailwindcss. We can create a post, edit it, delete it and leave some comment in it."]
    },
    // {
    //     id: 5,
    //     image: blog,
    //     title: "Random Winner Game(IPL)",
    //     category: "django",
    //     link: "https://sujit10x12.pythonanywhere.com/",
    //     tools: ["Django", "JavaScript", "Bootstrap"],
    //     description: ["A simple web application created with Django, JavaScript and Bootstrap. It randomly choose a winner between two teams. You can play a full IPL tournament and 1 team emerged as a winner randomly."]
    // },
    {
        id: 6,
        image: tableau,
        title: "Store API DRF",
        category: "DRF",
        link: "https://sujit1210.pythonanywhere.com/api/v1/",
        tools: ["Excel", "Tableau", "Github"],
        description: ["An interactive dashboard project built with Tableau to explore and visualize key sales metrics, customer behavior, and regional performance using historical sales data. This project provides a comprehensive overview of business performance through actionable insights and well-structured visualizations."]
    },
]

export const projectNav = [
    {
        name: "all",
    },
    {
        name: "Python",
    },
    {
        name: "SQL",
    },
    {
        name: "Tableau",
    },
    {
        name: "PowerBi",
    },
]