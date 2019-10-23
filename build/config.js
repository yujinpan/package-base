const banner =
  '/*!\n' +
  ` * common-package v${require('../package.json').version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} yujinpan\n` +
  ' * Released under the MIT License.\n' +
  ' */\n';

const outputDir = 'dist';

// multi package
const multiOption = [
  {
    input: 'src/index.ts',
    output: createOutputOptions('index')
  },
  {
    input: 'src/index-js.js',
    output: createOutputOptions('index-js')
  }
];

function createOutputOptions(name) {
  return [
    {
      file: `${outputDir}/${name}.common.js`,
      format: 'cjs'
    },
    {
      file: `${outputDir}/${name}.esm.js`,
      format: 'es'
    }
  ];
}

module.exports = {
  banner,
  multiOption,
  outputDir
};
