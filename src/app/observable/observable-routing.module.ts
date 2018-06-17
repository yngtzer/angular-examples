import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ng2-Semantic-UI
import { SuiModule, SuiAccordionModule } from 'ng2-semantic-ui';

// Components
import { ObservableComponent } from './observable.component';
import { BaseComponent } from './base/base.component';
import { UserComponent } from './user/user.component';

// Service
import { UserService } from './user.service';

const observableRoutes: Routes = [
  { path: 'observable', component: ObservableComponent, children: [
    { path: 'user/:id', component: UserComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(observableRoutes),
    CommonModule,
    SuiModule,
    SuiAccordionModule
  ],
  declarations: [
    ObservableComponent,
    BaseComponent,
    UserComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    RouterModule
  ]
})
export class ObservableRoutingModule { }
