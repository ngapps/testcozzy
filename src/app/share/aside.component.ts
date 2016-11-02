import { Component } from '@angular/core';

import { ItemMenu } from './item-menu';

@Component({
  selector: 'cz-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  itemsMenu: ItemMenu[] = [
        new ItemMenu('Main Navigation', '', true, '', null),
        new ItemMenu('Dashboard', 'fa fa-tachometer', false, '', [
          new ItemMenu('Dashboard v1','', false, 'dashboard', null),
          new ItemMenu('Dashboard v2','', false, 'dashboard2', null),
          new ItemMenu('Dashboard v3','', false, 'dashboard3', null)]),
        new ItemMenu('Widgets','fa fa-briefcase', false, 'widget', null),
        new ItemMenu('Layouts','fa fa-database', false, 'widget', [
           new ItemMenu('Horizontal Nav','', false, 'widget', null) ]),
        new ItemMenu('Components', '', true, '', null),
        new ItemMenu('Elements','fa fa-flask', false, 'widget', [
           new ItemMenu('Button','', false, 'widget', null),
          new ItemMenu('Notification','', false, 'widget', null),
          new ItemMenu('ngDialog','', false, 'widget', null),
          new ItemMenu('Sweet Alert','', false, 'widget', null),
          new ItemMenu('Tour','', false, 'widget', null),
          new ItemMenu('Interaction','', false, 'widget', null),
          new ItemMenu('Carousel','', false, 'widget', null),
          new ItemMenu('Spinner','', false, 'widget', null),
          new ItemMenu('Dropdown','', false, 'widget', null),
          new ItemMenu('Nav Tree','', false, 'widget', null),
          new ItemMenu('Nestable','', false, 'widget', null),
          new ItemMenu('Sortable','', false, 'widget', null),
          new ItemMenu('Panel','', false, 'widget', null),
          new ItemMenu('Portlet','', false, 'widget', null),
          new ItemMenu('Grid','', false, 'widget', null),
          new ItemMenu('Grid Masonry','', false, 'widget', null),
          new ItemMenu('Grid Masonry Deck','', false, 'widget', null),
          new ItemMenu('Typography','', false, 'widget', null),
          new ItemMenu('Font Icons','', false, 'widget', null),
          new ItemMenu('Weather Icons','', false, 'widget', null),
          new ItemMenu('Colors','', false, 'widget', null),
          new ItemMenu('i18n','', false, 'widget', null),
          new ItemMenu('Localization','', false, 'widget', null),
          new ItemMenu('Infinite scroll','', false, 'widget', null)]),
        new ItemMenu('Forms','fa fa-pencil-square-o', false, 'widget', [
          new ItemMenu('Standard','', false, 'widget', null),
          new ItemMenu('Extended','', false, 'widget', null),
          new ItemMenu('Validation','', false, 'widget', null),
          new ItemMenu('Wizard','', false, 'widget', null),
          new ItemMenu('Upload','', false, 'widget', null),
          new ItemMenu('xEditable','', false, 'widget', null),
          new ItemMenu('Image Crop','', false, 'widget', null),
          new ItemMenu('uiSelect','', false, 'widget', null)]),
        new ItemMenu('Charts','fa fa-bar-chart', false, 'widget', [
          new ItemMenu('Flot','', false, 'widget', null),
          new ItemMenu('Radial','', false, 'widget', null),
          new ItemMenu('Chart JS','', false, 'widget', null),
          new ItemMenu('Rickshaw','', false, 'widget', null),
          new ItemMenu('MorrisJS','', false, 'widget', null),
          new ItemMenu('Chartist','', false, 'widget', null)]),
        new ItemMenu('Table','fa fa-table', false, 'widget', [
          new ItemMenu('Standard','', false, 'widget', null),
          new ItemMenu('Extended','', false, 'widget', null),
          new ItemMenu('Datatable','', false, 'widget', null),
          new ItemMenu('ngTables','', false, 'widget', null),
          new ItemMenu('uiGrid','', false, 'widget', null),
          new ItemMenu('xEditable','', false, 'widget', null),
          new ItemMenu('Angular Grid','', false, 'widget', null)]),
        new ItemMenu('Maps','fa fa-map-o', false, 'widget', [
          new ItemMenu('Google Map','', false, 'widget', null),
          new ItemMenu('Vector Map','', false, 'widget', null)]),
        new ItemMenu('More', '', true, '', null),
        new ItemMenu('Pages','fa fa-file-o', false, 'widget', [
          new ItemMenu('Login','', false, 'widget', null),
          new ItemMenu('Register','', false, 'widget', null),
          new ItemMenu('Recover password','', false, 'widget', null),
          new ItemMenu('Lock','', false, 'widget', null),
          new ItemMenu('Starter Template','', false, 'widget', null),
          new ItemMenu('404','', false, 'widget', null),
          new ItemMenu('500','', false, 'widget', null),
          new ItemMenu('Maintenance','', false, 'widget', null)]),
        new ItemMenu('Extras','fa fa-plus-circle', false, 'widget', [
          new ItemMenu('Blog','', false, 'widget', [
            new ItemMenu('List','', false, 'widget', null),
            new ItemMenu('Post','', false, 'widget', null),
            new ItemMenu('Articles','', false, 'widget', null),
            new ItemMenu('Article View','', false, 'widget', null)]),
          new ItemMenu('eCommerce','', false, 'widget', [
            new ItemMenu('Orders','', false, 'widget', null),
            new ItemMenu('Order View','', false, 'widget', null),
            new ItemMenu('Products','', false, 'widget', null),
            new ItemMenu('Product View','', false, 'widget', null),
            new ItemMenu('Checkout','', false, 'widget', null)]),
          new ItemMenu('Contacts','', false, 'widget', null),
          new ItemMenu('Contact details','', false, 'widget', null),
          new ItemMenu('Projects','', false, 'widget', null),
          new ItemMenu('Projects details','', false, 'widget', null),
          new ItemMenu('Team viewer','', false, 'widget', null),
          new ItemMenu('Social board','', false, 'widget', null),
          new ItemMenu('Vote links','', false, 'widget', null),
          new ItemMenu('Bug tracker','', false, 'widget', null),
          new ItemMenu('FAQ','', false, 'widget', null),
          new ItemMenu('Help Center','', false, 'widget', null),
          new ItemMenu('Followers','', false, 'widget', null),
          new ItemMenu('Settings','', false, 'widget', null),
          new ItemMenu('Plans','', false, 'widget', null),
          new ItemMenu('File manager','', false, 'widget', null),
          new ItemMenu('Forum','', false, 'widget', null),
          new ItemMenu('Mailbox','', false, 'widget', null),
          new ItemMenu('Timeline','', false, 'widget', null),
          new ItemMenu('Calendar','', false, 'widget', null),
          new ItemMenu('Invoice','', false, 'widget', null),
          new ItemMenu('Search','', false, 'widget', null),
          new ItemMenu('Todo List','', false, 'widget', null),
          new ItemMenu('Profile','', false, 'widget', null),
          new ItemMenu('Code Editor','', false, 'widget', null)]),
        new ItemMenu('Multilevel','fa fa-building', false, 'widget', [
          new ItemMenu('Level 1','', false, 'widget', [
            new ItemMenu('Level1 Item','', false, 'widget', null),
            new ItemMenu('Level 2','', false, 'widget', [
              new ItemMenu('Level 3','', false, 'widget', [
                new ItemMenu('Level3 Item','', false, 'widget', null)])])])]),
        new ItemMenu('Documentation','fa fa-book', false, 'widget', null)];
}
