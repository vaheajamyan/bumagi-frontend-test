import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    @Output() selectedTabIndex: EventEmitter<string> = new EventEmitter();

    selectedTab = '';
    tabs = [
        {
            id: '',
            name: 'Все'
        },
        {
            id: '2',
            name: 'Заблокированные'
        },
        {
            id: '0',
            name: 'Активные'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    changeTab(id: string): void {
        if (this.selectedTab === id) {
            return;
        }
        this.selectedTab = id;
        this.selectedTabIndex.emit(this.selectedTab);
    }

}
