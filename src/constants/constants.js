import HomeTabSvg from '../../src/assets/svg/HomeTabSvg';
import CategoriesTabSvg from '../../src/assets/svg/CategoriesTabSvg';
import OrderTabSvg from '../../src/assets/svg/OrderTabSvg';
import WishlistTabSvg from '../../src/assets/svg/WishlistTabSvg';
import ProfileTabSvg from '../../src/assets/svg/ProfileTabSvg';
import AddressHomeSvg from '../../src/assets/svg/AddressHomeSvg';
import AddressBriefcaseSvg from '../../src/assets/svg/AddressBriefcaseSvg';
import AddressMapPinSvg from '../../src/assets/svg/AddressMapPinSvg';
import WarningSvg from '../../src/assets/svg/WarningSvg';
import SuccessSvg from '../../src/assets/svg/SuccessSvg';
import NotificationGiftSvg from '../../src/assets/svg/NotificationGiftSvg';

const tabs = [
  {
    name: 'Home',
    icon: HomeTabSvg,
  },
  {
    name: 'Categories',
    icon: CategoriesTabSvg,
  },
  {
    name: 'Order',
    icon: OrderTabSvg,
  },
  {
    name: 'Wishlist',
    icon: WishlistTabSvg,
  },
  {
    name: 'Profile',
    icon: ProfileTabSvg,
  },
];

const history = [
  {
    id: '1',
    number: '100345',
    date: 'Feb 25, 2023 at 8:32 PM',
    total: '514.7',
    status: 'Shipping',
    products: [
      {
        id: '1',
        name: 'Dining chair',
        color: 'white',
        quantity: 1,
        price: 214.0,
      },
      {
        id: '2',
        name: 'Garden armchair',
        color: 'white',
        quantity: 1,
        price: 312.0,
      },
    ],
  },
  {
    id: '2',
    number: '601246',
    date: 'Feb 25, 2023 at 8:32 PM',
    total: '149.5',
    status: 'Delivered',
    products: [
      {
        id: '1',
        name: 'Dining chair',
        color: 'white',
        quantity: 1,
        price: 214.0,
      },
      {
        id: '2',
        name: 'Garden armchair',
        color: 'white',
        quantity: 1,
        price: 312.0,
      },
    ],
  },
  {
    id: '3',
    number: '601247',
    date: 'Feb 25, 2023 at 8:32 PM',
    total: '34.3',
    status: 'Delivered',
    products: [
      {
        id: '1',
        name: 'Dining chair',
        color: 'white',
        quantity: 1,
        price: 214.0,
      },
      {
        id: '2',
        name: 'Garden armchair',
        color: 'white',
        quantity: 1,
        price: 312.0,
      },
    ],
  },
  {
    id: '4',
    number: '601248',
    date: 'Feb 25, 2023 at 8:32 PM',
    total: '144.8',
    status: 'Cancelled',
    products: [
      {
        id: '1',
        name: 'Dining chair',
        color: 'white',
        quantity: 1,
        price: 214.0,
      },
      {
        id: '2',
        name: 'Garden armchair',
        color: 'white',
        quantity: 1,
        price: 312.0,
      },
    ],
  },
];

const carousel = [
  {
    id: '1',
    title: `Duvet cover and${'\n'}pillowcase 30% Off`,
    image: 'https://dl.dropbox.com/s/5aiauzw4xlejuod/01.jpg?dl=0',
  },
  {
    id: '2',
    title: `Duvet cover and${'\n'}pillowcase 30% Off`,
    image: 'https://dl.dropbox.com/s/5aiauzw4xlejuod/01.jpg?dl=0',
  },
  {
    id: '3',
    title: `Duvet cover and${'\n'}pillowcase 30% Off`,
    image: 'https://dl.dropbox.com/s/5aiauzw4xlejuod/01.jpg?dl=0',
  },
];

const categories = {
  home_one: [
    {
      id: '1',
      title: 'Lightning',
      quantity: 36,
      image: 'https://dl.dropbox.com/s/6mypegugpmz2ckl/01.jpg?dl=0',
    },
    {
      id: '2',
      title: 'Chairs & Tables',
      quantity: 150,
      image: 'https://dl.dropbox.com/s/84pr2q640ym65rg/02.jpg?dl=0',
    },
    {
      id: '3',
      title: 'Decor',
      quantity: 112,
      image: 'https://dl.dropbox.com/s/mh7o8qtauut0tyq/03.jpg?dl=0',
    },
    {
      id: '4',
      title: 'Bedding',
      quantity: 621,
      image: 'https://dl.dropbox.com/s/gszzr5zazsbwt2t/04.jpg?dl=0',
    },
    {
      id: '5',
      title: 'Lightning',
      quantity: 36,
      image: 'https://dl.dropbox.com/s/6mypegugpmz2ckl/01.jpg?dl=0',
    },
    {
      id: '6',
      title: 'Chairs & Tables',
      quantity: 150,
      image: 'https://dl.dropbox.com/s/84pr2q640ym65rg/02.jpg?dl=0',
    },
  ],
  home_two: [],
  search: [
    {
      title: 'lightning',
      image: 'https://dl.dropbox.com/s/ifke95fi2uia15p/01.png?dl=0',
      quantity: 36,
    },
    {
      title: 'bedding',
      image: 'https://dl.dropbox.com/s/oigju1z925j09ot/02.png?dl=0',
      quantity: 150,
    },
    {
      title: 'Chairs & Tables',
      image: 'https://dl.dropbox.com/s/x1djxht9mvab9vu/03.png?dl=0',
      quantity: 112,
    },
    {
      title: 'Office',
      image: 'https://dl.dropbox.com/s/0udvcazlw8reei4/04.png?dl=0',
      quantity: 621,
    },
    {
      title: 'Decor',
      image: 'https://dl.dropbox.com/s/zz2si6py9svcf6n/05.png?dl=0',
      quantity: 36,
    },
    {
      title: 'Garden',
      image: 'https://dl.dropbox.com/s/2rdlymevwn1m3n0/06.png?dl=0',
      quantity: 150,
    },
  ],
};

