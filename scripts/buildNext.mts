import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const nextBin = require.resolve('next/dist/bin/next');
const bundlerArgs = process.platform === 'win32' ? ['--webpack'] : [];

const result = spawnSync(process.execPath, [nextBin, 'build', ...bundlerArgs], {
  stdio: 'inherit',
});

if (result.error) throw result.error;

process.exit(result.status ?? 1);
