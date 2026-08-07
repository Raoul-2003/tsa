const fs = require('fs');

const files = [
  'assets/data/documents.js',
  'assets/data/orientation.js',
  'assets/data/schools.js',
  'assets/js/animation.js',
  'assets/js/theme.js',
  'assets/js/navigation.js',
  'assets/js/hero.js',
  'assets/js/observer.js',
  'assets/js/faq.js',
  'assets/js/courses.js',
  'assets/js/orientation.js',
  'assets/js/schools.js',
  'assets/js/contact-form.js',
  'assets/js/app.js'
];

let bundle = `// Bundle JS - Bibliothèque TSA\n\n`;

files.forEach(f => {
  let content = fs.readFileSync('d:/tsa/' + f, 'utf8');
  // Enlever les imports
  content = content.replace(/^import\s+.*$/gm, '');
  // Enlever les exports
  content = content.replace(/^export\s+/gm, '');
  
  bundle += `\n/* --- ${f} --- */\n` + content + '\n';
});

// Ecrire le bundle
fs.writeFileSync('d:/tsa/assets/js/bundle.js', bundle, 'utf8');

// Mettre à jour HTML files
['index.html', 'courses.html', 'orientation.html'].forEach(f => {
  let html = fs.readFileSync('d:/tsa/' + f, 'utf8');
  html = html.replace(/<script type="module" src="assets\/js\/app\.js"><\/script>/g, '<script src="assets/js/bundle.js?v=' + Date.now() + '"></script>');
  // Also add cache buster to css to force refresh
  html = html.replace(/href="assets\/css\/style\.css\?v=[^"]+"/g, 'href="assets/css/style.css?v=' + Date.now() + '"');
  fs.writeFileSync('d:/tsa/' + f, html, 'utf8');
  console.log('Updated', f);
});

console.log('Bundle created successfully!');
