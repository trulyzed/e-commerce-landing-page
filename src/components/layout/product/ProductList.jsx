import { Component } from "react";
import { withPagination } from "~/hoc/withPagination";
import { ProductItem } from "./ProductItem";

const products = [
  {
    "id": 36,
    "name": "WordPress Pennant",
    "slug": "wordpress-pennant",
    "date_created": {
      "date": "2021-09-28 13:40:16.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:53.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "short_description": "This is an external product.",
    "sku": "wp-pennant",
    "price": "11.05",
    "regular_price": "11.05",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": [
      [
        
      ]
    ],
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "no",
    "downloadable": "no",
    "category_ids": [
      21
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": [
      
    ],
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/pennant-1-1.jpg",
    "gallery_image_ids": [
      
    ],
    "download_limit": 0,
    "download_expiry": 0,
    "rating_counts": [
      
    ],
    "average_rating": "0",
    "review_count": 0,
    "product_url": "https://mercantile.wordpress.org/product/wordpress-pennant/",
    "button_text": "Buy on the WordPress swag store!",
    "meta_data": {
      "_sku": [
        "wp-pennant"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "no"
      ],
      "_downloadable": [
        "no"
      ],
      "_download_limit": [
        "0"
      ],
      "_download_expiry": [
        "0"
      ],
      "_stock": [
        null
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-89"
      ],
      "_regular_price": [
        "11.05"
      ],
      "_thumbnail_id": [
        "59"
      ],
      "_product_url": [
        "https://mercantile.wordpress.org/product/wordpress-pennant/"
      ],
      "_button_text": [
        "Buy on the WordPress swag store!"
      ],
      "_price": [
        "11.05"
      ]
    },
    "variation": [
      
    ]
  },
  {
    "id": 35,
    "name": "Logo Collection",
    "slug": "logo-collection",
    "date_created": {
      "date": "2021-09-28 13:40:16.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:52.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "short_description": "This is a grouped product.",
    "sku": "logo-collection",
    "price": "18",
    "regular_price": "",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": [
      [
        
      ],
      [
        
      ]
    ],
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "no",
    "downloadable": "no",
    "category_ids": [
      16
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": [
      
    ],
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/logo-1-1.jpg",
    "gallery_image_ids": [
      "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/beanie-with-logo-1-1.jpg",
      "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/t-shirt-with-logo-1-1.jpg",
      "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/hoodie-with-logo-2-1.jpg"
    ],
    "download_limit": 0,
    "download_expiry": 0,
    "rating_counts": [
      
    ],
    "average_rating": "0",
    "review_count": 0,
    "product_url": "",
    "button_text": "",
    "meta_data": {
      "_sku": [
        "logo-collection"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "no"
      ],
      "_downloadable": [
        "no"
      ],
      "_download_limit": [
        "0"
      ],
      "_download_expiry": [
        "0"
      ],
      "_stock": [
        null
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-87"
      ],
      "_children": [
        "a:3:{i:0;i:15;i:1;i:16;i:2;i:17;}"
      ],
      "_product_image_gallery": [
        "57,56,44"
      ],
      "_thumbnail_id": [
        "58"
      ],
      "_price": [
        "18",
        "45"
      ]
    },
    "variation": [
      
    ]
  },
  {
    "id": 34,
    "name": "Beanie with Logo",
    "slug": "beanie-with-logo",
    "date_created": {
      "date": "2021-09-28 13:40:15.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:51.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "short_description": "This is a simple product.",
    "sku": "Woo-beanie-logo",
    "price": "18",
    "regular_price": "20",
    "sale_price": "18",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": {
      "0": [
        
      ],
      "name": "pa_color",
      "value": "",
      "position": 0,
      "is_visible": 1,
      "is_variation": 0,
      "is_taxonomy": 1
    },
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "no",
    "downloadable": "no",
    "category_ids": [
      19
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": [
      
    ],
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/beanie-with-logo-1-1.jpg",
    "gallery_image_ids": null,
    "download_limit": 0,
    "download_expiry": 0,
    "rating_counts": [
      
    ],
    "average_rating": "0",
    "review_count": 0,
    "product_url": "",
    "button_text": "",
    "meta_data": {
      "_sku": [
        "Woo-beanie-logo"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "no"
      ],
      "_downloadable": [
        "no"
      ],
      "_download_limit": [
        "0"
      ],
      "_download_expiry": [
        "0"
      ],
      "_stock": [
        null
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-85"
      ],
      "_regular_price": [
        "20"
      ],
      "_sale_price": [
        "18"
      ],
      "_thumbnail_id": [
        "57"
      ],
      "_product_attributes": [
        "a:1:{s:8:\"pa_color\";a:6:{s:4:\"name\";s:8:\"pa_color\";s:5:\"value\";s:0:\"\";s:8:\"position\";i:0;s:10:\"is_visible\";i:1;s:12:\"is_variation\";i:0;s:11:\"is_taxonomy\";i:1;}}"
      ],
      "_price": [
        "18"
      ]
    },
    "variation": [
      
    ]
  },
  {
    "id": 33,
    "name": "T-Shirt with Logo",
    "slug": "t-shirt-with-logo",
    "date_created": {
      "date": "2021-09-28 13:40:15.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:50.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "short_description": "This is a simple product.",
    "sku": "Woo-tshirt-logo",
    "price": "18",
    "regular_price": "18",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": {
      "0": [
        
      ],
      "name": "pa_color",
      "value": "",
      "position": 0,
      "is_visible": 1,
      "is_variation": 0,
      "is_taxonomy": 1
    },
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "no",
    "downloadable": "no",
    "category_ids": [
      17
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": [
      
    ],
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/t-shirt-with-logo-1-1.jpg",
    "gallery_image_ids": null,
    "download_limit": 0,
    "download_expiry": 0,
    "rating_counts": [
      
    ],
    "average_rating": "0",
    "review_count": 0,
    "product_url": "",
    "button_text": "",
    "meta_data": {
      "_sku": [
        "Woo-tshirt-logo"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "no"
      ],
      "_downloadable": [
        "no"
      ],
      "_download_limit": [
        "0"
      ],
      "_download_expiry": [
        "0"
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-83"
      ],
      "_regular_price": [
        "18"
      ],
      "_thumbnail_id": [
        "56"
      ],
      "_product_attributes": [
        "a:1:{s:8:\"pa_color\";a:6:{s:4:\"name\";s:8:\"pa_color\";s:5:\"value\";s:0:\"\";s:8:\"position\";i:0;s:10:\"is_visible\";i:1;s:12:\"is_variation\";i:0;s:11:\"is_taxonomy\";i:1;}}"
      ],
      "_price": [
        "18"
      ]
    },
    "variation": [
      
    ]
  },
  {
    "id": 26,
    "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    "slug": "single",
    "date_created": {
      "date": "2021-09-28 13:40:15.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:36.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.",
    "short_description": "This is a simple, virtual product.",
    "sku": "woo-single",
    "price": "20000",
    "regular_price": "30000",
    "sale_price": "2",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": {
      "0": [
        
      ],
      "1": [
        
      ],
      "name": "pa_color",
      "value": "",
      "position": 0,
      "is_visible": 1,
      "is_variation": 0,
      "is_taxonomy": 1
    },
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "yes",
    "downloadable": "yes",
    "category_ids": [
      20
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": {
      "9b1f13d6-f1b7-4f88-9769-d27ff59c3feb": {
        
      }
    },
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/single-1-1.jpg",
    "gallery_image_ids": null,
    "download_limit": 1,
    "download_expiry": 1,
    "rating_counts": [
      
    ],
    "average_rating": "0",
    "review_count": 0,
    "product_url": "",
    "button_text": "",
    "meta_data": {
      "_sku": [
        "woo-single"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "yes"
      ],
      "_downloadable": [
        "yes"
      ],
      "_download_limit": [
        "1"
      ],
      "_download_expiry": [
        "1"
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-75"
      ],
      "_regular_price": [
        "3"
      ],
      "_sale_price": [
        "2"
      ],
      "_thumbnail_id": [
        "55"
      ],
      "_downloadable_files": [
        "a:1:{s:36:\"9b1f13d6-f1b7-4f88-9769-d27ff59c3feb\";a:3:{s:2:\"id\";s:36:\"9b1f13d6-f1b7-4f88-9769-d27ff59c3feb\";s:4:\"name\";s:6:\"Single\";s:4:\"file\";s:85:\"https://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2017/08/single.jpg\";}}"
      ],
      "_price": [
        "2"
      ]
    },
    "variation": [
      
    ]
  },
  {
    "id": 25,
    "name": "Album",
    "slug": "album",
    "date_created": {
      "date": "2021-09-28 13:40:15.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:35.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.",
    "short_description": "This is a simple, virtual product.",
    "sku": "woo-album",
    "price": "15",
    "regular_price": "15",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": {
      "0": [
        
      ],
      "1": [
        
      ],
      "2": [
        
      ],
      "name": "pa_color",
      "value": "",
      "position": 0,
      "is_visible": 1,
      "is_variation": 0,
      "is_taxonomy": 1
    },
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "yes",
    "downloadable": "yes",
    "category_ids": [
      20
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": {
      "22d1426f-4a8f-4d5c-999d-45755b3ce15a": {
        
      },
      "981fb9d0-e520-41a0-9519-29e19831ddbb": {
        
      }
    },
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/album-1-1.jpg",
    "gallery_image_ids": null,
    "download_limit": 1,
    "download_expiry": 1,
    "rating_counts": [
      
    ],
    "average_rating": "0",
    "review_count": 0,
    "product_url": "",
    "button_text": "",
    "meta_data": {
      "_sku": [
        "woo-album"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "yes"
      ],
      "_downloadable": [
        "yes"
      ],
      "_download_limit": [
        "1"
      ],
      "_download_expiry": [
        "1"
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-73"
      ],
      "_regular_price": [
        "15"
      ],
      "_thumbnail_id": [
        "54"
      ],
      "_downloadable_files": [
        "a:2:{s:36:\"22d1426f-4a8f-4d5c-999d-45755b3ce15a\";a:3:{s:2:\"id\";s:36:\"22d1426f-4a8f-4d5c-999d-45755b3ce15a\";s:4:\"name\";s:8:\"Single 1\";s:4:\"file\";s:85:\"https://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2017/08/single.jpg\";}s:36:\"981fb9d0-e520-41a0-9519-29e19831ddbb\";a:3:{s:2:\"id\";s:36:\"981fb9d0-e520-41a0-9519-29e19831ddbb\";s:4:\"name\";s:8:\"Single 2\";s:4:\"file\";s:84:\"https://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2017/08/album.jpg\";}}"
      ],
      "_price": [
        "15"
      ]
    },
    "variation": [
      
    ]
  },
  {
    "id": 24,
    "name": "Polo",
    "slug": "polo",
    "date_created": {
      "date": "2021-09-28 13:40:15.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:34.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "short_description": "This is a simple product.",
    "sku": "woo-polo",
    "price": "20",
    "regular_price": "20",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": {
      "0": [
        
      ],
      "name": "pa_color",
      "value": "",
      "position": 0,
      "is_visible": 1,
      "is_variation": 0,
      "is_taxonomy": 1
    },
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "no",
    "downloadable": "no",
    "category_ids": [
      17
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": [
      
    ],
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/polo-2-1.jpg",
    "gallery_image_ids": null,
    "download_limit": 0,
    "download_expiry": 0,
    "rating_counts": [
      
    ],
    "average_rating": "0",
    "review_count": 0,
    "product_url": "",
    "button_text": "",
    "meta_data": {
      "_sku": [
        "woo-polo"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "no"
      ],
      "_downloadable": [
        "no"
      ],
      "_download_limit": [
        "0"
      ],
      "_download_expiry": [
        "0"
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-70"
      ],
      "_regular_price": [
        "20"
      ],
      "_thumbnail_id": [
        "53"
      ],
      "_product_attributes": [
        "a:1:{s:8:\"pa_color\";a:6:{s:4:\"name\";s:8:\"pa_color\";s:5:\"value\";s:0:\"\";s:8:\"position\";i:0;s:10:\"is_visible\";i:1;s:12:\"is_variation\";i:0;s:11:\"is_taxonomy\";i:1;}}"
      ],
      "_price": [
        "20"
      ]
    },
    "variation": [
      
    ]
  },
  {
    "id": 23,
    "name": "Long Sleeve Tee",
    "slug": "long-sleeve-tee",
    "date_created": {
      "date": "2021-09-28 13:40:15.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "date_modified": {
      "date": "2021-09-28 13:40:33.000000",
      "timezone_type": 1,
      "timezone": "+00:00"
    },
    "status": "publish",
    "featured": "no",
    "catalog_visibility": "visible",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "short_description": "This is a simple product.",
    "sku": "woo-long-sleeve-tee",
    "price": "25",
    "regular_price": "25",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "total_sales": 0,
    "tax_status": "taxable",
    "tax_class": "",
    "manage_stock": "no",
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "low_stock_amount": "",
    "weight": "",
    "length": "",
    "width": "",
    "height": "",
    "upsell_ids": [
      
    ],
    "cross_sell_ids": [
      
    ],
    "parent_id": 0,
    "reviews_allowed": true,
    "purchase_note": "",
    "attributes": {
      "0": [
        
      ],
      "name": "pa_color",
      "value": "",
      "position": 0,
      "is_visible": 1,
      "is_variation": 0,
      "is_taxonomy": 1
    },
    "default_attributes": [
      
    ],
    "menu_order": 0,
    "post_password": "",
    "virtual": "no",
    "downloadable": "no",
    "category_ids": [
      17
    ],
    "tag_ids": [
      
    ],
    "shipping_class_id": 0,
    "downloads": [
      
    ],
    "image_id": "https://bestinbd.com/projects/web/wp_api/wp-content/uploads/2021/09/long-sleeve-tee-2-1.jpg",
    "gallery_image_ids": null,
    "download_limit": 0,
    "download_expiry": 0,
    "rating_counts": [
      
    ],
    "average_rating": "4.45",
    "review_count": 2,
    "product_url": "",
    "button_text": "",
    "meta_data": {
      "_sku": [
        "woo-long-sleeve-tee"
      ],
      "total_sales": [
        "0"
      ],
      "_tax_status": [
        "taxable"
      ],
      "_tax_class": [
        ""
      ],
      "_manage_stock": [
        "no"
      ],
      "_backorders": [
        "no"
      ],
      "_sold_individually": [
        "no"
      ],
      "_virtual": [
        "no"
      ],
      "_downloadable": [
        "no"
      ],
      "_download_limit": [
        "0"
      ],
      "_download_expiry": [
        "0"
      ],
      "_stock_status": [
        "instock"
      ],
      "_wc_average_rating": [
        "0"
      ],
      "_wc_review_count": [
        "0"
      ],
      "_product_version": [
        "5.7.1"
      ],
      "_wpcom_is_markdown": [
        "1"
      ],
      "_wp_old_slug": [
        "import-placeholder-for-68"
      ],
      "_regular_price": [
        "25"
      ],
      "_thumbnail_id": [
        "52"
      ],
      "_product_attributes": [
        "a:1:{s:8:\"pa_color\";a:6:{s:4:\"name\";s:8:\"pa_color\";s:5:\"value\";s:0:\"\";s:8:\"position\";i:0;s:10:\"is_visible\";i:1;s:12:\"is_variation\";i:0;s:11:\"is_taxonomy\";i:1;}}"
      ],
      "_price": [
        "25"
      ]
    },
    "variation": [
      
    ]
  },
]

class ProductList extends Component {
  render () {
    const { pagination } = this.props;

    return (
      <div className={'product-list'}>
        {products.map(p => (
          <ProductItem
            key={p.id}
            product={p}
          />
        ))}
      </div>
    )
  }
}

export const PaginatedProductList = withPagination(ProductList);