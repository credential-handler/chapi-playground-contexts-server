/*!
 *  Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import {config} from '@bedrock/core';

// Bedrock-https-agent configs for development
config['https-agent'].rejectUnauthorized = false;
