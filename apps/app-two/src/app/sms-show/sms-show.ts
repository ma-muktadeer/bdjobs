import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestSocket } from 'libs/shared-ui/src/services/test-socket';
@Component({
  selector: 'app-sms-show',
  imports: [FormsModule],
  providers: [TestSocket],
  templateUrl: './sms-show.html',
  styleUrl: './sms-show.css',
})
export class SmsShow {
  sms = signal<{ message: string, senderId: string }[]>([]);
  message: string = '';
  constructor(private testSocket: TestSocket) {

  }

  ngOnInit() {
    const message = this.testSocket.getMessage();
    message.subscribe((data) => {
      console.log('App Two received:', data);

      const senderId = data.senderId;
      const content = data.message;
      const who = senderId === this.getMyId() ? 'Me' : senderId;

      if (senderId) {
        this.sms.update((value) => [...value, { message: `${who} ${content.message}`, senderId }]);
      } else {
        this.sms.update((value) => [...value, { message: `${who} ${JSON.stringify(data)}`, senderId: '' }]);
      }
    });
  }

  sendMessage() {
    this.testSocket.sendMessage({ message: this.message });
    this.message = '';
  }

  getMyId() {
    return this.testSocket.getSocketId();
  }
}
