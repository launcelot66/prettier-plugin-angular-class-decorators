import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Injectable', () => {
  describe('removeProperties', () => {
    it('should remove empty array properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        source: 'unformatted.ts',
        target: 'formatted.ts',
        formatOptions: {
          RemoveNgDecoratorEmptyArrayProperties: true,
          InjectablePropertiesOrder: ['providedIn', 'useClass', 'useExisting', 'useValue', 'useFactory', 'deps'],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
