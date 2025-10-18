import bed from "../../assets/porjects/dashboard.png"
import coffee from "../../assets/porjects/coffee.png"
import financial from "../../assets/porjects/financial-report.png"
import card from "../../assets/porjects/card.png"
import beverages from "../../assets/porjects/beverages.png"
import tableau from "../../assets/porjects/tableau.png"
import bank from "../../assets/porjects/bank.png"
import trading from "../../assets/porjects/trading.png"
import bigwings from "../../assets/porjects/bigwings.png"
import powerquery from "../../assets/porjects/powerquery.png"
import hotel from "../../assets/porjects/hotel.png"


export const projectData = [
    {
        id: 1,
        isFeaturedProject: true,
        image: bed,
        title: "Head Rest Bed Company Sales Analysis",
        category: "Excel Work",
        link: "https://github.com/sujit10x12/excel-sales-dashboard",
        tools: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "DAX"],
        description: ["This project showcases two interactive dashboards built in Excel using Power Query, Power Pivot, and Pivot Tables/Charts.The dashboards provide a business overview and store performance insights for the Head Rest Bed Company."]
    },
    {
        id: 2,
        isFeaturedProject: false,
        image: bigwings,
        title: "BigWings vs Competitors",
        category: "Excel Work",
        link: "https://github.com/sujit10x12/bigwings-airline-performance-excel",
        tools: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "DAX"],
        description: ["Interactive Excel dashboards analyzing BigWings Airlines’ performance against competitors (DenseAir, Eastern Jet, and others). Built with Pivot Tables, Charts, and Slicers to track passenger trends, market share, top routes, and airport hub performance."]
    },
    {
        id: 3,
        isFeaturedProject: false,
        image: powerquery,
        title: "Power Query Challenges",
        category: "Excel Work",
        link: "https://github.com/sujit10x12/bigwings-airline-performance-excel",
        tools: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "DAX"],
        description: ["While this is neither a full-scale nor a professional project, I’m adding it because it marks a key milestone where I learned to automate and structure data efficiently with Power Query. In this challenge, I learned and practiced the core foundations of data transformation using Power Query. Through hands-on exercises, I explored how to extract, clean, reshape, and consolidate data from multiple sources efficiently. This project helped me understand how data preparation works behind every reporting workflow — from removing unwanted rows and unpivoting tables to combining multiple files and systematically handling errors. It also strengthened my ability to build clean, structured, and analysis-ready datasets within Excel."]
    },
    {
        id: 4,
        isFeaturedProject: true,
        image: financial,
        title: "Financial Statements in PowerBi",
        category: ["PowerBi Work", "SQL Work"],
        link: "https://blake-online-store.vercel.app/",
        tools: ["PostgreSQL", "Power BI", "DAX", "Github"],
        description: [""]
    },
    {
        id: 5,
        isFeaturedProject: true,
        image: card,
        title: "Customer Card Behavior Analytics",
        category: ["PowerBi Work", "SQL Work"],
        link: "https://github.com/sujit10x12/Customer-Card-Behavior-Analytics",
        tools: ["SQL", "Power BI", "DAX", "Github"],
        description: ["This project focuses on analyzing credit card transaction data to uncover key insights, trends, and performance metrics. Using SQL for data extraction and transformation, and Power BI for visualization, the goal is to build a dynamic weekly dashboard that empowers stakeholders with real-time, data-driven insights into credit card operations."]
    },
    {
        id: 6,
        isFeaturedProject: true,
        image: beverages,
        title: "Beverages Sales EDA",
        category: "Python Work",
        link: "https://github.com/sujit10x12/beverage-sales-eda",
        tools: ["Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn", "Github"],
        description: ["A Bloging Website that I have created with React, Appwrite, TinyMCE, React-Redux, React-Router-Dom, Tailwindcss. We can create a post, edit it, delete it and leave some comment in it."]
    },
    {
        id: 7,
        isFeaturedProject: false,
        image: hotel,
        title: "Beverages Sales EDA",
        category: "Python Work",
        link: "https://github.com/sujit10x12/beverage-sales-eda",
        tools: ["Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn", "Github"],
        description: ["A Bloging Website that I have created with React, Appwrite, TinyMCE, React-Redux, React-Router-Dom, Tailwindcss. We can create a post, edit it, delete it and leave some comment in it."]
    },
    {
        id: 8,
        isFeaturedProject: true,
        image: tableau,
        title: "Calwest E-Commerce Performance",
        category: "Tableau Work",
        link: "https://github.com/sujit10x12/calwest-e-commerce-tableau-project",
        tools: ["Tableau Public", "Excel/CSV", "Data Modeling", "Github"],
        description: ["An interactive dashboard project built with Tableau to explore and visualize key sales metrics, customer behavior, and regional performance using historical sales data. This project provides a comprehensive overview of business performance through actionable insights and well-structured visualizations."]
    },
    {
        id: 9,
        isFeaturedProject: true,
        image: trading,
        title: "Bank Loan Report",
        category: ["Tableau Work", "SQL Work"],
        link: "https://github.com/sujit10x12/",
        tools: ["Azure Data Studio", "Tableau", "Excel/CSV"],
        description: ["This project demonstrates my ability to combine SQL data analysis with Tableau visualization to build a complete financial reporting system. I used SQL to clean, process, and aggregate raw bank loan data, and Tableau to design interactive dashboards that uncover insights about loan performance, customer demographics, and financial health."]
    },
    {
        id: 10,
        isFeaturedProject: false,
        image: bank,
        title: "Bank Loan Report",
        category: ["Tableau Work", "SQL Work"],
        link: "https://github.com/sujit10x12/bank-loan-analysis-report",
        tools: ["PostgreSQL", "Tableau", "Excel/CSV"],
        description: ["This project demonstrates my ability to combine SQL data analysis with Tableau visualization to build a complete financial reporting system. I used SQL to clean, process, and aggregate raw bank loan data, and Tableau to design interactive dashboards that uncover insights about loan performance, customer demographics, and financial health."]
    },
    {
        id: 11,
        isFeaturedProject: false,
        image: coffee,
        title: "Coffee Shop-Sales Performance Analysis",
        category: ["PowerBi Work", "SQL Work"],
        link: "https://github.com/sujit10x12/bank-loan-analysis-report",
        tools: ["SQL", "Power BI", "DAX", "Github"],
        description: ["This project analyzes a coffee shop’s sales performance using SQL and Power BI to uncover insights about customer behavior, product demand, and revenue trends across multiple store locations. The data was stored and managed in PostgreSQL, then connected directly to Power BI for real-time analysis and interactive visualization."]
    },
]

export const projectNav = [
    {
        name: "Featured Projects",
    },
    {
        name: "Excel Work",
    },
    {
        name: "SQL Work",
    },
    {
        name: "PowerBi Work",
    },
    {
        name: "Tableau Work",
    },
    {
        name: "Python Work"
    }
]