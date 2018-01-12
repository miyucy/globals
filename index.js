const { spawn } = require("child_process");
const packages = [
  "@hail2u/gfmtoc",
  "aws-sam-local",
  "create-react-app",
  "create-react-native-app",
  "diff-so-fancy",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-flowtype",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "firebase-tools",
  "flow-typed",
  "js-yaml",
  "jscs",
  "marked",
  "node-gyp",
  "npm",
  "prettier",
  "scsslint",
  "serverless",
  "tern",
  "tern-jsx",
  "typescript"
];
const npm = spawn("npm", ["install", "--global", ...packages]);
const log = (label, data) => {
  `${data}`.split(/\r?\n/).forEach(line => {
    console.log(`${label}: ${line}`);
  });
};
npm.stdout.on("data", log.bind(null, "stdout"));
npm.stderr.on("data", log.bind(null, "stderr"));
npm.on("exit", (code, signal) => {
  if (code !== 0) {
    console.log(`code=${code} signal=${signal}`);
  }
});
