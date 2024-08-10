import fs from 'fs';
import path from 'path';
import { persistence } from '../../src/utils/persistence';

describe('Persistence', () => {
  test('should save a channel', () => {
    const channel = { name: 'test-channel', type: 0, messages: [], subscribers: [] };
    persistence.saveChannel('test-channel', channel);
    const filePath = path.join(__dirname, '../../data/test-channel.json');
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(true);
    fs.unlinkSync(filePath); // Cleanup
  });

  test('should load channels', () => {
    const channel = { name: 'test-channel', type: 0, messages: [], subscribers: [] };
    persistence.saveChannel('test-channel', channel);
    const channels = persistence.loadChannels();
    expect(channels.length).toBeGreaterThan(0);
    const filePath = path.join(__dirname, '../../data/test-channel.json');
    fs.unlinkSync(filePath); // Cleanup
  });

  test('should delete a channel', () => {
    const channel = { name: 'test-channel', type: 0, messages: [], subscribers: [] };
    persistence.saveChannel('test-channel', channel);
    persistence.deleteChannel('test-channel');
    const filePath = path.join(__dirname, '../../data/test-channel.json');
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(false);
  });

  test('should save and delete a message', () => {
    const channel = { name: 'test-channel', type: 0, messages: [], subscribers: [] };
    persistence.saveChannel('test-channel', channel);
    const message = Buffer.from('test message');
    persistence.saveMessage('test-channel', message);
    const channels = persistence.loadChannels();
    expect(channels.find((curChannel) => curChannel.name === 'test-channel')?.messages.length).toBe(1);

    persistence.deleteMessage('test-channel', message);
    const updatedChannels = persistence.loadChannels();
    expect(updatedChannels.find((curChannel) => curChannel.name === 'test-channel')?.messages.length).toBe(0);
    const filePath = path.join(__dirname, '../../data/test-channel.json');
    fs.unlinkSync(filePath); // Cleanup
  });
});
