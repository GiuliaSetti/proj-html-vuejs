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


      // featured
      featured: [
        {
          name: 'Black Leather Jacket',
          desc: 'Men, Jackets, Jeans',
          price: '$235'
        },
        {
          name: 'Black Leather Suit',
          desc: 'Men, Jackets',
          price: '$176'
        },
        {
          name: 'Blue Jacket & Stripe Tee',
          desc: 'Men, Jackets, Suits',
          price: '$580'
        },
        {
          name: 'Modern Black Leather Suit',
          desc: 'Men, Jackets',
          price: '$96'
        }
      ],


});