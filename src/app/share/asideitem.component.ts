import { Component, Input } from '@angular/core';
import { ItemMenu } from './item-menu';

@Component({
  selector: 'cz-asideitem',
  templateUrl: './asideitem.component.html',
  styles: []
})
export class AsideitemComponent {
  @Input() item: ItemMenu;
  itemid: number;

}
/**
<span *ngIf="item.heading">{{item.name}}</span>
    <a *ngIf="!item.heading"  title="{{item.name}}" [routerLink]="[item.link]">
      <div class="pull-right" *ngIf="item.alert"class="item.label || \'label label-success\'">{{item.alert}}</div>
      <em class="{{item.icon}}" *ngIf="item.icon"></em>
      <span>{{item.name}}</span>
    </a>
    <ul class="nav sidebar-subnav" *ngIf="item.submenu" uib-collapse="isCollapse(pIndex)"  >
      <li class="sidebar-subnav-header">{{  item.name }}</li>
      <li *ngFor="let ssitem of item.submenu"  > 
             <cz-asideitem [item]="ssitem"></cz-asideitem>
      </li>
	  </ul>
------------------------------------------------------ * 

 	<span ng-if="item.heading">{{(item.translate | translate) || item.text}}</span>
	<a ng-if="!item.heading" ng-href="{{$state.href(item.sref, item.params)}}" title="{{item.text}}">
		<div class="pull-right" ng-if="item.alert" ng-class="item.label || \'label label-success\'">{{item.alert}}</div>
		<em class="{{item.icon}}" ng-if="item.icon"></em>
		<span>{{(item.translate | translate) || item.text}}</span>
	</a>
	<ul class="nav sidebar-subnav" ng-if="item.submenu" uib-collapse="isCollapse(pIndex)" ng-init="addCollapse(pIndex, item)">
		<li class="sidebar-subnav-header">{{(item.translate | translate) || item.text}}</li>
		<li ng-repeat="item in item.submenu" ng-include="\'sidebar-renderer.html\'" ng-class="getMenuItemPropClasses(item)" ng-init="pIndex=(pIndex+\'-\'+$index); inSubmenu = true" ng-click="toggleCollapse(pIndex)">
		</li>
	</ul>
  * 
 * 
 */