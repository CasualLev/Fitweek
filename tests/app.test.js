import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

describe('app', () => {
  it('serves the home page', async () => {
    const res = await request(createApp()).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('FitWeek');
  });

    it('serves the shared plan module to the browser', async () => {
    const res = await request(createApp()).get('/src/plan.js');
    expect(res.status).toBe(200);
  });
});