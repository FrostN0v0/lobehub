import { describe, expect, it } from 'vitest';

import { gptImage1Schema, gptImage2Schema, gptImage25Schema } from '../imageParameters';

describe('GPT Image parameter schemas', () => {
  it.each([
    ['GPT Image 1', gptImage1Schema],
    ['GPT Image 2', gptImage2Schema],
    ['GPT Image 2.5', gptImage25Schema],
  ])('%s accepts up to 16 reference images', (_name, schema) => {
    expect(schema.imageUrls?.maxCount).toBe(16);
  });
});
