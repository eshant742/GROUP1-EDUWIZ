import { category_1, category_2, category_3, category_4, stockmarket, math } from "../assets/images";
import { course_1, maths, stocks, pharma} from "../assets/images";



const cardData = [
  {
    id: 1,
    title: "Software Engineer Programs",
    img: category_1,
    color: "green",
    desc: "The Software Engineering program delves into advanced software design, development, and lifecycle management.",
    url:"https://www.coursera.org/learn/introduction-to-software-engineering"
  },
  {
    id: 2,
    title: "App Development Programs",
    img: category_2,
    color: "red",
    desc: "The App Development program focuses on creating robust, user-friendly mobile and web applications",
    url:"https://www.coursera.org/professional-certificates/meta-android-developer    "

  },
  {
    id: 3,
    title: "UI/UX Design",
    img: category_3,
    color: "blue",
    desc: "The UI/UX Design program emphasizes crafting intuitive and engaging user interfaces and experiences.",
    url:"https://www.interaction-design.org/courses/mobile-ux-design-course-the-beginners-guide?gad_source=1&gclid=EAIaIQobChMIg4b0m5OkhgMVucBMAh36kQ86EAAYBCAAEgLZdPD_BwE    "

  },
  {
    id: 4,
    title: "Pharma Course",
    img: category_4,
    color: "yellow",
    desc: "The Pharma course provides comprehensive knowledge of pharmaceutical sciences, including drug development, pharmacology, and clinical trials. ",
    url:"https://pharmcourse.com/mena/en    "

  },
  {
    id: 5,
    title: "Stock Market Programs",
    img: stockmarket,
    color: "purple",
    desc: "Stock Market programs offer in-depth understanding of financial markets, trading strategies, and investment analysis. ",
    url:"https://www.coursera.org/learn/financial-markets-global    "

  },
  {
    id: 6,
    title: "Mathematics Course   /Programs",
    img: math,
    color: "pink",
    desc: "Mathematics programs provide a rigorous foundation in theoretical and applied mathematics",
    url:"https://oxfordsummercourses.com/?utm_term=maths%20summer%20programs&utm_campaign=India_generic_broad&utm_source=google&utm_medium=cpc&gad_source=1&gclid=EAIaIQobChMIyvvPl5SkhgMVm_RMAh3N1w-xEAAYASAAEgJpC_D_BwE "
  }
];


const course = [
  {
    id: 1,
    title: "Build a Modern Website Using HTML, CSS, and JavaScript",
    rating: 4.5,
    price: 4000.00,
    img: course_1,
    level: "Advanced",
    heading: "Advanced JavaScript",
    instructor: "Abdul Bari",
    course_decs: `- Cover fundamental HTML tags and CSS styling techniques for layout, typography, and interactivity under the expert guidance of Safiya.A expert software developer.
    - Explore in-depth topics and practical applications to enhance your tdevelopment skills .
    - Benefit from Medha's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in software development.
    - Develop a comprehensive understanding of asynchronous JavaScript, form validation, and AJAX to create interactive and dynamic web experiences..
    - Gain practical experience through hands-on exercises.
    - Receive personalized guidance and feedback from Safiya to refine your web development skills and achieve your technical goals `,
    course_structure: [`HTML and CSS basics.
    - Introduce core JavaScript concepts like DOM manipulation, and event handling.
    - Explore advanced CSS features like flexbox, grid, and media queries for creating responsive layouts.
    - Teach asynchronous JavaScript, form validation, and AJAX to create interactive and dynamic web experiences.`],
    videoId1: 'https://youtu.be/htznIeWKgg8?si=2RK_9YZmPFf9RzQl',
    videoId2: 'https://youtu.be/kUMe1FH4CHE?si=jj_T5cNkVenmydid',

  },
  {
    id: 2,
    title: "Get the Certificate in Pharmaceuticals",
    rating: 4.5,
    price: 4000.00,
    img: pharma,
    level: "Intermediate",
    heading: "pharma advance course ",
    instructor: "Medha Bhardwaj",
    course_decs: `- Explore advanced topics and practical applications to deepen your understanding and proficiency in pharmaceutical sciences.
    -Harness Dr.Patel's wealth of expertise as he imparts invaluable insights and real-world examples derived from years of hands-on experience in the field.
    -Master the fundamentals of drug discovery, development, regulation, and pharmacology through comprehensive study and practical exercises.`,
    course_structure: [`Foundational Principles in Pharmaceutical Sciences.
    -Advanced Applications in Pharma Technologies
    -Evaluation, Optimization, and Deployment Strategies`],
    videoId1: 'https://youtu.be/CHJsaq2lNjU?si=4aKT8wzGfzDUjGvC',
    videoId2: 'https://youtu.be/JxK5rZxbyQY?si=E3fVDLHTENGfH8PC',

  },
  {
    id: 3,
    title: "Learn how make money in Stock Market in just 7days",
    rating: 4.9,
    price: 5000.00,
    img: stocks,
    level: "Advanced",
    heading: "Advanced Stock Market Trading",
    instructor: "Hima Bindu",
    course_decs: `- Learn advanced techniques and strategies for successful stock market trading under the expert guidance of Hima Bindu, an experienced software engineer turned stock market trader.
    - Explore in-depth topics and practical applications to enhance your trading skills and maximize profits in the stock market.
    - Benefit from Hima Bindu's wealth of experience and expertise as she shares valuable insights and real-world examples from her extensive career in stock market trading.
    - Develop a comprehensive understanding of technical analysis, fundamental analysis, risk management, and portfolio diversification to make informed trading decisions.
    - Gain practical experience through hands-on exercises, case studies, and simulated trading sessions to apply theoretical concepts to real-world trading scenarios.
    - Receive personalized guidance and feedback from Hima Bindu to refine your trading strategies and achieve your financial goals in the stock market.`,
    course_structure: [`Overview of financial markets
    - Introduction to stock exchanges and trading platforms
    - Understanding market participants and their roles`],
    videoId1: 'https://youtu.be/p7HKvqRI_Bo?si=qiejLS-hm1OA7qP_',
    videoId2: 'https://youtu.be/fzp02ud0AHc?si=e_Wf7YTdiPV4GGte',


  },
  {
    id: 4,
    title: "Learn class 10th maths in just one minute",
    rating: 4.5,
    price: 2000.00,
    img: maths,
    level: "Beginner",
    heading: "Learn basics of mathematics",
    instructor: "Hima Bindu",
    course_decs: `-  Dive deep into fundamental mathematical concepts and practical applications to build a strong foundation for further learning.
   -Benefit from Professor Smith's wealth of teaching experience as he elucidates key concepts with clear explanations and real-world examples.
  -Develop a comprehensive understanding of arithmetic operations, algebraic expressions, geometry, and data interpretation to excel in class 10 mathematics examinations.`,
    course_structure: [`Covering arithmetic, algebra, geometry, and data interpretation.
    - Exploring real-world examples to reinforce understanding.
    - Receive tailored support and engage in hands-on exercises to master concepts effectively.`],
    videoId1: 'https://youtu.be/__Uw1SXPW7s?si=njtKP1M9OMFW88y3',
    videoId2: 'https://youtu.be/mvOkMYCygps?si=CNRFE6gcxgr2mKBu',
    

  }
]




export {
  cardData,
  course,
};