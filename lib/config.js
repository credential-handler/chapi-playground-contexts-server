/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import * as bedrock from '@bedrock/core';
import {contextsDir} from '@credential-handler/vc-examples';
import path from 'node:path';

const {config} = bedrock;
config['vc-playground-contexts-server'] = {};

bedrock.events.on('bedrock.configure', async () => {
  await import(path.join(config.paths.config, 'server.js'));
});

// Do not log full serialized error on server
config.express.jsonErrorLevel = 'summary';

config.express.static.push({
  route: '/examples',
  path: contextsDir,
  cors: true
});
