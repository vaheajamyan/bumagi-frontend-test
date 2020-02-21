import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {fromEvent} from 'rxjs';
import {ISelectOption} from 'src/app/models/selectOptionModel';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Output() changeValue: EventEmitter<number> = new EventEmitter();
  openDropDown = false;
  @Input() selectedValue: number;
  @Input() placeholder = '';
  @Input() options: ISelectOption[] = [];
  selectedOption: ISelectOption = null;

  constructor() {
  }

  ngOnInit(): void {
    if (this.selectedValue != null) {
      this.options.map(o => {
        if (this.selectedValue === o.value) {
          this.selectOption(o);
        }
      });
    }
    this.backDropClick();
  }

  backDropClick() {
    fromEvent(document.body, 'click').subscribe((e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.dropdown__wrapper')) {
        this.openDropDown = false;
      }
    });
  }

  selectOption(option) {
    this.selectedValue = option.value;
    this.selectedOption = option;
    this.openDropDown = false;
    this.changeValue.emit(option.value);
  }

}
