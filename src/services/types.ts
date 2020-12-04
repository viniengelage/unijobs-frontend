// Response attributes in the product or service
export interface IItem {
  id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  thumbnail_id: number;
  thumbnail_url: string;
  image_id: number;
  image_url: string;
  name: string;
  course: string;
  contact: string;
  updatedAt: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    academic_record: number;
    user_type: string;
    phone: string;
    course: string;
    created_at: Date;
    updated_at: Date;
    avatar: number;
    avatar_url: string;
  };
}
// Response attributes in the courses
export interface ICourses {
  value: string;
  label: string;
}
// Response attributes in the users
export interface IUsers {
  value: string;
  label: string;
}

// Retired from the da page of products | backup
interface Item {
  id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
  name: string;
  course: string;
  contact: string;
}
