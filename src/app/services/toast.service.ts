import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api/message';

@Injectable()
export class ToastService {

  readonly DEFAULT_TIMEOUT = 5000;

  constructor(
    private messageService: MessageService
  ) { }

  success(title: string, detail?: string, timeout: number = this.DEFAULT_TIMEOUT) {
    this.show(title, detail, 'success', timeout);
  }

  info(title: string, detail?: string, timeout: number = this.DEFAULT_TIMEOUT) {
    this.show(title, detail, 'info', timeout);
  }

  warn(title: string, detail?: string, timeout: number = this.DEFAULT_TIMEOUT) {
    this.show(title, detail, 'warn', timeout);
  }

  error(title: string, detail?: string, timeout: number = this.DEFAULT_TIMEOUT) {
    this.show(title, detail, 'error', timeout);
  }

  show(title: string): void;
  show(title: string, detail?: string): void
  show(title: string, detail?: string, severity?: string): void
  show(title: string, detail?: string, severity?: string, timeout?: number): void
  show(message: Message): void
  show(titleOrMessage: string | Message, detail?: string, severity?: string, timeout: number = this.DEFAULT_TIMEOUT): void {
    const message: Message = (typeof titleOrMessage === 'object') ? titleOrMessage : {
      severity,
      summary: titleOrMessage,
      detail,
      life: timeout,
      closable: true,
    };
    this.messageService.add(message);
  }
}
