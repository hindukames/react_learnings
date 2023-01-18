import React from "react"
import ReactDOM  from "react-dom/client";
import { BiUserCircle } from "react-icons/bi";

const restaurantList = [
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "37629",
   "name": "Shree Mithai",
   "uuid": "5f2df2a0-c074-4419-8e13-99ca142b266a",
   "city": "8",
   "area": "Chetpet",
   "totalRatingsString": "5000+ ratings",
   "cloudinaryImageId": "cxmaeqlyleysefcdx9nk",
   "cuisines": [
   "Desserts",
   "Street Food",
   "Chaat"
   ],
   "tags": [ ],
   "costForTwo": 25000,
   "costForTwoString": "₹250 FOR TWO",
   "deliveryTime": 36,
   "minDeliveryTime": 36,
   "maxDeliveryTime": 36,
   "slaString": "36 MINS",
   "lastMileTravel": 3.9000000953674316,
   "slugs": {
   "restaurant": "shree-mithai-chetpet-egmore",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "18, Dr T.V Road, Chetpet, Chennai - 600031",
   "locality": "Dr Tv Road",
   "parentId": 6988,
   "unserviceable": false,
   "veg": true,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=5693554~p=1~eid=00000185-c4a4-d09b-075b-d2a4008c0133",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "3.9 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "37629",
   "deliveryTime": 36,
   "minDeliveryTime": 36,
   "maxDeliveryTime": 36,
   "lastMileTravel": 3.9000000953674316,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "4.6",
   "totalRatings": 5000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "11479",
   "name": "Burger King",
   "uuid": "9db0490b-c551-496a-a354-bce98bf246e9",
   "city": "8",
   "area": "Thousand Lights",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "zggqzcw1muhht6tkwuba",
   "cuisines": [
   "Burgers",
   "American"
   ],
   "tags": [ ],
   "costForTwo": 35000,
   "costForTwoString": "₹350 FOR TWO",
   "deliveryTime": 56,
   "minDeliveryTime": 55,
   "maxDeliveryTime": 65,
   "slaString": "55-65 MINS",
   "lastMileTravel": 4,
   "slugs": {
   "restaurant": "burger-king-express-avenue-royapettah",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "Express Avenue, Gate 2 (or) 6, 3rd floor - food court, Club House Road, Royapettah, Chennai",
   "locality": "Express Avenue",
   "parentId": 166,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "Get every item under 129",
   "shortDescriptionList": [
   {
   "meta": "Get every item under 129",
   "discountType": "FinalPrice",
   "operationType": "RESTAURANT"
   },
   {
   "meta": "FREE DELIVERY",
   "discountType": "FREE_DELIVERY",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "Get every item under 129",
   "discountType": "FinalPrice",
   "operationType": "RESTAURANT"
   },
   {
   "meta": "FREE DELIVERY",
   "discountType": "FREE_DELIVERY",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "",
   "shortDescriptionList": [
   {
   "meta": "",
   "discountType": "FinalPrice",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "Get every item under 129",
   "discountType": "FinalPrice",
   "operationType": "RESTAURANT"
   },
   {
   "meta": "FREE DELIVERY",
   "discountType": "FREE_DELIVERY",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "4 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "11479",
   "deliveryTime": 56,
   "minDeliveryTime": 55,
   "maxDeliveryTime": 65,
   "lastMileTravel": 4,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.1",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "54852",
   "name": "SS Hyderabad Briyani",
   "uuid": "b7c975f8-95f3-4f95-921e-c85464c55d20",
   "city": "8",
   "area": "George Town",
   "totalRatingsString": "500+ ratings",
   "cloudinaryImageId": "bwkfac2r3bpphgfm7rh9",
   "cuisines": [
   "Biryani",
   "North Indian",
   "Chinese"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 47,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "slaString": "45-55 MINS",
   "lastMileTravel": 3,
   "slugs": {
   "restaurant": "ss-hyderabad-biryani-parrys-george-town",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "154/319, Linghi Chetty Street, Next To Andhra Bank Zonal Office, Parrys, Chennai",
   "locality": "Parrys Corner",
   "parentId": 4824,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=5694243~p=10~eid=00000185-c4a4-d09b-075b-d2a7008c0a7c",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "3 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "54852",
   "deliveryTime": 47,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "lastMileTravel": 3,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "4.5",
   "totalRatings": 500,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "34335",
   "name": "Pizza Hut",
   "uuid": "b79cf619-684e-44fd-a177-b7eda35ca178",
   "city": "8",
   "area": "Thousand Lights",
   "totalRatingsString": "500+ ratings",
   "cloudinaryImageId": "fl9oeg5vuhjyb0jcxq8o",
   "cuisines": [
   "Pizzas"
   ],
   "tags": [ ],
   "costForTwo": 40000,
   "costForTwoString": "₹400 FOR TWO",
   "deliveryTime": 52,
   "minDeliveryTime": 50,
   "maxDeliveryTime": 60,
   "slaString": "50-60 MINS",
   "lastMileTravel": 3.9000000953674316,
   "slugs": {
   "restaurant": "pizza-hut-royapettah-royapettah",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "49 & 50L, 3rd Flr, Express Avenue, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014",
   "locality": "Royapettah",
   "parentId": 721,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "3.9 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "34335",
   "deliveryTime": 52,
   "minDeliveryTime": 50,
   "maxDeliveryTime": 60,
   "lastMileTravel": 3.9000000953674316,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "3.8",
   "totalRatings": 500,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "594211",
   "name": "KFC",
   "uuid": "a1405f33-e92f-4fb4-af3e-ac73535b2a05",
   "city": "8",
   "area": "Chennai Central",
   "totalRatingsString": "100+ ratings",
   "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
   "cuisines": [
   "Burgers",
   "Biryani",
   "American",
   "Snacks",
   "Fast Food"
   ],
   "tags": [ ],
   "costForTwo": 40000,
   "costForTwoString": "₹400 FOR TWO",
   "deliveryTime": 27,
   "minDeliveryTime": 27,
   "maxDeliveryTime": 27,
   "slaString": "27 MINS",
   "lastMileTravel": 0.8999999761581421,
   "slugs": {
   "restaurant": "kfc-chennai-central-purasawalkam",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "Sapphire Foods India Ltd. , Chennai Central Railway Station, EVR Periyar Salai, Park Town, Chennai 600003 Tamil Nadu",
   "locality": "EVR Periyar Salai",
   "parentId": 547,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "20% off",
   "shortDescriptionList": [
   {
   "meta": "20% off | Use SWIGGYIT",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code SWIGGYIT",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "20% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use SWIGGYIT",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code SWIGGYIT",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "0.8 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "594211",
   "deliveryTime": 27,
   "minDeliveryTime": 27,
   "maxDeliveryTime": 27,
   "lastMileTravel": 0.8999999761581421,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.0",
   "totalRatings": 100,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "28174",
   "name": "Zaitoon",
   "uuid": "1f470189-31f1-4395-9aa5-74684f0381d0",
   "city": "8",
   "area": "Woods Road (opp to EA)",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "kkncoa3jeqeihqyetnkn",
   "cuisines": [
   "Arabian",
   "Biryani",
   "Chinese",
   "Grill",
   "Ice Cream",
   "Juices",
   "Kebabs",
   "North Indian",
   "Seafood",
   "Tandoor"
   ],
   "tags": [ ],
   "costForTwo": 90000,
   "costForTwoString": "₹900 FOR TWO",
   "deliveryTime": 48,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "slaString": "45-55 MINS",
   "lastMileTravel": 4.099999904632568,
   "slugs": {
   "restaurant": "zaitoon-royapettah-royapettah",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "35, Woods Road, Royapettah, Chennai.",
   "locality": "Woods Road (opp to EA)",
   "parentId": 4555,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "4 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "28174",
   "deliveryTime": 48,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "lastMileTravel": 4.099999904632568,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.3",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "240435",
   "name": "Hungsters",
   "uuid": "1012176c-d29e-4931-8d78-c292c229b0d0",
   "city": "8",
   "area": "Kilpauk",
   "totalRatingsString": "500+ ratings",
   "cloudinaryImageId": "umbclg5lqcgosy3uxkew",
   "cuisines": [
   "Jain",
   "North Indian"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 38,
   "minDeliveryTime": 38,
   "maxDeliveryTime": 38,
   "slaString": "38 MINS",
   "lastMileTravel": 4,
   "slugs": {
   "restaurant": "hungsters-annanagar-annanagar",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "Old no- 11, Landons road, Kilpauk, Opposite to Landon's tower appartment, Kilpauk Chennai",
   "locality": "Landons road",
   "parentId": 17154,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "4 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "240435",
   "deliveryTime": 38,
   "minDeliveryTime": 38,
   "maxDeliveryTime": 38,
   "lastMileTravel": 4,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.3",
   "totalRatings": 500,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "16543",
   "name": "A2B - Adyar Ananda Bhavan",
   "uuid": "fd6288de-f85a-487e-b792-499d038505af",
   "city": "8",
   "area": "Purasaiwakkam",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "dsliyhlbtgtnnuxyrpsf",
   "cuisines": [
   "South Indian",
   "North Indian",
   "Sweets",
   "Chinese"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 30,
   "minDeliveryTime": 30,
   "maxDeliveryTime": 30,
   "slaString": "30 MINS",
   "lastMileTravel": 2.4000000953674316,
   "slugs": {
   "restaurant": "a2b-veg-purasawalkam-purasawalkam",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "50, 51 & 52, Purasai High Road, Purasavakkam, Chennai",
   "locality": "Purasai High Road",
   "parentId": 22,
   "unserviceable": false,
   "veg": true,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=5730544~p=19~eid=00000185-c4a4-d09b-075b-d2aa008c1329",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "2.4 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "16543",
   "deliveryTime": 30,
   "minDeliveryTime": 30,
   "maxDeliveryTime": 30,
   "lastMileTravel": 2.4000000953674316,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "4.5",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "37972",
   "name": "McDonald's",
   "uuid": "da5f6331-a60a-4ff0-b32a-ab8faa1794b8",
   "city": "8",
   "area": "Anna Salai",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "0e8f93a56b93e43d7627c2c21bc1106c",
   "cuisines": [
   "Burgers",
   "Beverages",
   "Cafe",
   "Desserts"
   ],
   "tags": [ ],
   "costForTwo": 40000,
   "costForTwoString": "₹400 FOR TWO",
   "deliveryTime": 41,
   "minDeliveryTime": 41,
   "maxDeliveryTime": 41,
   "slaString": "41 MINS",
   "lastMileTravel": 3.9000000953674316,
   "slugs": {
   "restaurant": "mcdonalds-spencer-egmore",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "Hardcastle Restaurants Pvt Ltd, McDonalds Family Restaurants,Spencers Plaza, No.769, Ground floor,Phase I, Annasalai,Chennai ? 600002",
   "locality": "Spencer",
   "parentId": 630,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "3.9 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "37972",
   "deliveryTime": 41,
   "minDeliveryTime": 41,
   "maxDeliveryTime": 41,
   "lastMileTravel": 3.9000000953674316,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.2",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "7775",
   "name": "Gangotree",
   "uuid": "a84436e6-4add-4cd3-99fb-5b0b748dbe0f",
   "city": "8",
   "area": "Chennai",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "rualctypxmcdie00swsg",
   "cuisines": [
   "Sweets",
   "Chaat"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 47,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "slaString": "45-55 MINS",
   "lastMileTravel": 6.099999904632568,
   "slugs": {
   "restaurant": "gangotree-cathedral-road-alwarpet",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "No:42 Cathedral Road, Opp to Stella Maris, Chennai- 600086",
   "locality": "Cathedral Road",
   "parentId": 406,
   "unserviceable": false,
   "veg": true,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=5685900~p=25~eid=00000185-c4a4-d09b-075b-d2ac008c1950",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "6 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "7775",
   "deliveryTime": 47,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "lastMileTravel": 6.099999904632568,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "4.5",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "239924",
   "name": "Anburaj Resturant Briyani & Fast Food",
   "uuid": "f5222279-a135-4cba-b623-4e8218b343e2",
   "city": "8",
   "area": "C B Ramasamy Road",
   "totalRatingsString": "500+ ratings",
   "cloudinaryImageId": "hdatwmjnajz1htglkw7o",
   "cuisines": [
   "Biryani",
   "North Indian"
   ],
   "tags": [ ],
   "costForTwo": 25000,
   "costForTwoString": "₹250 FOR TWO",
   "deliveryTime": 46,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "slaString": "45-55 MINS",
   "lastMileTravel": 6.900000095367432,
   "slugs": {
   "restaurant": "anburaj-resturant-briyani-&-fast-food-t-nagar-t-nagar",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "D. NO. 77/8, C. B. RAMASAMY ROAD, ALWARPET, District - Chennai, STATE - Tamil Nadu-600018",
   "locality": "T Nagar",
   "parentId": 33059,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "40% off",
   "shortDescriptionList": [
   {
   "meta": "40% off | Use GUILTFREEJAN",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "40% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use GUILTFREEJAN",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "6.9 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "239924",
   "deliveryTime": 46,
   "minDeliveryTime": 45,
   "maxDeliveryTime": 55,
   "lastMileTravel": 6.900000095367432,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "3.9",
   "totalRatings": 500,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "421198",
   "name": "KAKADA RAMPRASAD",
   "uuid": "890da58b-20d3-4b8f-ae37-459d45dd2838",
   "city": "8",
   "area": "Sowcarpet",
   "totalRatingsString": "500+ ratings",
   "cloudinaryImageId": "eyfung1qwm35weq4uapt",
   "cuisines": [
   "North Indian",
   "Mexican",
   "Tandoor"
   ],
   "tags": [ ],
   "costForTwo": 50000,
   "costForTwoString": "₹500 FOR TWO",
   "deliveryTime": 52,
   "minDeliveryTime": 50,
   "maxDeliveryTime": 60,
   "slaString": "50-60 MINS",
   "lastMileTravel": 2.700000047683716,
   "slugs": {
   "restaurant": "kakada-ramprasad-george-town-george-town",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "348, 343, Mint St, Sowcarpet, George Town, Chennai, Tamil Nadu 600001",
   "locality": "George Town",
   "parentId": 17824,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "2.7 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "421198",
   "deliveryTime": 52,
   "minDeliveryTime": 50,
   "maxDeliveryTime": 60,
   "lastMileTravel": 2.700000047683716,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.4",
   "totalRatings": 500,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "31049",
   "name": "The Fat Boy",
   "uuid": "da4be6e7-e74b-40c7-a006-c0be403aaa54",
   "city": "8",
   "area": "Alwarpet",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "qjyhhmtviqyew2op6lnv",
   "cuisines": [
   "Italian",
   "American"
   ],
   "tags": [ ],
   "costForTwo": 60000,
   "costForTwoString": "₹600 FOR TWO",
   "deliveryTime": 61,
   "minDeliveryTime": 60,
   "maxDeliveryTime": 70,
   "slaString": "60-70 MINS",
   "lastMileTravel": 7.400000095367432,
   "slugs": {
   "restaurant": "the-fat-boy-alwarpet-alwarpet",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "18/24, T.T.K Road, 1st Cross Street, Alwarpet, Chennai, Tamil Nadu 600018",
   "locality": "Ttk Road",
   "parentId": 7832,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=5736409~p=31~eid=00000185-c4a4-d09b-075b-d2ae008c1f0f",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "7.4 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "31049",
   "deliveryTime": 61,
   "minDeliveryTime": 60,
   "maxDeliveryTime": 70,
   "lastMileTravel": 7.400000095367432,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "4.5",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "144698",
   "name": "Halal Kattu Biryani",
   "uuid": "31d61f5b-ebc8-4094-9adc-a553901ae5a7",
   "city": "8",
   "area": "Arumbakkam",
   "totalRatingsString": "100+ ratings",
   "cloudinaryImageId": "p6w2bhhag5nym91k1wn8",
   "cuisines": [
   "Biryani",
   "Indian",
   "Chinese"
   ],
   "tags": [ ],
   "costForTwo": 25000,
   "costForTwoString": "₹250 FOR TWO",
   "deliveryTime": 47,
   "minDeliveryTime": 47,
   "maxDeliveryTime": 47,
   "slaString": "47 MINS",
   "lastMileTravel": 7,
   "slugs": {
   "restaurant": "halal-kattu-biryani-arumbakkam-arumbakkam",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "516, NSK Nagar, 3rd Avenue, Arumbakkam, Chennai",
   "locality": "Nsk Nagar",
   "parentId": 17364,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 1,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "7 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "144698",
   "deliveryTime": 47,
   "minDeliveryTime": 47,
   "maxDeliveryTime": 47,
   "lastMileTravel": 7,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "IT_IS_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.1",
   "totalRatings": 100,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "407244",
   "name": "La Pino'z Pizza",
   "uuid": "3c9c6cae-e68b-45f5-b2d3-cbafc7e5111e",
   "city": "8",
   "area": "Purasawalkam",
   "totalRatingsString": "500+ ratings",
   "cloudinaryImageId": "zuobkwprhpluer4xqo1k",
   "cuisines": [
   "Pizzas"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 40,
   "minDeliveryTime": 40,
   "maxDeliveryTime": 40,
   "slaString": "40 MINS",
   "lastMileTravel": 4.5,
   "slugs": {
   "restaurant": "la-pino'z-pizza-purasawalkam-purasawalkam",
   "city": "chennai"
   },
   "cityState": "8",
   "address": "237/A, Kilpauk Garden Road, Chennai, Chennai, Tamil Nadu, Pin;- 600 010.",
   "locality": "Kilpauk",
   "parentId": 4961,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code WELCOME50",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "4.5 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "407244",
   "deliveryTime": 40,
   "minDeliveryTime": 40,
   "maxDeliveryTime": 40,
   "lastMileTravel": 4.5,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "3.8",
   "totalRatings": 500,
   "new": false
   },
   "subtype": "basic"
   }
   ];

const Title = ()=>(
   <a href="/">
   <img 
   className="logo" 
   src ="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg" 
   alt="Food Logo"></img>
   </a>
);

const HeaderComponent =() =>{
   return (
   <div className="header">
      <Title/>
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
         </ul>
      </div>
      
   </div>  );
} 

const RestaurantCard =({ name,cuisines,lastMileTravel,cloudinaryImageId})=>{

   return(
      <div className="card-lists">
         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId }></img>
         <h2>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h4>{lastMileTravel} stars</h4>
      </div>
   )
}
const BodyComponent =()=>{
   return(
      <div className="restaurant-list">
      {restaurantList.map((restaurant) => <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>)}
      </div>
   )

}
const FooterComponent =()=>{
   return(
      <h4>Footer</h4>
   )

}


const AppLayout =()=>{
   return(
      <>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
      </>

   )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 

/*  
Is JSX mandatory for React?
       No, It is not mandatory to have our code in JSX format for react. They can be even written/ or the elements could be created using React.createElement. Eventually,
the JSX would convert them to React.createElement and only then they execute things in them to the DOM. But JSX assures of the readability or the developer's preference

Is ES6 mandatory for React?
       No, It is not mandatory to have our code in ES6 format for react.They can be even written with the old traditional javascript module in them.


How can I write comments in JSX?
      // Commenting would be done the same way as of the JS code. But within the JSX, they would be commented like {/* Comments goes here*///}. Any piece of javascript code would be written here.

// what is <React.Fragment> </React.Fragment> and <> </>

//       Within JSX,it is possible to have only one parent along with the multiple children to the DIV ROOT. If we want to have many children within the DIV ROOT, then React has a special API called React.Fragment that is used to
// represent multiple children within them.
// Example: React.Fragment would be expressed as both <React.Fragment> </React.Fragment> and <> </>.

// const myVariable = () =>
// (
//       return (
//         <>
//            <h1> Hello World </h1>
//          <p> Happy Birthday <p>
//       </>
// )

// )
// The above example would be attached to the DIV ROOT, by not creating unncessary roots to them.

// What is virtual DOM?
//       Virtual DOM is something that is kept as a representation of the real DOM, built by the react to enhance the process of reconcilliation. The virutal DOM is very similar to the Real DOM, that develops its own tree of
// the components.

// Reconcilliation in React:
//      Reconcillitaion in react is one where only the updates are got into the Real DOM, when there are changes found between the Virtual DOM and the real DOM,React doesa smart of updating the things in Real DOM by proper scheduling of the Rendering units

// What is React Fiber:
//       React Fiber is one thing that makes the process of reconcillitaion more effective. They have the thread within them including the component instance within them, the keys, props, the current tree, the WIP tree, Input props, memoized props everything  in them for the call stack. Their call stack can be set with any priority or then changes would be delayed until it is necessary for them ( They would batch updates on them ). Any task would be pritiose and anything would be done on their component's call stack.

// why do we need keys in react? when do we use keys in react?
//       So React renders the things on the render() method or the setState() call method. whenever react renders things to the real DOM, the diffing algorithm usually happens in them.React would keep track of the keys, otherwise there may be unwanted renders quite often affecting the performance.

// Ex:
// <h1> NAME1 </h1>
// <h1> NAME2 </h1>
// when the list of these things are changed to

// <h1> NAME3 </h1>
// <h1> NAME2 </h1>
// <h1> NAME3 </h1>

// Here in the example, it is only essential to get the first child to be in the list/ actually rendered to the existing one, if not provided keys to the element in them, the whole set of second thing is actually rendered. Hence, it is highly essential for the react code to hold the keys in them for the better optimisation techniques

// Can we use index as keys in react?
//       Index as keys in react can be used if
//             1. The list of items is going to be stabilised and do not change in them
//             2. The list of items are never going to be re-ordered or filtered in them
//             3. The items in the list donot have no id's in them ( If it is done so, use unique ID Generator to do so, so that the keys are really unique among the siblings but not the global one )
// Otherwise, it is not recommended to have the index as keys in react

// what is props in react? ways to have props in UI ?
//       Props are considered to be the input to the react element in them, which is essential to render the data in them.
// Ways to call them up: https://www.freecodecamp.org/news/react-props-cheatsheet/  

// what is config driven UI?
//       config driven UI is the kind of the UI that is displayed to the user based on the requirements ( may be due to different location, different data is displayed).
// The communication that is connected between the client and the server is based on the configuration/ Requirement to have the business needs filled. ( Eg., Swiggy food orders in different regions)


// */ 
