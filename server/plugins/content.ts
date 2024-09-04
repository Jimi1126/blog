//@ts-nocheck
import { createHash } from 'node:crypto';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (!/---[\s\S]*_path[\s\S]*---/.test(file.body)) {
      file.body = file.body.replace(
        /---/,
        '---'
          .concat('\n')
          .concat('_path: ')
          .concat(
            file._id
              .replace('content', '')
              .replace(/([^:]+)\.md$/, (...rest) =>
                createHash('md5').update(rest[0]).digest('hex')
              )
              .split(':')
              .join('/')
          )
      );
    }
  });
});
