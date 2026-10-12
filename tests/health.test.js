import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

const fakeLog = () => ({ info: vi.fn(), error: vi.fn() });

describe('monitoring', () => {
  it('GET /health reports ok with uptime and timestamp', async () => {
    const res = await request(createApp({ log: fakeLog() })).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(typeof res.body.uptime).toBe('number');
    expect(Number.isNaN(Date.parse(res.body.timestamp))).toBe(false);
  });

  it('logs each request with method, path, status and duration', async () => {
    const log = fakeLog();
    await request(createApp({ log })).get('/health');
    expect(log.info).toHaveBeenCalledWith(expect.stringMatching(/^GET \/health 200 \d+ms$/));
  });

  it('returns a 500 JSON response and logs unhandled errors', async () => {
    const log = fakeLog();
    const res = await request(createApp({ log })).get('/debug/error');
    expect(res.status).toBe(500);
    expect(res.body.status).toBe('error');
    expect(log.error).toHaveBeenCalled();
  });
});