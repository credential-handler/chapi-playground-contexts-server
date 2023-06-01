/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import '@bedrock/core';

import '@bedrock/express';
import '@bedrock/health';

// load config
import './config.js';

// this should always be the last import
import '@bedrock/config-yaml';
