import { Component, signal } from '@angular/core';
import { TestSocket } from 'libs/shared-ui/src/services/test-socket';
@Component({
  selector: 'app-sms-show',
  imports: [],
  providers: [TestSocket],
  templateUrl: './sms-show.html',
  styleUrl: './sms-show.css',
})
export class SmsShow {
  sms = signal('');
  constructor(private testSocket: TestSocket) {

  }

  ngOnInit() {
    const message = this.testSocket.getMessage();
    console.log(message);
    message.subscribe((data) => {
      this.sms.set(data.message);
    });
  }
}
