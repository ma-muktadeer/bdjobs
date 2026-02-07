import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestSocket } from 'libs/shared-ui/src/services/test-socket';

@Component({
  selector: 'app-sms',
  imports: [FormsModule],
  providers: [TestSocket],
  templateUrl: './sms.html',
  styleUrl: './sms.css',
})
export class Sms {
  message: string = '';
  constructor(private testSocket: TestSocket) {}
  sendMessage() {
    this.testSocket.sendMessage(this.message);
  }
}
