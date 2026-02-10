import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class TestSocket {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000', {
      transports: ['websocket', 'polling'],
    });
    this.socket.on('connect', () => {
      console.log('WebSocket connection opened');
    });
    this.socket.on('message', (data) => {
      console.log('WebSocket message received:', data);
    });
    this.socket.on('disconnect', () => {
      console.log('WebSocket connection closed');
    });
    this.socket.on('error', (error) => {
      console.log('WebSocket error:', error);
    });
  }

  sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  getMessage(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('message', (data) => {
        console.log('WebSocket message received:', data);
        observer.next(data);
      });
    });
  }

  closeConnection() {
    this.socket.disconnect();
  }

  getSocketId() {
    return this.socket.id;
  }

  // private socket: WebSocket;

  // constructor() {
  //   this.socket = new WebSocket('http://localhost:3000', ['websocket', 'polling']);
  //   this.socket.onopen = () => {
  //     console.log('WebSocket connection opened');
  //   };
  //   this.socket.onmessage = (event) => {
  //     console.log('WebSocket message received:', event.data);
  //     this.socket.send(event.data);
  //   };
  //   this.socket.onclose = () => {
  //     console.log('WebSocket connection closed');
  //   };
  //   this.socket.onerror = (error) => {
  //     console.log('WebSocket error:', error);
  //   };
  // }

  // sendMessage(message: string) {
  //   this.socket.send(message);
  // }

  // getMessage() {
  //   return this.socket.onmessage;
  // }

  // getSocketId() {
  //   return this.socket.url;
  // }

  // closeConnection() {
  //   this.socket.close();
  // }
}
