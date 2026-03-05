export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  seller: {
    name: string;
    rating: number;
    avatar: string;
  };
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
  location: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'buyer' | 'seller' | 'both';
}

export type Category = 'Electronics' | 'Fashion' | 'Home' | 'Sports' | 'Vehicles' | 'Other';