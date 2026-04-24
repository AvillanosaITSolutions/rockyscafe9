export const cafeDetails = {
  name: "Rocky's Cafe",
  shortName: 'rockyscafe9',
  logoPath: '/business_logo.jpg',
  tagline: 'Coffee, comfort food, and event catering in one cozy place.',
  status: 'Open daily for dine-in, delivery, and pick-up.',
  address:
    '102 Lopez Arcade, Barangay San Vicente, San Pedro City, Laguna, Philippines 4023',
  phoneDisplay: '0961 051 7729',
  phoneInternational: '+63 961 051 7729',
  phoneLink: 'tel:+639610517729',
  email: 'rockyscafe7@gmail.com',
  instagramHandle: '@rockyscafe9',
  instagramUrl: 'https://www.instagram.com/rockyscafe9',
  facebookUrl: 'https://www.facebook.com/rockyscafe9',
  services: [
    'In-store pickup',
    'Takeout',
    'Delivery',
    'Online booking',
    'In-store shopping',
    'Dine-in',
    'Outdoor seating',
    'Reservations',
  ],
} as const

export const promotionalGallery = [
  {
    src: '/promotional/486115866_17853757374408281_2940636247313788969_n.jpg',
    alt: "Rocky's Cafe mobile storefront with warm ambient lighting.",
  },
  {
    src: '/promotional/image1.png',
    alt: "Iced coffee served on a wooden table at Rocky's Cafe.",
  },
  {
    src: '/promotional/image2.png',
    alt: "A cozy rainy-day cafe view with a cup of coffee and laptop.",
  },
  {
    src: '/promotional/image3.png',
    alt: "Hot coffee by the window during a rainy afternoon.",
  },
  {
    src: '/promotional/image4.png',
    alt: "Cafe meal and colorful drinks in natural sunlight.",
  },
  {
    src: '/promotional/525406070_17870436960408281_2595481149507586359_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
  {
    src: '/promotional/525426830_17870648532408281_7749963284520948670_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
  {
    src: '/promotional/537165315_17873720820408281_1248401490745586632_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
  {
    src: '/promotional/538394871_582991111446456_3642632471712537161_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
  {
    src: '/promotional/541836187_17875477353408281_3579240171022396252_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
  {
    src: '/promotional/554313221_17878293657408281_4702316598849740188_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
  {
    src: '/promotional/556985230_17878417377408281_7902038721754815353_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
  {
    src: '/promotional/560187497_2430155280719411_2702740611496462921_n.jpg',
    alt: "Rocky's Cafe promotional photo.",
  },
] as const

export const menuSections = [
  {
    title: 'Signature Coffee',
    items: [
      { name: 'Rocky\'s Spanish Latte', description: 'Velvety milk, espresso, and caramel finish.', price: 'PHP 160' },
      { name: 'Sea Salt Mocha', description: 'Dark chocolate mocha with sea salt cream.', price: 'PHP 175' },
      { name: 'Honey Cinnamon Cold Brew', description: 'Slow-steeped brew with local honey.', price: 'PHP 170' },
    ],
  },
  {
    title: 'Non-Coffee Favorites',
    items: [
      { name: 'Roasted Matcha Latte', description: 'Premium matcha with fresh milk.', price: 'PHP 165' },
      { name: 'Tablea Tsokolate', description: 'Filipino hot chocolate, rich and comforting.', price: 'PHP 150' },
      { name: 'Strawberry Cream Fizz', description: 'Bright berry soda layered with cream.', price: 'PHP 155' },
    ],
  },
  {
    title: 'Cafe Plates',
    items: [
      { name: 'Chicken Pesto Panini', description: 'Grilled panini with herb pesto and cheese.', price: 'PHP 240' },
      { name: 'Beef Tapa Rice Bowl', description: 'Tender tapa, garlic rice, and egg.', price: 'PHP 255' },
      { name: 'Creamy Truffle Pasta', description: 'Mushrooms and parmesan in truffle cream.', price: 'PHP 285' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Burnt Basque Cheesecake', description: 'Silky center with caramelized top.', price: 'PHP 180' },
      { name: 'Dark Choco Walnut Cookie', description: 'Warm and chunky, perfect with coffee.', price: 'PHP 95' },
      { name: 'Ube Cream Cake Slice', description: 'Soft sponge layered with ube cream.', price: 'PHP 165' },
    ],
  },
] as const
