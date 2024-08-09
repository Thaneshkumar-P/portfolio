import HRA1 from 'public/projectImages/Screenshot (574).png'
import HRA2 from 'public/projectImages/HRA2.png'
import HRA3 from 'public/projectImages/HRA3.png'
import HRA4 from 'public/projectImages/HRA4.png'
import PMT1 from 'public/projectImages/Screenshot (701).png'
import PMT2 from 'public/projectImages/Screenshot (703).png'
import PMT3 from 'public/projectImages/Screenshot (704).png'
import PMT4 from 'public/projectImages/Screenshot (705).png'
import POTF from 'public/projectImages/Screenshot (706).png'
import BA1 from 'public/projectImages/Screenshot (708).png'
import BA2 from 'public/projectImages/Screenshot (709).png'
import BA3 from 'public/projectImages/Screenshot (710).png'
import BA4 from 'public/projectImages/Screenshot (711).png'

let projects = [
  {
    img: PMT1,
    displayImg: [PMT1, PMT2, PMT3, PMT4],
    name: 'Project Management System',
    dLink: 'https://qms-frontend-two.vercel.app/',
    status: 'In-Progress',
    git: 'https://github.com/Thaneshkumar-P/QMS-Portal-frontend',
    type: 'Freelance',
    tech: ['React', 'Express', 'GraphQL', 'MongoDB', 'TailwindCSS', 'Materail UI', 'JWT', "Redux"]
  },
  {
    img: BA1,
    displayImg: [BA1, BA2, BA3, BA4],
    name: 'Blogs Application',
    dLink: 'Not Deployed',
    status: 'Completed',
    git: 'https://github.com/Thaneshkumar-P/Blogs_Application',
    type: 'Personal',
    tech: ('Ruby on Rails,Html,CSS,Javascript,RSpec,SQLite3').split(',')
  },
  {
    img: HRA1,
    displayImg: [HRA1, HRA2, HRA3, HRA4],
    name: 'Health Record Application',
    dLink: 'Not Deployed',
    status: 'Completed',
    git: 'https://github.com/FinalYearProject-Team-11/BLOCKCHAIN-DRIVEN-HEALTH-RECORD-STORAGE-AND-DISEASE-PREDICTION-USING-MACHINE-LEARNING',
    type: 'Personal',
    tech: ['React', 'Solidity', 'Remix IDE', 'Ganache', 'IPFS', 'Python Flask', 'Web3']
  },
  {
    img: POTF,
    displayImg: [],
    name: 'Portfolio',
    dLink: '',
    status: 'Completed',
    git: '',
    type: 'Personal',
    tech: ['Next.Js', 'TailwindCSS']
  },
]


export { projects }