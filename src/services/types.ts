// Response attributes in the product or service
export interface IItem {
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
  name: string;
  course: string;
  contact: string;
  updatedAt: string,
  createdAt: string,
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
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
  name: string;
  course: string;
  contact: string;
}
