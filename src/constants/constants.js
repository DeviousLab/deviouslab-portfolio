export const projects = [
  {
    title: 'Cryptowtch',
    description: "A real-time Crypto table that is responsive and shows lots of information about every cryptocurrency using the Coingecko API, with a Firebase backend for user authentication to save their favorite coins.",
    image: '/images/Cryptowatch.png',
    tags: ['Firebase', 'React', 'Tailwind', 'REST API'],
    source: 'https://github.com/DeviousLab/cryptowatch',
    visit: 'https://cryptowatch-52efe.web.app/',
    id: 0,
  },
  {
    title: 'E-Commerce Website',
    description: "An e-commerce application with modern design and animations, the ability to add and edit products using Sanity CMS, and advanced cart checkout functionalities with Stripe integration.",
    image: '/images/DeviousLab-Store.png',
    tags: ['NextJS', 'Sanity', 'Stripe'],
    source: 'https://github.com/DeviousLab/sanity-next-ecommerce',
    visit: 'http://sanity-next-ecommerce.vercel.app/',
    id: 1,
  },
  {
    title: 'WebRTC App',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: '/images/3.jpg',
    tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/4.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2013, text: 'First experience with programming using Java and BlueJ', },
  { year: 2015, text: 'Went to university for Electrical and Electronic Engineering', },
  { year: 2019, text: 'Switched to software development as a prospective career', },
  { year: 2020, text: 'Full comitted to self learning web development', },
  { year: 2022, text: 'Started to seek developer roles', },
];

export const AccomplishmentData = [
  { number: 1256, text: 'Commits' },
  { number: 83, text: 'Pull Requests', },
  { number: 4, text: 'Issues', },
  { number: 53, text: 'Repos Contributed to', }
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