import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './animation/animation.component';
import { AttributeComponent } from './directive/attribute/attribute.component';
import { StructuralComponent } from './directive/structural/structural.component';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';
import { GuardingComponent } from './guarding/guarding.component';
import { PipeComponent } from './pipe/pipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { ObservableComponent } from './observable/observable.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'animation', component: AnimationComponent },
  { path: 'attribute-directive', component: AttributeComponent },
  { path: 'http', component: HttpComponent },
  { path: 'structural-directive', component: StructuralComponent },
  { path: 'deployment', component: DeploymentComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'guarding', component: GuardingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
