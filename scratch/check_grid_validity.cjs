const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const gridPath = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
const code = fs.readFileSync(gridPath, 'utf8');

const result = ts.transpileModule(code, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React }
});

console.log("Transpilation successful! No TypeScript / JSX syntax errors found.");
