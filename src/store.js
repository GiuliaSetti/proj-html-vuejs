import {reactive} from 'vue';

export const store = reactive({

    // NAVBAR
    // navbar data
    navbar: [
        {
          label: "Home",
          url: "#"
        },
        {
          label: "Shop",
          url: "#"
        },
        {
          label: "Products",
          url: "#"
        },
        {
          label: "Categories",
          url: "#"
        },
        {
          label: "News",
          url: "#"
        },
        {
          label: "Elements",
          url: "#"
          },
      ],

      // MAIN

      // featured
      featured: [
        {
          id: 'src/assets/images/black_elegant_leather_jacket-200x260.jpg',
          name: 'Black Leather Jacket',
          desc: 'Men, Jackets, Jeans',
          price: '$235',
          salePrice: '$200',
        },
        {
          id: 'src/assets/images/black_leather_suit-200x260.jpg',
          name: 'Black Leather Suit',
          desc: 'Men, Jackets',
          price: '$176',
          salePrice: null,
        },
        {
          id: 'src/assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg',
          name: 'Blue Jacket & Stripe Tee',
          desc: 'Men, Jackets, Suits',
          price: '$580',
          salePrice: null,
        },
        {
          id: 'src/assets/images/modern_black_leather_suit-200x260.jpg',
          name: 'Modern Black Leather Suit',
          desc: 'Men, Jackets',
          price: '$96',
          salePrice: null,
        }
      ],


      // test categorie
      categories: [
        {
          name: 'Men',
          active: true
        },
        {
          name: 'Women',
          active: false
        },
        {
          name: 'Accessories',
          active: false
        }
      ],

      // collections
      collections:[
        {
          img: 'src/assets/images/winter_collection_bg.jpg',
          title: 'Winter Collection',
          desc: 'stylish and warm',
        },
        {
          img: 'src/assets/images/spring_collection_bg.jpg',
          title: 'Spring Collection',
          desc: 'bright and colorful',
        },
        {
          img: 'src/assets/images/autumn_collection_bg.jpg',
          title: 'Autumn Collection',
          desc: 'rich and comfortable',
        },
      ],






      


      // footer links

      // tags

      tags: ['Black', 'boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers', 'Grey', 'hot', 'Hipster', 'lines', 'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter'],




      // blog
      blog: [
        {
          blogImg: 'src/assets/images/post_img_11-700x441.jpg',
          title: 'Aenean lobortis sapien enim viverra',
          date: 'September 9th, 2015',
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          comments:[]
        },
        {
          blogImg: 'src/assets/images/post_img_12-700x441.jpg',
          title: 'Duic ac masa semper maximus',
          date: 'September 9th, 2015',
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          comments:['hello', 'hi',]
        },
        {
          blogImg: 'src/assets/images/post_img_10-700x441.jpg',
          title: 'Nunc ferminint nulla eu justo sem id',
          date: 'September 9th, 2015',
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          comments:[]
        },
        {
          blogImg: 'src/assets/images/post_img_12-700x441.jpg',
          title: 'Nunc ferminint nulla eu justo sem id',
          date: 'September 9th, 2015',
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          comments:['hello', 'hi', 'great post']
        },
        {
          blogImg: 'src/assets/images/post_img_10-700x441.jpg',
          title: 'Nunc ferminint nulla eu justo sem id',
          date: 'September 9th, 2015',
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          comments:[]
        },

        
      ],

      // test con tutti i prodotti

      products: [

   
        {
          id: 'src/assets/images/black_leather_suit-200x260.jpg',
          name: 'Black Leather Suit',
          price: '$176',
          salePrice: null,
          bestSeller: false,
          newArrival: true,
        }, 
        {
          id: 'src/assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg',
          name: 'Blue Jacket & Strippe Tee',
          price: '$580',
          salePrice: null,
          bestSeller: true,
          newArrival: false,
        },
        {
          id: 'src/assets/images/blue_leather_jacket-200x260.jpg',
          name: 'Blue Leather Jacket',
          price: '$80',
          salePrice: '$60',
          bestSeller: false,
          newArrival: true,
        },
        {
          id: 'src/assets/images/hipster_black_top-200x260.jpg',
          name: 'Hipster Black Top',
          price: '$57',
          salePrice: null,
          bestSeller: true,
          newArrival: true,
          featured: true, 
        },
        {
          id: 'src/assets/images/leather_gloves-200x260.jpg',
          name: 'Leather Gloves',
          price: '$45',
          reviews: 5,
          salePrice: null,
          bestSeller: false,
          newArrival: false,
        },
        {
          id: 'src/assets/images/modern_leather_boots-200x260.jpg',
          name: 'Modern Leather Boots',
          price: '$60',
          salePrice: '$30',
          bestSeller: false,
          newArrival: false,
        },

        {
          id: 'src/assets/images/black_elegant_leather_jacket-200x260.jpg',
          name: 'Black Leather Jacket',
          price: '$235',
          salePrice: '$200',
          reviews: 5,
          bestSeller: true,
          newArrival: true, 
          featured: true,        
        },
        {
          id: 'src/assets/images/black_leather_jacket-200x260.jpg',
          name: 'Black Jacket',
          price: '$125',
          salePrice: null,
          bestSeller: true,
          newArrival: true,
          featured: true, 
        },
        {
          id: 'src/assets/images/modern_love_tee-200x260.jpg',
          name: 'Modern Love Tee',
          price: '$40',
          salePrice: null,
          bestSeller: true,
          newArrival: true,
        }, 
        {
          id: 'src/assets/images/spring_printed_dress-200x260.jpg',
          name: 'Spring Printed Dress',
          price: '$47',
          salePrice: null,
          reviews: 5,
          bestSeller: true,
          newArrival: true,
        },
          
        
             
      ],


      // viewmore

      viewMore:[
        {
          img:'src/assets/images/promo_box_1_bg.jpg',
          advantages: '70% OFF!',
          text: 'Voluptates quis enim, vitae sunt sed quos blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          img:'src/assets/images/promo_box_2_bg.jpg',
          advantages: 'Free Shipping',
          text: 'Voluptates quis enim, vitae sunt sed quos blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
      ]

    




});