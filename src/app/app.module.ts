import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from "primeng/inputtext";
import { GalleriaModule } from "primeng/galleria";
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { CarouselProductsComponent } from './components/carousel-products/carousel-products.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeadComponent } from './components/head/head.component';
import { CarouselProductsService } from "./services/carousel-products.service";
import { RatingModule } from "primeng/rating";
import { RatingComponent } from './components/rating/rating.component';
import { CarouselArticlesComponent } from './components/carousel-articles/carousel-articles.component';
import { CarouselArticlesService } from "./services/carousel-articles.service";
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { BreadcrumbModule } from "primeng/breadcrumb";
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { MessageModule } from "primeng/message";
import { RouterModule } from "@angular/router";
import { TabMenuModule } from "primeng/tabmenu";
import { DropdownModule } from "primeng/dropdown";
import { ProductDropdownComponent } from './components/product-dropdown/product-dropdown.component';
import { ProductPhotoComponent } from './components/product-photo/product-photo.component';
import { MenubarModule } from "primeng/menubar";
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { RecommendComponent } from './components/recommend/recommend.component';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import { ProductFiltersSelectedComponent } from "./components/product-filters-selected/product-filters-selected.component";
import { ProductFiltersPhotoComponent } from './components/product-filters-photo/product-filters-photo.component';
import {InputSwitchModule} from "primeng/inputswitch";
import { ProductFiltersRateComponent } from './components/product-filters-rate/product-filters-rate.component';
import {CheckboxModule} from "primeng/checkbox";
import {ListboxModule} from "primeng/listbox";
import { ProductFiltersListBoxComponent } from './components/product-filters-list-box/product-filters-list-box.component';
import { ProductTabReviewsComponent } from './components/product-tab-reviews/product-tab-reviews.component';
import { ProductTabAboutComponent } from './components/product-tab-about/product-tab-about.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';

import { DataViewModule } from "primeng/dataview";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {PanelModule} from "primeng/panel";
import {CatalogPageService} from "./services/catalog-page.service";
import {CategoriesStore} from "./services/categories.store";
import { ProductTabSpecificationsComponent } from './components/product-tab-specifications/product-tab-specifications.component';
import {SidebarModule} from "primeng/sidebar";



@NgModule({
  declarations: [
    AppComponent,
    CarouselProductsComponent,
    MainPageComponent,
    AdBannerComponent,
    NavigationComponent,
    HeadComponent,
    RatingComponent,
    CarouselArticlesComponent,
    ProductPageComponent,
    BreadCrumbComponent,
    ProductDescriptionComponent,
    ProductTabsComponent,
    ProductDropdownComponent,
    ProductPhotoComponent,
    ProductReviewsComponent,
    ProductFiltersSelectedComponent,
    RecommendComponent,
    ProductFiltersPhotoComponent,
    ProductFiltersRateComponent,
    ProductFiltersListBoxComponent,
    ProductTabReviewsComponent,
    ProductTabAboutComponent,
    CatalogPageComponent,
    ProductTabSpecificationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    GalleriaModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    RatingModule,
    BreadcrumbModule,
    MessageModule,
    TabMenuModule,
    DropdownModule,
    InputSwitchModule,
    CheckboxModule,
    ListboxModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    RippleModule,
    SidebarModule,

    RouterModule.forRoot([
      {path:'',component: AppComponent},
    ])
  ],
  providers: [
    CarouselProductsService,
    CarouselArticlesService,
    CatalogPageService,
    CategoriesStore,
    {provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
