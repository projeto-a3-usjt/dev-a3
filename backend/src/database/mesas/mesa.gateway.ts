import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('mesa01')
  webSocketMesa01(client: Socket, payload: string): void {
    console.log(payload);
    console.log(client.id);
    this.server.emit('msgToGarcom', payload, client.id);
  }

  @SubscribeMessage('mesa02')
  webSocketMesa02(client: Socket, payload: string): void {
    console.log(payload);
    console.log(client.id);
  }

  @SubscribeMessage('mesa03')
  webSocketMesa03(client: Socket, payload: string): void {
    console.log(payload);
    console.log(client.id);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
