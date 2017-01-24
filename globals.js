var spawn = require('child_process').spawn;
const packages = [
  'eslint', '@hail2u/gfmtoc',
  'js-yaml', 'jscs', 'marked',
  'node-gyp', 'scsslint',
  'tern', 'yarn',
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
