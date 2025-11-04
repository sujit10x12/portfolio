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
        image: financial,
        title: "🧾 Financial Statements in PowerBi",
        category: ["PowerBi Work", "SQL Work", "Excel Work"],
        link: "https://github.com/sujit10x12/financial-statements-in-powerbi",
        tools: ["Power BI", "Excel", "SQL", "DAX", "Github"],
        description: [
            "GL Retail Corporation — a multi-store retail company — sought to automate its financial reporting and improve decision-making through modern BI tools.I designed and implemented an end-to-end Financial Reporting Automation System using Power BI and Excel, integrating multiple data sources into a unified analytical model.",
            "The solution replaced manual, Excel-based workflows with automated financial statements — including the Income Statement, Balance Sheet, and Cash Flow Reports — all refreshed directly from the company’s SQL database."
        ]
    },
    {
        id: 2,
        isFeaturedProject: true,
        image: bed,
        title: "🛏️ Head Rest Bed Company Sales Analysis",
        category: "Excel Work",
        link: "https://github.com/sujit10x12/excel-sales-dashboard",
        tools: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "DAX"],
        description: [
            "This project features two interactive dashboards built in Excel using Power Query, Power Pivot, and Pivot Tables/Charts to deliver automated business insights. The goal was to transform raw sales and operational data into a structured, dynamic reporting system.",
            "The dashboards provide a comprehensive business overview and detailed store performance analysis, enabling management to monitor key metrics, compare sales trends, and make informed decisions — all within an intuitive Excel environment."
        ]
    },
    {
        id: 3,
        isFeaturedProject: false,
        image: bigwings,
        title: "✈️ BigWings vs Competitors",
        category: "Excel Work",
        link: "https://github.com/sujit10x12/bigwings-airline-performance-excel",
        tools: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "DAX"],
        description: [
            "This project presents interactive Excel dashboards designed to analyze BigWings Airlines’ performance against key competitors such as DenseAir and Eastern Jet. Using Pivot Tables, Charts, and Slicers, the data was structured and visualized to deliver clear, actionable insights.",
            "The dashboards track passenger growth trends, market share, top-performing routes, and airport hub efficiency, helping management benchmark performance and identify opportunities for strategic improvement across the airline network."
        ]
    },
    {
        id: 4,
        isFeaturedProject: false,
        image: powerquery,
        title: "⚙️ Power Query Challenges",
        category: "Excel Work",
        link: "https://github.com/sujit10x12/power-query-challenges",
        tools: ["Excel", "Power Query", "Power Pivot", "Pivot Tables", "DAX"],
        description: [
            "While not a full-scale professional project, this challenge represents a key learning milestone where I developed the ability to automate and structure data efficiently using Power Query. It laid the foundation for understanding how raw data is transformed into reliable, analysis-ready datasets.",
            "Through hands-on exercises, I practiced data extraction, cleaning, reshaping, and consolidation from multiple sources. I learned how to remove unwanted rows, unpivot tables, combine files, and handle errors systematically, gaining a deeper appreciation of how data preparation underpins every reporting workflow in Excel and Power BI."
        ]
    },
    {
        id: 5,
        isFeaturedProject: true,
        image: card,
        title: "💳 Customer Card Behavior Analytics",
        category: ["PowerBi Work", "SQL Work"],
        link: "https://github.com/sujit10x12/Customer-Card-Behavior-Analytics",
        tools: ["SQL", "Power BI", "DAX", "Github"],
        description: [
            "This project focuses on analyzing credit card transaction data to uncover key trends, spending patterns, and performance metrics. Using SQL, I extracted and transformed raw data from multiple sources to build a clean, reliable dataset for analysis.",
            "In Power BI, I developed an interactive dashboard that visualizes transaction volume, revenue performance, and customer behavior. The dashboard updates weekly, enabling stakeholders to monitor key metrics, detect anomalies, and make data-driven decisions that enhance operational efficiency and business growth."
        ]
    },
    {
        id: 6,
        isFeaturedProject: true,
        image: beverages,
        title: "🧋 Beverages Sales EDA",
        category: "Python Work",
        link: "https://github.com/sujit10x12/beverage-sales-eda",
        tools: ["Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn", "Github"],
        description: [
            "This project performs Exploratory Data Analysis (EDA) on beverage sales data to uncover trends in product categories, regional performance, pricing, and consumer behavior. Using Python with Pandas, NumPy, Matplotlib, and Seaborn, I cleaned, transformed, and structured the dataset to enable clear, actionable insights for business decision-making.",
            "The analysis revealed seasonal sales patterns, high-performing categories like Juices, and emerging trends in the €2–4 mid-range price segment. Regional and consumer-type segmentation highlighted growth opportunities in the South region and strong B2C contribution. Recommendations were provided to optimize marketing, product strategy, and pricing, demonstrating how structured data analysis can drive data-informed business strategies."
        ]
    },
    {
        id: 7,
        isFeaturedProject: false,
        image: hotel,
        title: "🏨 Hotel Bookings EDA",
        category: "Python Work",
        link: "https://github.com/sujit10x12/beverage-sales-eda",
        tools: ["Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn", "Github"],
        description: [
            "This project analyzes hotel booking data to uncover key trends and patterns in customer behavior, cancellations, seasonal demand, and booking channels. Using Python with Pandas, NumPy, Matplotlib, and Seaborn, I cleaned, transformed, and explored the dataset to extract actionable insights that can guide hotel management and marketing strategies.",
            "Key findings include City Hotels being the most preferred with the highest ADR, 27.5% cancellation rate, and peak bookings in August. Insights into repeat visitors, meal plan preferences, stay durations, and distribution channel performance were derived to inform revenue optimization, customer retention, and operational planning, demonstrating the power of data-driven decision-making in the hospitality sector."
        ]
    },
    {
        id: 8,
        isFeaturedProject: true,
        image: tableau,
        title: "🛒 Calwest E-Commerce Performance",
        category: "Tableau Work",
        link: "https://github.com/sujit10x12/calwest-e-commerce-tableau-project",
        tools: ["Tableau Public", "Excel/CSV", "Data Modeling", "Github"],
        description: [
            "This project features an interactive Tableau dashboard designed to explore and visualize key sales metrics, customer behavior, and regional performance using historical sales data. The goal was to provide a clear, data-driven view of business performance to support strategic decision-making.",
            "The dashboard enables stakeholders to track trends, identify top-performing regions and products, and analyze customer behavior through dynamic filters and visualizations. By combining insightful metrics with a user-friendly interface, the project demonstrates the ability to transform raw data into actionable business insights."
        ]
    },
    {
        id: 9,
        isFeaturedProject: true,
        image: trading,
        title: "📈 Trading Dashboard in Tableau",
        category: ["Tableau Work", "SQL Work"],
        link: "https://github.com/sujit10x12/trading-dashboard-tableau",
        tools: ["Azure Data Studio", "Tableau", "Excel/CSV"],
        description: [
            "This project involved building a dynamic Trading Dashboard in Tableau for CFI Capital Partners, an investment bank specializing in U.S. stock trading. Using SQL, I extracted both historical and intraday stock data, which was then transformed and visualized in Tableau to provide real-time market insights. The dashboard showcases advanced visualizations such as candlestick charts, Bollinger Bands, volume analysis, relative growth, and heat tables, enabling traders to monitor performance and trends efficiently.",
            "Interactive features include parameter-driven view periods, ticker selection, pop-up containers, and data blending to integrate datasets with different grains. This proof-of-concept dashboard demonstrates the ability to combine data extraction, analytics, and visualization to deliver actionable insights, supporting decision-making in fast-paced trading environments."
        ]
    },
    {
        id: 10,
        isFeaturedProject: false,
        image: bank,
        title: "🏦 Bank Loan Report",
        category: ["Tableau Work", "SQL Work"],
        link: "https://github.com/sujit10x12/bank-loan-analysis-report",
        tools: ["PostgreSQL", "Tableau", "Excel/CSV"],
        description: [
            "This project builds a comprehensive financial reporting system for monitoring a bank’s loan portfolio. Using SQL, I cleaned, processed, and aggregated raw loan data to create a structured dataset for analysis, while Tableau was used to design interactive dashboards that visualize key metrics such as total loan applications, funded amounts, payments received, interest rates, and debt-to-income ratios.",
            "The dashboards provide insights into loan quality, trends over time, regional performance, loan purpose, home ownership, and employment length, enabling stakeholders to track good vs. bad loans and make informed, data-driven decisions. The project demonstrates the ability to combine data preparation with visualization to deliver actionable business intelligence in the financial sector."
        ]
    },
    {
        id: 11,
        isFeaturedProject: false,
        image: coffee,
        title: "☕Coffee Shop-Sales Performance Analysis",
        category: ["PowerBi Work", "SQL Work"],
        link: "https://github.com/sujit10x12/bank-loan-analysis-report",
        tools: ["SQL", "Power BI", "DAX", "Github"],
        description: [
            "This project analyzes a coffee shop’s sales performance using SQL and Power BI to uncover insights on customer behavior, product demand, and revenue trends across multiple store locations. The sales data was stored and managed in PostgreSQL and prepared for analysis using SQL queries.",
            "In Power BI, I built interactive dashboards for real-time visualization, enabling stakeholders to track top-selling products, peak sales periods, and store performance. The project demonstrates how integrating data management and visualization tools can drive actionable insights and support data-driven decision-making in retail operations."
        ]
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