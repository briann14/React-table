export interface User {
    id: number;
    email: string;
    first_name: string;
  }
  
  export type Response = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
  };
  
  export default async function fetchUsers(page: number): Promise<Response> {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await response.json();
    return json;
  }
  