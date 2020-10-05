import * as yargs from 'yargs';
import { spawn } from 'child_process';
import { DEFAULT_APP_ENV } from './app-env';

const parseNgArgs = () => process.argv.filter((arg, index) => index > 1 && Object.keys(DEFAULT_APP_ENV).every(key => !arg.includes(key)));

const ngArgs = parseNgArgs();

const argv = { ...DEFAULT_APP_ENV, ...yargs.argv};

const childProcess = spawn('yarn', ['start', ...ngArgs], {
  stdio: 'inherit',
  env: { ...process.env, APP_ENV: JSON.stringify(argv) },
  shell: true,
});