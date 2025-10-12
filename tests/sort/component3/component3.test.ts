import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Component', () => {
  describe('sortProperties', () => {
    it('should sort properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        formatOptions: {
          ComponentPropertiesOrder: [
            'selector',
            'templateUrl',
            'styleUrls',
            'encapsulation',
            'changeDetection',
            'providers',
            'viewProviders',
            'host',
            'hostDirectives',
          ],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
