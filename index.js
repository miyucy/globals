var spawn = require('child_process').spawn;
const packages = [
  '@hail2u/gfmtoc',
  'diff-so-fancy',
  'eslint',
  'js-yaml',
  'jscs',
  'marked',
  'node-gyp',
  'npm',
  'prettier',
  'scsslint',
  'tern',
  'typescript',
];
const npm = spawn('npm', ['install', '--global', ...packages]);
const log = (label, data) => {
  `${data}`.split(/\r?\n/).forEach(line => {
    console.log(`${label}: ${line}`);
  });
};

npm.stdout.on('data', log.bind(null, 'stdout'));
npm.stderr.on('data', log.bind(null, 'stderr'));
npm.on('exit', (code, signal) => {
  if (code !== 0) {
    console.log(`code=${code} signal=${signal}`);
  }
});
