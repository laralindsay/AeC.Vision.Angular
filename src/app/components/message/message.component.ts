import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type MessageType = 'success' | 'info' | 'warn' | 'error';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() type: MessageType = 'info';

  @Input() icon?: string;
  @Input() showIcon = true;

  @Input() message?: string;

  @Input() width?: string | number;

  defaultIconClasses: Record<MessageType, string> = {
    success: 'pi pi-check-circle',
    info: 'pi pi-info-circle',
    warn: 'pi pi-exclamation-triangle',
    error: 'pi pi-times-circle',
  }

  defaultTextColorClasses: Record<MessageType, string> = {
    success: 'text-success',
    info: 'text-primary',
    warn: 'text-warning',
    error: 'text-danger',
  }

  get defaultIcon() {
    return this.defaultIconClasses[this.type];
  }

  get defaultTextColor() {
    return this.defaultTextColorClasses[this.type];
  }
}
