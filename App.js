//import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
     return (
          <div className="header">
               <div className="logo-container">
                    <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
               </div>
               <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                    </ul>
               </div>

          </div>
     );
}

const RestaurantCard = (props) => {
     const {resData} = props;
     const { name , cuisines, avgRating, costForTwo, cloudinaryImageId, deliveryTime} = resData?.info
     return(
          <div className="res-card">
               <img className="res-logo"
               alt="res-logo"
               src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating}</h4>
               <h4>{costForTwo}</h4>
               <h4>{deliveryTime}</h4>
          </div>
     );
}
const resList =  [
                  {
                    "info": {
                      "id": "234875",
                      "name": "Adil Hotel",
                      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                      "locality": "Rautha Wada",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 4.2,
                      "parentId": "27123",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-22 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-daa21cc8-8ab1-4f86-92a3-2d9679d4a076"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "151649",
                      "name": "Hotel Sai Nath & Sai Restaurant",
                      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
                      "locality": "railway station",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "101802",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "948",
                      "sla": {
                        "deliveryTime": 47,
                        "lastMileTravel": 11,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "11.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-22 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "25% OFF",
                        "subHeader": "ABOVE ₹1399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-daa21cc8-8ab1-4f86-92a3-2d9679d4a076"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "151518",
                      "name": "Bakery World",
                      "cloudinaryImageId": "mt2aggiscfl3yviatwng",
                      "locality": "Parasia Road",
                      "areaName": "Parasia Road",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Ice Cream",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "40363",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "251",
                      "sla": {
                        "deliveryTime": 47,
                        "lastMileTravel": 11.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "11.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-22 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹1099",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-daa21cc8-8ab1-4f86-92a3-2d9679d4a076"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "151656",
                      "name": "Dev International",
                      "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
                      "locality": "khajri road",
                      "areaName": "Mohan Nagar",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "71556",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "438",
                      "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 11.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "11.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-22 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-daa21cc8-8ab1-4f86-92a3-2d9679d4a076"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "150591",
                      "name": "Satkar Restaurant",
                      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
                      "locality": "Sinchai Colony",
                      "areaName": "Satkar Chowk",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Indian",
                        "Salads",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "21553",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.4K+",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 13,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "13.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-22 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-daa21cc8-8ab1-4f86-92a3-2d9679d4a076"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "385824",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                      "locality": "Sinchai Colony",
                      "areaName": "Mohan Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "295",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 12,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "12.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-22 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-daa21cc8-8ab1-4f86-92a3-2d9679d4a076"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "658210",
                      "name": "The Fusion Lounge",
                      "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
                      "locality": "Triloki nagar",
                      "areaName": "Railway Station",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "395453",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "301",
                      "sla": {
                        "deliveryTime": 57,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-22 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-daa21cc8-8ab1-4f86-92a3-2d9679d4a076"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
                      "type": "WEBLINK"
                    }
                  }
                ]

const Body = () => {
     {console.log(resList)}
     return(
          <div className="body">
               <div className="search">Search</div>
               <div className="res-container">
               {
               resList.map(restaurant =>  <RestaurantCard key= {restaurant.info.id} resData= {restaurant} />)
               }  
               </div>
          </div>
     );
}

const  AppLayout =() =>{
     return (
          <div className="app">
               <Header/>
               <Body/>
               

          </div>
     )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);