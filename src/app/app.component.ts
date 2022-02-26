import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    customer: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.customer = x);
    }

    logout() {
        this.accountService.logout();
    }
}