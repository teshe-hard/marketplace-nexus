import { Product } from './types';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'High-Performance Gaming Laptop',
    description: 'Latest model with RTX 4080, 32GB RAM, 1TB SSD. Perfect for gaming and professional work.',
    price: 1899,
    category: 'Electronics',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8593d8de-cdba-417d-80d5-d0dc1d201395/product-laptop-60a70f3a-1772703006732.webp',
    seller: {
      name: 'TechGeek',
      rating: 4.9,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechGeek'
    },
    condition: 'Like New',
    location: 'San Francisco, CA',
    createdAt: '2023-10-01'
  },
  {
    id: '2',
    title: 'Premium Leather Handbag',
    description: 'Elegant genuine leather handbag, handcrafted with premium materials. Timeless design.',
    price: 250,
    category: 'Fashion',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8593d8de-cdba-417d-80d5-d0dc1d201395/product-fashion-0ae85457-1772703007239.webp',
    seller: {
      name: 'FashionistaStore',
      rating: 4.7,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fashionista'
    },
    condition: 'New',
    location: 'New York, NY',
    createdAt: '2023-10-05'
  },
  {
    id: '3',
    title: 'Modern Ergonomic Office Chair',
    description: 'Ultimate comfort for long working hours. Adjustable height and lumbar support.',
    price: 450,
    category: 'Home',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8593d8de-cdba-417d-80d5-d0dc1d201395/product-home-c0a3b8fb-1772703011851.webp',
    seller: {
      name: 'HomeInteriors',
      rating: 4.8,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Home'
    },
    condition: 'New',
    location: 'Austin, TX',
    createdAt: '2023-10-10'
  },
  {
    id: '4',
    title: 'Professional Mountain Bike',
    description: 'Rugged and reliable mountain bike for all terrains. Shimano gears, lightweight frame.',
    price: 899,
    category: 'Sports',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8593d8de-cdba-417d-80d5-d0dc1d201395/product-sports-482c206f-1772703007248.webp',
    seller: {
      name: 'EcoAdventurer',
      rating: 4.5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adventure'
    },
    condition: 'Good',
    location: 'Denver, CO',
    createdAt: '2023-10-12'
  }
];