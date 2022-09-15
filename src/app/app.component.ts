import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public navigationLinks: Array<Link> = [];
  public currentRoute: string = '';
  public currentRouteIndex: number = 0;

  constructor(private readonly router: Router) {}

  public ngOnInit(): void {
    // dynamically reading the routes from the router config
    // (could also be done just statically in the template)
    this.navigationLinks = this.router.config
      .filter((r) => r.component && r.data.title)
      .map((r) => ({ title: r.data.title, route: r.path }));

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
        this.currentRouteIndex = this.navigationLinks.findIndex((r) => r.route === event.url.replace('/', ''));
      });
  }

  public navigatePrevious(): void {
    this.router.navigate([this.navigationLinks[this.currentRouteIndex - 1].route]);
  }

  public navigateNext(): void {
    this.router.navigate([this.navigationLinks[this.currentRouteIndex + 1].route]);
  }
}

export interface Link {
  title: string;
  route: string;
}
