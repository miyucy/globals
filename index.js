const { spawn } = require("child_process");
const packages = [
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "aws-cdk",
  "babel-eslint",
  "create-react-app",
  "create-react-native-app",
  "diff-so-fancy",
  "eslint",
  "eslint-config-prettier",
  "eslint-config-standard",
  "eslint-plugin-flowtype",
  "eslint-plugin-import",
  "eslint-plugin-jest",
  "eslint-plugin-node",
  "eslint-plugin-prettier",
  "eslint-plugin-promise",
  "eslint-plugin-react",
  "eslint-plugin-sort-imports-es6-autofix",
  "eslint-plugin-standard",
  "eslint-plugin-unicorn",
  "firebase-tools",
  "hygen",
  "javascript-typescript-langserver",
  "js-yaml",
  "marked",
  "node-gyp",
  "prettier",
  "redoc-cli",
  "scsslint",
  "serverless",
  "speedscope",
  "tern",
  "tern-jsx",
  "truffle",
  "tsutils",
  "typescript",
  "typescript-language-server",
  "typescript-styled-plugin",
  "vsce",
  "yarn-deduplicate"
];
const cmd = spawn("yarn", ["global", "add", ...packages]);
const log = (label, data) => {
  `${data}`.split(/\r?\n/).forEach(line => {
    console.log(`${label}: ${line}`);
  });
};
cmd.stdout.on("data", log.bind(null, "stdout"));
cmd.stderr.on("data", log.bind(null, "stderr"));
cmd.on("exit", (code, signal) => {
  if (code !== 0) {
    console.log(`code=${code} signal=${signal}`);
  }
});
