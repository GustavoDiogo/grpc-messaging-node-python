import fs from 'fs';
import path from 'path';
import { ChannelData } from '../models/channel';

const basePath = path.join(__dirname, '../../data');

if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}
export const persistence = {
  saveChannel(name: string, channel: ChannelData): void {
    const filePath = path.join(basePath, `${name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(channel));
  },

  deleteChannel(name: string): void {
    const filePath = path.join(basePath, `${name}.json`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  },

  loadChannels(): ChannelData[] {
    const channels: ChannelData[] = [];
    const files = fs.readdirSync(basePath);
    files.forEach(file => {
      const filePath = path.join(basePath, file);
      const data = fs.readFileSync(filePath, 'utf-8');
      channels.push(JSON.parse(data));
    });
    return channels;
  },

  saveMessage(channelName: string, message: Buffer): void {
    const filePath = path.join(basePath, `${channelName}.json`);
    const channel = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    channel.messages.push(message.toString('base64'));
    fs.writeFileSync(filePath, JSON.stringify(channel));
  },

  deleteMessage(channelName: string, message: Buffer): void {
    const filePath = path.join(basePath, `${channelName}.json`);
    const channel = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    channel.messages = channel.messages.filter((msg: string) => msg !== message.toString('base64'));
    fs.writeFileSync(filePath, JSON.stringify(channel));
  },
};
