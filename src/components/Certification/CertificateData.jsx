import excel from "../../assets/certificates/excel.jpg"
import dax from "../../assets/certificates/dax.jpg"
import google from "../../assets/certificates/google.jpg"
import sql from "../../assets/certificates/sql.jpg"
import python from "../../assets/certificates/python.jpg"
import tableau from "../../assets/certificates/tableau.jpg"
import powerbiFinance from "../../assets/certificates/finance-powerbi.jpg"

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
        image: powerbiFinance,
        title: "BI Essentials for Finance Analysts (Power BI Edition)",
        category: "certificate",
        link: "https://www.coursera.org/account/accomplishments/specialization/NWTWPZBUI7GV",
        tools: ["Financial Analysis", "Power BI", "Microsoft Excel", "Expressions (DAX)", "Data Modeling", "Business Intelligence"],
        description: [
            "Developed advanced data analysis skills by manipulating, transforming, and visualizing data using Microsoft Power BI",
            "Integrated and sourced data directly from SQL databases, ensuring accuracy and efficiency in reporting",
            "Designed and automated financial statement dashboards (Income Statement, Balance Sheet, and Cash Flow) using Power BI and Excel",
            "Compared and evaluated the capabilities of Excel and Power BI for financial reporting and automation tasks",
            "Applied practical data modeling and DAX techniques to create dynamic, real-time reports",
            "Gained hands-on experience in connecting, transforming, and visualizing business data from multiple sources",
            "Completed a financial statement analysis case study, demonstrating end-to-end BI implementation and analytical interpretation"
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
    {
        id: 6,
        image: tableau,
        title: "Advanced Tableau Specialization",
        category: "DRF",
        link: "https://www.coursera.org/account/accomplishments/specialization/4EG8JSN9SLL4",
        tools: ["Tableau", "Table Calculations", "LOD Calculations", "Data Modeling", "Data Transformation", "ETL", "Data Modeling", "Star Schema"],
        description: [
            "Developed the ability to generate data-driven insights that address real business questions.",
            "Mastered Table Calculations, Level of Detail (LOD) Calculations, and Data Modeling to handle complex analytical challenges.",
            "Learned how to combine multiple data sources, build relationships, and ensure accurate data representation in dashboards.",
            "Applied advanced analytical and visualization techniques to design a comprehensive Trading Dashboard, showcasing performance, trends, and KPIs in an interactive format."
        ]
    },
]


