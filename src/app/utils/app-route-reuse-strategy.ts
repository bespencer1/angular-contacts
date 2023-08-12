import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class AppRouteReuseStrategy implements RouteReuseStrategy {
  private acceptedRoutes: string[] = ["edit/:id"];
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  //determines if this route (and its subtree) should be detached to be reused later.
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // check to see if the route's path is in our acceptedRoutes array
    const path = this.getPath(route);
    return path && this.acceptedRoutes.includes(path) || false;
  }

  //stores the detached route.
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.storedRoutes.set(this.getPath(route), handle);
  }

  //determines if this route (and its subtree) should be reattached.
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.storedRoutes.get(this.getPath(route));
  }

  //retrieves the previously stored route.
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.storedRoutes.get(this.getPath(route))!;
  }

  //determines if a route should be reused.
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private getPath(route: ActivatedRouteSnapshot){
    return route.routeConfig?.path || "";
  }

}
