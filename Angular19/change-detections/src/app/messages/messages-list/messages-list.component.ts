import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit{
  //messages = input.required<string[]>();

  private messageService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);


 // messages = this.messageService.allMessages;
 messages: string [] = [];

//  get messages() {
//   return this.messageService.allMessages;

//  }

  ngOnInit() {
    const subscription = this.messageService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.cdRef.markForCheck();
    });

    this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
    })
  }
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
