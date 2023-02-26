const dummyData = [
  {
    id: 1,
    name: 'Pendant lamp',
    price: 42.9,
    old_price: 54.0,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['lighting', 'decor', 'Bedding', 'Garden'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/rtu6jbnc3s7zjia/01.jpg?dl=0',
      'https://dl.dropbox.com/s/rtu6jbnc3s7zjia/01.jpg?dl=0',
      'https://dl.dropbox.com/s/rtu6jbnc3s7zjia/01.jpg?dl=0',
    ],
  },
  {
    id: 2,
    name: 'Wooden chair',
    price: 187.0,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['chairs & tables', 'office', 'decor'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/p8ze297ef58kd75/02.jpg?dl=0',
      'https://dl.dropbox.com/s/p8ze297ef58kd75/02.jpg?dl=0',
      'https://dl.dropbox.com/s/p8ze297ef58kd75/02.jpg?dl=0',
    ],
  },
  {
    id: 3,
    name: 'Stool dark grey',
    price: 254.6,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['chairs & tables', 'office', 'bedding'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/eqtp3j36ntuf87i/03.jpg?dl=0',
      'https://dl.dropbox.com/s/eqtp3j36ntuf87i/03.jpg?dl=0',
      'https://dl.dropbox.com/s/eqtp3j36ntuf87i/03.jpg?dl=0',
    ],
  },
  {
    id: 4,
    name: 'Table & 3 Chairs',
    price: 842.9,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['chairs & tables', 'office', 'lightning', 'garden'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/kf2i42cipqfnvva/04.jpg?dl=0',
      'https://dl.dropbox.com/s/kf2i42cipqfnvva/04.jpg?dl=0',
      'https://dl.dropbox.com/s/kf2i42cipqfnvva/04.jpg?dl=0',
    ],
  },
  {
    id: 5,
    name: 'Chair white',
    price: 164.7,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['chairs & tables', 'office', 'chair & tables', 'garden'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/h2mji6zepel3j2b/05.jpg?dl=0',
      'https://dl.dropbox.com/s/h2mji6zepel3j2b/05.jpg?dl=0',
      'https://dl.dropbox.com/s/h2mji6zepel3j2b/05.jpg?dl=0',
    ],
  },
  {
    id: 6,
    name: 'Armchair grey',
    price: 229.7,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['chairs & tables', 'office', 'decor'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/h4ne3gpdxluqwk7/06.jpg?dl=0',
      'https://dl.dropbox.com/s/h4ne3gpdxluqwk7/06.jpg?dl=0',
      'https://dl.dropbox.com/s/h4ne3gpdxluqwk7/06.jpg?dl=0',
    ],
  },
  {
    id: 7,
    name: 'Chair yellow',
    price: 156.3,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['chairs & tables', 'lighting', 'decor'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/ksq0lntuojl6fye/07.jpg?dl=0',
      'https://dl.dropbox.com/s/ksq0lntuojl6fye/07.jpg?dl=0',
      'https://dl.dropbox.com/s/ksq0lntuojl6fye/07.jpg?dl=0',
    ],
  },
  {
    id: 8,
    name: 'Armchair blue',
    price: 229.7,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['decor', 'bedding'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/wm07hsqlydxjqew/08.jpg?dl=0',
      'https://dl.dropbox.com/s/wm07hsqlydxjqew/08.jpg?dl=0',
      'https://dl.dropbox.com/s/wm07hsqlydxjqew/08.jpg?dl=0',
    ],
  },
  {
    id: 9,
    name: 'Brown Chair',
    price: 238.2,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['garden', 'lighting'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/yz529qvzra5suao/09.jpg?dl=0',
      'https://dl.dropbox.com/s/yz529qvzra5suao/09.jpg?dl=0',
      'https://dl.dropbox.com/s/yz529qvzra5suao/09.jpg?dl=0',
    ],
  },
  {
    id: 10,
    name: 'Velvet Elowen Chair',
    price: 340.0,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['bedding', 'office', 'chair & tables'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/8vivalg9zndbn8c/10.jpg?dl=0',
      'https://dl.dropbox.com/s/8vivalg9zndbn8c/10.jpg?dl=0',
      'https://dl.dropbox.com/s/8vivalg9zndbn8c/10.jpg?dl=0',
    ],
  },
  {
    id: 11,
    name: 'Wooden armchair',
    price: 377.0,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['chairs & tables', 'Decor'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/faflm5k0legpyha/11.jpg?dl=0',
      'https://dl.dropbox.com/s/faflm5k0legpyha/11.jpg?dl=0',
      'https://dl.dropbox.com/s/faflm5k0legpyha/11.jpg?dl=0',
    ],
  },
  {
    id: 12,
    name: 'Soft armchair',
    price: 302.4,
    old_price: 354.8,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['chairs & tables', 'bedding', 'garden'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/xdf9tfpqny5rwby/12.jpg?dl=0',
      'https://dl.dropbox.com/s/xdf9tfpqny5rwby/12.jpg?dl=0',
      'https://dl.dropbox.com/s/xdf9tfpqny5rwby/12.jpg?dl=0',
    ],
  },
  {
    id: 13,
    name: 'Draper Sofa',
    price: 635.0,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['chairs & tables', 'Garden'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/7v4jwgrvvonj9kx/13.jpg?dl=0',
      'https://dl.dropbox.com/s/7v4jwgrvvonj9kx/13.jpg?dl=0',
      'https://dl.dropbox.com/s/7v4jwgrvvonj9kx/13.jpg?dl=0',
    ],
  },
  {
    id: 14,
    name: 'Pendant lamp',
    price: 30.0,
    old_price: 38.0,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['Bedding', 'Decor'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/m416rphwvpm0xkl/14.jpg?dl=0',
      'https://dl.dropbox.com/s/m416rphwvpm0xkl/14.jpg?dl=0',
      'https://dl.dropbox.com/s/m416rphwvpm0xkl/14.jpg?dl=0',
    ],
  },
  {
    id: 15,
    name: 'Wood clock',
    price: 24.5,
    old_price: 38.0,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: true,
    is_sale: false,
    is_new: true,
    is_featured: false,
    type: ['lighting', 'office'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/cr5phped7x0wxx2/15.jpg?dl=0',
      'https://dl.dropbox.com/s/cr5phped7x0wxx2/15.jpg?dl=0',
      'https://dl.dropbox.com/s/cr5phped7x0wxx2/15.jpg?dl=0',
    ],
  },
  {
    id: 16,
    name: 'Bar stool',
    price: 22.5,
    description:
      'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
    colors: ['color01', 'color02', 'color03', 'color04', 'color05'],
    rating: 5.0,
    is_bestseller: false,
    is_sale: true,
    is_new: false,
    is_featured: true,
    type: ['Office', 'bedding'],
    reviews: [
      {
        id: 1,
        name: 'Adrianna Mercado',
        image: 'https://dl.dropbox.com/s/j84gakphpk67iwd/01.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 5.0,
        date: '23 Jan',
      },
      {
        id: 2,
        name: 'Dante Valdez',
        image: 'https://dl.dropbox.com/s/xlaftgcgpmnhhg8/02.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 2,
        date: '23 Jan',
      },
      {
        id: 3,
        name: 'Troy Ingram',
        image: 'https://dl.dropbox.com/s/52ypqf3l6v1el1r/03.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
      {
        id: 4,
        name: 'Joshua Bean',
        image: 'https://dl.dropbox.com/s/8tv1xto73kqd0g8/04.jpg?dl=0',
        comment:
          'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        rating: 3,
        date: '23 Jan',
      },
    ],
    images: [
      'https://dl.dropbox.com/s/egnanu19eljmasy/16.jpg?dl=0',
      'https://dl.dropbox.com/s/egnanu19eljmasy/16.jpg?dl=0',
      'https://dl.dropbox.com/s/egnanu19eljmasy/16.jpg?dl=0',
    ],
  },
];

export {dummyData};
