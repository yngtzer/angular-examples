import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Individual Modules
import { ObservableRoutingModule } from './observable/observable-routing.module';
import { AppRoutingModule } from './app-routing.module';

// Ng2-Semantic-UI
import { SuiModule, SuiSidebarModule, SuiAccordionModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './animation/animation.component';
import { AttributeComponent } from './directive/attribute/attribute.component';
import { StructuralComponent } from './directive/structural/structural.component';
import { CodeSectionDirective } from './directive/attribute/code-section.directive';
import { HighlightDirective } from './directive/attribute/highlight.directive';
import { UnlessDirective } from './directive/structural/unless.directive';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';
import { GuardingComponent } from './guarding/guarding.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ReversePipe } from './pipe/reverse.pipe';
import { ShortenPipe } from './pipe/shorten.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeploymentComponent } from './deployment/deployment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimationComponent,
    AttributeComponent,
    StructuralComponent,
    CodeSectionDirective,
    HighlightDirective,
    UnlessDirective,
    HttpComponent,
    RoutingComponent,
    GuardingComponent,
    PipeComponent,
    FilterPipe,
    ReversePipe,
    ShortenPipe,
    SortPipe,
    PageNotFoundComponent,
    DeploymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SuiModule,
    SuiSidebarModule,
    SuiAccordionModule,
    ObservableRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log(`Routes: ${JSON.stringify(router.config, undefined, 2)}`);
  }
}
