import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Component', () => {
  describe('sortProperties', () => {
    it('should sort properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        formatOptions: {
          ComponentPropertiesOrder: [
            'standalone',
            'jit',
            'preserveWhitespaces',
            'selector',
            'exportAs',
            'template',
            'styles',
            'styleUrl',
            'styleUrls',
            'encapsulation',
            'changeDetection',
            'providers',
            'viewProviders',
            'host',
            'schemas',
            'animations',
            'inputs',
            'outputs',
            'queries',
            'hostDirectives',
          ],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
