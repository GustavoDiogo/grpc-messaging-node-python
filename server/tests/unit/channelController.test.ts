import { channelController } from '../../src/controllers/channelController';
import { ChannelType } from '../../src/proto/messaging_pb';

describe('ChannelController', () => {
  const controller = channelController; 

  beforeEach(() => {
    controller.removeChannel('test-channel');
  });
  
  test('should create a new channel', () => {
    const request = { name: 'test-channel', type: ChannelType.SIMPLE };
    const result = controller.createChannel(request);
    expect(result).toBe(true);
  });

  test('should not create a duplicate channel', () => {
    const request = { name: 'test-channel', type: ChannelType.SIMPLE };
    controller.createChannel(request);
    const result = controller.createChannel(request);
    expect(result).toBe(false);
  });

  test('should remove a channel', () => {
    const request = { name: 'test-channel', type: ChannelType.SIMPLE };
    controller.createChannel(request);
    const result = controller.removeChannel('test-channel');
    expect(result).toBe(true);
  });

  test('should list channels', () => {
    const request1 = { name: 'channel-1', type: ChannelType.SIMPLE };
    const request2 = { name: 'channel-2', type: ChannelType.MULTIPLE };
    controller.createChannel(request1);
    controller.createChannel(request2);
    const result = controller.listChannels();
    expect(result.size).toBe(2);
  });

  test('should publish a message', () => {
    const request = { name: 'test-channel', type: ChannelType.SIMPLE };
    controller.createChannel(request);
    const result = controller.publishMessage('test-channel', Buffer.from('test message'));
    expect(result).toBe(true);
  });
});