const banners = [
  'https://dl.dropbox.com/s/5aiauzw4xlejuod/01.jpg?dl=0',
  'https://dl.dropbox.com/s/mkg2l19yash4chb/05.jpg?dl=0',
  'https://dl.dropbox.com/s/hj9tz40yuzf8trf/06.jpg?dl=0',
];

const addresses = [
  {
    id: '1',
    type: 'Home',
    address: '8000 S Kirkland Ave, Chicago, IL 6065...',
    icon: AddressHomeSvg,
  },
  {
    id: '2',
    type: 'Work',
    address: '8000 S Kirkland Ave, Chicago, IL 6066...',
    icon: AddressBriefcaseSvg,
  },
  {
    id: '3',
    type: 'Other',
    address: '8000 S Kirkland Ave, Chicago, IL 6067...',
    icon: AddressMapPinSvg,
  },
];

const promocodes = [
  {
    id: 1,
    code: '20lamplight',
    discount: '20%',
    expires: 'Feb 29, 2023 at 12:36 PM',
    status: 'active',
  },
  {
    id: 2,
    code: '25%fridaysale',
    discount: '25%',
    expires: 'Feb 29, 2023 at 12:36 PM',
    status: 'active',
  },
  {
    id: 3,
    code: '10%rooms23',
    discount: '10%',
    expires: 'Expire in 3 days',
    status: 'inactive',
  },
];

const notifications = [
  {
    id: 1,
    icon: WarningSvg,
    title: 'Please confirm your email.',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Feb 29, 2023 at 12:36 PM',
  },
  {
    id: 2,
    icon: SuccessSvg,
    title: 'Your support ticket №78912365',
    date: 'Feb 29, 2023 at 12:36 PM',
  },
  {
    id: 3,
    icon: NotificationGiftSvg,
    title: 'Black Friday Sales!',
    image: 'https://dl.dropbox.com/s/n53r5b0lrqat9fl/01.jpg?dl=0',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Feb 29, 2023 at 12:36 PM',
  },
];

const onboardingData = [
  {
    title: 'Welcome\nto Funiq!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
    image: 'https://dl.dropbox.com/s/wmx13so4jt5754b/04.jpg?dl=0',
  },
  {
    title: 'Easy Track\nyour Order!',
    description: 'Labore sunt culpa\nexcepteur culpa occaecat ex nisi mollit.',
    image: 'https://dl.dropbox.com/s/ij2deok4ib32zlx/05.jpg?dl=0',
  },
  {
    title: 'Door to Door\nDelivery!',
    description: 'Labore sunt culpa\nexcepteur culpa occaecat ex nisi mollit.',
    image: 'https://dl.dropbox.com/s/1o8iuhq5q8r11mo/06.jpg?dl=0',
  },
];

const sortingBy = [
  {id: 1, title: 'Best match'},
  {id: 2, title: 'Price: low to high'},
  {id: 3, title: 'Price: high to low'},
  {id: 4, title: 'Newest'},
  {id: 5, title: 'Customer rating'},
  {id: 6, title: 'Most popular'},
];

const paymentMethods = [
  {
    id: 1,
    type: 'Visa',
    logo: 'https://dl.dropbox.com/s/q4wpyoarxhqu7nd/01.png?dl=0',
    cardNumber: '**** 4864',
  },
  {
    id: 2,
    type: 'MasterCard',
    logo: 'https://dl.dropbox.com/s/5qc6uetcohcqjm7/02.png?dl=0',
    cardNumber: '**** 3597',
  },
  {
    id: 3,
    type: 'Apple Pay',
    logo: 'https://dl.dropbox.com/s/ef38mkggc33g45r/04.png?dl=0',
  },
];

export {
  tabs,
  history,
  banners,
  carousel,
  categories,
  notifications,
  addresses,
  promocodes,
  onboardingData,
  sortingBy,
  paymentMethods,
};
