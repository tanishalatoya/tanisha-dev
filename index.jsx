import { createRoot } from 'react-dom/client';
import App from './src/App/App';

const container = document.getElementById('container');

const root = createRoot(container);

root.render(<App />);

console.log(
  "Hiya 👋, \n\nThanks for stopping by my page! I hope you're able to glean some insight into my passion for beign a software developer from what you've seen here. I am currently interested in a landing a new role with a preference for fullstack or frontend roles. Feel free to reach out to me if you think I'd be a good fit for your company or just to chat about software! \n\nI can be reached using any of the links of my page or via: tanisha.davey2@gmail.com. \n\nFeel free to mention that you saw this console.log!"
);
