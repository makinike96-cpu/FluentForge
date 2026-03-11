const fs = require('fs');
const path = require('path');

const structure = [
  'app/globals.css',
  'app/layout.tsx',
  'app/page.tsx',
  'app/privacy/page.tsx',
  'app/portal-4821/page.tsx',

  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Questionnaire.tsx',
  'components/ContactForm.tsx',
  'components/ThankYou.tsx',
  'components/LeadsTable.tsx',
  'components/AdminLogin.tsx',

  'lib/supabase.ts',

  '.env.local.example',
  'package.json',
  'tailwind.config.ts',
  'tsconfig.json',
  'next.config.mjs',
  'postcss.config.mjs',
  'README.md'
];

function createStructure(files) {
  files.forEach((file) => {
    const dir = path.dirname(file);

    if (dir !== '.' && !fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, '');
      console.log('Created: ' + file);
    } else {
      console.log('Already exists: ' + file);
    }
  });
}

createStructure(structure);
console.log('\nProject structure ready!');