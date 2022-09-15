import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { DComponent } from './components/d/d.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'a', component: AComponent, data: { title: 'A' } },
      { path: 'b', component: BComponent, data: { title: 'B' } },
      { path: 'c', component: CComponent, data: { title: 'C' } },
      { path: 'd', component: DComponent, data: { title: 'D' } },
      { path: '**', redirectTo: '' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
