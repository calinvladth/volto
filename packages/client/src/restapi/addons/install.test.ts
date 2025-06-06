import { setup, teardown } from '../../utils/test';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import PloneClient from '../../client';

const cli = PloneClient.initialize({
  apiPath: 'http://localhost:55001/plone',
});

await cli.login({ username: 'admin', password: 'secret' });

beforeEach(async () => {
  await setup();
});

afterEach(async () => {
  await teardown();
});

describe('Install Addon', () => {
  test('Successful', async () => {
    const addonId = '/plone.app.iterate';

    const result = await cli.installAddon({ addonId });
    expect(result.status).toBe(204);
  });
});
