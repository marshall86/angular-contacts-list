import { Component, Input } from '@angular/core';
import { Contacts } from 'src/app/services/interfaces/IContacts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() contacts: Contacts[] = [];
  
  constructor() { }
}
