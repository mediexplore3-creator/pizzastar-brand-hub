import JavaScriptObfuscator from 'javascript-obfuscator';
import fs from 'fs';
import path from 'path';

const targetDir = path.join(process.cwd(), '.next', 'static');

/**
 * Aggressively obfuscate a JavaScript file
 * @param {string} filePath 
 */
function obfuscateFile(filePath) {
  if (!filePath.endsWith('.js')) return;

  console.log(`🔒 Obfuscating: ${path.relative(process.cwd(), filePath)}`);

  const code = fs.readFileSync(filePath, 'utf8');
  const obfuscatedData = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: true,
    debugProtectionInterval: 4000,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: true,
    renameGlobals: false, // Set to true for even higher protection but might break some things
    selfDefending: true,
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 5,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 1,
    stringArrayEncoding: ['base64'],
    stringArrayIndexesType: ['hexadecimal-number'],
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 2,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 4,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 1,
    transformObjectKeys: true,
    unicodeEscapeSequence: false
  });

  fs.writeFileSync(filePath, obfuscatedData.getObfuscatedCode(), 'utf8');
}

/**
 * Recursively crawl and obfuscate all JS files
 * @param {string} dir 
 */
function crawl(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      crawl(fullPath);
    } else if (stat.isFile()) {
      obfuscateFile(fullPath);
    }
  }
}

console.log('--- STARTING MAXIMUM OBFUSCATION ---');
if (fs.existsSync(targetDir)) {
  crawl(targetDir);
  console.log('--- OBFUSCATION COMPLETE ---');
} else {
  console.error('❌ .next/static directory not found. Please run "next build" first.');
  process.exit(1);
}
