export const topProjects = [
  {
    title: 'Reddit Clone',
    description: "A full-stack clone of Reddit, with added functionalities like user auth. Users can create posts, comment, and vote on posts",
    image: '/images/Reddit-Clone.png',
    tags: ['Typescript', 'NextJS', 'Firebase', 'Recoil', 'Chakra'],
    source: 'https://github.com/DeviousLab/reddit-clone',
    visit: 'http://reddit-clone-two-eosin.vercel.app/',
    id: 0,
  },
  {
    title: 'Cryptowatch',
    description: "A real-time Crypto table that is responsive and displays information about every cryptocurrency using the Coingecko API, Firebase backend for user authentication to save their favorite coins.",
    image: '/images/Cryptowatch.png',
    tags: ['Firebase', 'React', 'Tailwind', 'REST API'],
    source: 'https://github.com/DeviousLab/cryptowatch',
    visit: 'https://cryptowatch-52efe.web.app/',
    id: 1,
  },
  {
    title: 'Kanban Board',
    description: "A Kanban board application with a drag-and-drop functionality, and a real-time database integration with MongoDB.",
    image: '/images/Kanban-Board.png',
    tags: ['React', 'MongoDB', 'Express', 'Material UI'],
    source: 'https://github.com/DeviousLab/mern-kanban-board',
    visit: 'https://mern-kanban-board.herokuapp.com/',
    id: 2,
  },
  {
    title: 'Web Chat',
    description: "A real-time web chat application using the CometChat widget and Firebase backend services.",
    image: '/images/Web-Chat.png',
    tags: ['React', 'CometChat', 'Firebase'],
    source: 'https://github.com/DeviousLab/web-chat',
    visit: 'https://web-chat-nine.vercel.app/',
    id: 3,
  },
];

export const allProjects = [
  {
    title: 'Reddit Clone',
    description: "A full-stack clone of Reddit, with added functionalities like user auth. Users can create posts, comment, and vote on posts",
    image: '/images/Reddit-Clone.png',
    tags: ['Typescript', 'NextJS', 'Firebase', 'Recoil', 'Chakra'],
    source: 'https://github.com/DeviousLab/reddit-clone',
    visit: 'http://reddit-clone-two-eosin.vercel.app/',
    id: 0,
  },
  {
    title: 'Cryptowatch',
    description: "A real-time Crypto table that is responsive and displays information about every cryptocurrency using the Coingecko API, Firebase backend for user authentication to save their favorite coins.",
    image: '/images/Cryptowatch.png',
    tags: ['Firebase', 'React', 'Tailwind', 'REST API'],
    source: 'https://github.com/DeviousLab/cryptowatch',
    visit: 'https://cryptowatch-52efe.web.app/',
    id: 1,
  },
  {
    title: 'E-Commerce Website',
    description: "An e-commerce application with modern design and animations, the ability to add and edit products using Sanity CMS, and advanced cart checkout functionalities with Stripe integration.",
    image: '/images/DeviousLab-Store.png',
    tags: ['NextJS', 'Sanity', 'Stripe'],
    source: 'https://github.com/DeviousLab/sanity-next-ecommerce',
    visit: 'https://sanity-next-ecommerce.vercel.app/',
    id: 2,
  },
  {
    title: 'Kanban Board',
    description: "A Kanban board application with a drag-and-drop functionality, and a real-time database integration with MongoDB.",
    image: '/images/Kanban-Board.png',
    tags: ['React', 'MongoDB', 'Express', 'Material UI'],
    source: 'https://github.com/DeviousLab/mern-kanban-board',
    visit: 'https://mern-kanban-board.herokuapp.com/',
    id: 3,
  },
  {
    title: 'Web Chat',
    description: "A real-time web chat application using the CometChat widget and Firebase backend services.",
    image: '/images/Web-Chat.png',
    tags: ['React', 'CometChat', 'Firebase'],
    source: 'https://github.com/DeviousLab/web-chat',
    visit: 'https://web-chat-nine.vercel.app/',
    id: 4,
  },
  {
    title: 'Vacation Home Rental',
    description: "An app built with NextJS that allows users to rent a vacation home using a Supabase PostgreSQL database and Prisma ORM.",
    image: '/images/Vacation-Homes.png',
    tags: ['NextJS', 'Prisma', 'PostgreSQL', 'Tailwind'],
    source: 'https://github.com/DeviousLab/vacation-home-rental',
    visit: 'https://vacation-home-rental.vercel.app/',
    id: 5,
  },
  {
    title: 'Construction Agency Site',
    description: "A static site built using HTML, CSS and JavasScript alongside the Bootstrap V4 framework.",
    image: '/images/Tanmu-PMS.png',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    source: 'https://tanmupms.com/',
    visit: 'https://tanmupms.com/',
    id: 6,
  },
];

//TODO: Make separate component to display all projects, and only show best ones.

export const TimeLineData = [
  { year: 2013, text: 'First experience with programming using Java and BlueJ', },
  { year: 2015, text: 'Went to university for Electrical and Electronic Engineering', },
  { year: 2019, text: 'Switched to software development as a prospective career', },
  { year: 2020, text: 'Full comitted to self learning web development', },
  { year: 2022, text: 'Started to seek developer roles', },
];

export const AccomplishmentData = [
  { number: 1341, text: 'Commits' },
  { number: 80, text: 'Pull Requests', },
  { number: 5, text: 'Issues', },
  { number: 49, text: 'Repos Contributed to', }
];

//TODO Use Github API v4 to get the data
// Commits and repos contributed to {
//   user(login: "deviouslab") {
//     contributionsCollection(
//       from: "2021-01-01T00:00:00Z"
//       to: "2021-12-31T23:59:59Z"
//     ) {
//       contributionCalendar {
//         totalContributions
//       }
//       totalRepositoriesWithContributedCommits
//       commitContributionsByRepository(maxRepositories: 100) {
//         repository {
//           nameWithOwner
//           createdAt
//           stargazerCount
//         }
//         contributions {
//           totalCount
//         }
//       }
//     }
//   }
// }

// Pull Requests {
//   user(login: "deviouslab") {
//     pullRequests(first: 100) {
//       totalCount
//       nodes {
//         createdAt
//         number
//         title
//       }
//       pageInfo {
//         hasNextPage
//         endCursor
//       }
//     }
//   }
// }

// Issues {
//   search(query: "user:deviouslab is:issue", type: ISSUE, last: 100) {
//     issueCount
//     edges {
//       node {
//         ... on Issue {
//           title
//           url
//           createdAt
//           number
//           state

//         }
//       }
//     }
//   }
// }