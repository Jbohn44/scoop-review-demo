import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { apiUrls } from 'src/app/shared/constants';
import { BaseService } from 'src/app/shared/services/base.service';
import { formatUrl } from 'src/app/shared/utilities';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  private categories: Category[];

  constructor(http: HttpClient) {
    super(http);
   }


  setAllCategories(){
    return this.get(apiUrls.GET_ALL_CATEGORIES).pipe(map(res => {
      return <Category[]>res;
    }));
   }
   setCategoriesByUser(userId){
     return this.get(formatUrl(apiUrls.GET_CATEGORIES, userId)).pipe(map(res => {
       return <Category[]>res;
     }));
   }

   addCategory(category){
     return this.post(apiUrls.ADD_CATEGORY, category).pipe(map(res => {
       this.categories.push(<Category>res);
       return <Category>res;
     }));
   }

   getAllCategories(){
    return this.get(apiUrls.GET_ALL_CATEGORIES).pipe(map(res=>{
      this.categories = <Category[]> res;
      return this.categories;
     }));
   }
}
