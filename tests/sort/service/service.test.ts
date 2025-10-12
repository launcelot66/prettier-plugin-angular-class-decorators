import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Injectable', () => {
  describe('sortProperties', () => {
    it('should sort properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        formatOptions: {
          InjectablePropertiesOrder: ['providedIn', 'useClass', 'useExisting', 'useValue', 'useFactory', 'deps'],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
