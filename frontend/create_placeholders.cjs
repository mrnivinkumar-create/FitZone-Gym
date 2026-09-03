const fs = require('fs');
const path = require('path');

const publicPages = ['About', 'Programs', 'Membership', 'Trainers', 'Calculators', 'Transformations', 'AICoach', 'Blog', 'Contact', 'FAQ', 'Privacy', 'Terms', 'NotFound'];
const authPages = ['Login', 'Register'];
const dashboardPages = ['MemberDashboard', 'AdminDashboard'];

const createComponent = (name, dir) => {
  const content = `import { motion } from 'framer-motion';

const ${name} = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold uppercase text-white mb-4">${name === 'NotFound' ? '404 - Page Not Found' : name.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <p className="text-zinc-400">${name === 'NotFound' ? 'The page you are looking for does not exist.' : 'This page is currently under construction. Check back soon!'}</p>
      </motion.div>
    </div>
  );
};

export default ${name};`;

  fs.mkdirSync(path.join('c:/Users/admin/Documents/FitZone gym/frontend/src/pages', dir), { recursive: true });
  fs.writeFileSync(path.join('c:/Users/admin/Documents/FitZone gym/frontend/src/pages', dir, `${name}.tsx`), content);
};

publicPages.forEach(p => createComponent(p, 'public'));
authPages.forEach(p => createComponent(p, 'auth'));
dashboardPages.forEach(p => createComponent(p, 'dashboard'));
