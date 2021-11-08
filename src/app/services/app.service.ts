import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    isSidebarPinned = true;
    isSidebarToggeled = true;

    constructor() { }

    toggleSidebar() {
        this.isSidebarToggeled = ! this.isSidebarToggeled;
    }

    toggleSidebarPin() {
        this.isSidebarPinned = ! this.isSidebarPinned;
    }

    getSidebarStat() {
        return {
            isSidebarPinned: this.isSidebarPinned,
            isSidebarToggeled: this.isSidebarToggeled
        };
    }
}