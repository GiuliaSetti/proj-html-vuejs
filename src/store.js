import {reactive} from 'vue';

export const store = reactive({


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


      // featusrc
      featured: [
        {
          id: 'black_elegant_leather_jacket',
          name: 'Black Leather Jacket',
          desc: 'Men, Jackets, Jeans',
          price: '$235',
          salePrice: '$200',
        },
        {
          id: 'black_leather_suit',
          name: 'Black Leather Suit',
          desc: 'Men, Jackets',
          price: '$176',
          salePrice: null,
        },
        {
          id: 'blue_jacket_and_white_stripe_tee',
          name: 'Blue Jacket & Stripe Tee',
          desc: 'Men, Jackets, Suits',
          price: '$580',
          salePrice: null,
        },
        {
          id: 'modern_black_leather_suit',
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


});