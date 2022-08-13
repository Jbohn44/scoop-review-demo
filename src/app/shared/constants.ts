/* file containts constants used through-out applications */

import { IceCream } from '../ice-cream/models/ice-cream.model'
import { Rating } from '../ice-cream/models/rating.model';

export const RatingTypes = {

  RatingTypes: ["FlavorRating", "TextureRating", "ValueRating"]
}

export const ServiceTypes = [
  { ServiceTypeId: 1, ServiceName: 'Dine-In' },
  { ServiceTypeId: 2, ServiceName: 'Carry-Out' },
  { ServiceTypeId: 3, ServiceName: 'Drive-Thru' }
];
export const RatingList = [
  { RatingType: "FlavorRating", RatingName: "Flavor" },
  { RatingType: "CreaminessRating", RatingName: "Creaminess" },
  { RatingType: "IcinessRating", RatingName: "Iciness" },
  { RatingType: "DensityRating", RatingName: "Density" },
  { RatingType: "ValueRating", RatingName: "Value" },
  { RatingType: "OverAllRating", RatingName: "Over All" }
];
export const apiUrls = {
  GET_ICE_CREAMS: "icecream/{0}",
  POST_ICE_CREAM: "icecream/post",
  PUT_ICE_CREAM: "icecream/put",
  DELETE_ICE_CREAM: "icecream/delete/{0}",
  GET_ALL_USERS_NAMES: "user/getall",
  CREATE_USER: "user/signup",
  GET_USER: "user/get",
  POST_IMAGE: "image/post",
  GET_IMAGES: "image/getimages/{0}",
  GET_CATEGORIES: "category/getcategories/{0}",
  ADD_CATEGORY: "category/add",
  GET_DATA_FEED: "icecream/datafeed/{0}",
  GET_DETAIL_VIEW: "icecream/detail/{0}",
  VALIDATE_EXTERNAL_USER: "account/externallogin",
  GET_USER_REVIEWS: "icecream/user/reviews/{0}",
  GET_ALL_CATEGORIES: "category/getall"
}
