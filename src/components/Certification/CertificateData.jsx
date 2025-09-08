import excel from "../../assets/certificates/excel.jpg"
import dax from "../../assets/certificates/dax.jpg"
import google from "../../assets/certificates/google.jpg"
import sql from "../../assets/certificates/sql.jpg"
import python from "../../assets/certificates/python.jpg"

export const Data = [
    {
        id: 1,
        image: google,
        title: "Google Data Analytics",
        category: "DRF",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/E2D36WMZLM6U",
        tools: ["Statistical Programming", "Spreadsheet Software", "Business Analysis", "SQL", "R Programming"],
        description: [
            "Gained an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day role.",
            "Learned key analytical skills such as data cleaning, analysis, and visualization, along with essential tools including spreadsheets, SQL, R programming, and Tableau.",
            "Understood how to clean and organize data for analysis, and performed calculations using spreadsheets, SQL, and R programming.",
            "Learned how to visualize and present data findings effectively using dashboards, presentations, and widely used visualization platforms."
        ]
    },
    {
        id: 2,
        image: excel,
        title: "Data Skills for Excel",
        category: "react",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ILAJLO8GFP1J",
        tools: ["Formulas", "Functions", "PivotTables", "PivotCharts", "PowerQuery", "PowerPivot", "DataModeling"],
        description: [
            "Worked with Excel, including Pivot Tables, Charts, and Formulas",
            "Performed Data Analysis and Exploratory Data Analysis (EDA)",
            "Handled Data Transformation, Data Cleansing, and Data Manipulation",
            "Executed Extract, Transform, Load (ETL) processes and Data Integration",
            "Built Data Models and designed Star Schemas",
            "Created Data Visualizations and Presented Data effectively",
            "Applied Business Intelligence techniques and Data Analysis Expressions (DAX)",
            "Conducted Competitive Analysis and practiced Data Storytelling"
        ]
    },
    {
        id: 3,
        image: sql,
        title: "SQL for Data Analysts",
        category: "django",
        link: "https://www.coursera.org/account/accomplishments/certificate/0JYAB1DOALB1",
        tools: ["SQL", "Filtering", "Sorting", "Grouping", "Joins", "Aggregation", "Subqueries"],
        description: [
             "Performed data sorting, filtering, and aggregation to uncover insights",
            "Applied SQL skills in real-world scenarios through practical exercises",
            "Worked with relational databases and performed data manipulation and transformation",
            "Understood and applied data warehousing concepts",
            "Used business intelligence techniques to gather insights from company data",
            "Gained experience with query languages for efficient data retrieval",
            "Performed data analysis to interpret and present insights effectively"
        ]
    },
    {
        id: 4,
        image: dax,
        title: "Intermidate DAX & Time Intelligence",
        category: "react",
        link: "https://www.coursera.org/account/accomplishments/certificate/5V42PI3ZGV4T",
        tools: ["Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn", "Github"],
        description: [
            "Learned core DAX concepts: measures, calculated columns, row context, and filter context",
            "Understood the difference between scalar functions (single values) and table functions (returning tables)",
            "Applied DAX concepts within data models for efficient analysis",
            "Manipulated and transformed data using table functions",
            "Analyzed data trends over time with date and time intelligence functions",
            "Integrated DAX Studio with Excel and Power BI to streamline development and improve performance"
        ]
    },
    {
        id: 5,
        image: python,
        title: "Data Analysis with Python",
        category: "django",
        link: "https://www.coursera.org/account/accomplishments/certificate/2U418IFLBBIP",
        tools: ["Exploratory Data Analysis", "Data Visualization", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Statistics"],
        description: [
            "Constructed Python programs to clean and prepare data by handling missing values, formatting inconsistencies, normalization, and binning",
            "Analyzed real-world datasets through Exploratory Data Analysis (EDA) using Pandas, NumPy, and SciPy to uncover patterns and insights",
            "Applied data operation techniques on dataframes to organize, summarize, and interpret data distributions, correlations, and pipelines",
            "Developed and evaluated regression models using Scikit-learn to generate predictions and support data-driven decision-making"
        ]
    },
    // {
    //     id: 6,
    //     image: tableau,
    //     title: "Store API DRF",
    //     category: "DRF",
    //     link: "https://sujit1210.pythonanywhere.com/api/v1/",
    //     tools: ["Excel", "Tableau", "Github"],
    //     description: ["An interactive dashboard project built with Tableau to explore and visualize key sales metrics, customer behavior, and regional performance using historical sales data. This project provides a comprehensive overview of business performance through actionable insights and well-structured visualizations."]
    // },
]


