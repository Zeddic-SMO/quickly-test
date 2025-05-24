export interface Company {
  name: string;
  address_line_1: string;
  address_line_2: string;
  address_city: string;
  address_state: string;
  address_zip: string;
  address_country: string;
  default_currency: string;
}

export interface UserProfile {
  full_name: string;
  email: string;
  phone: string;
  roles: string;
  verified: boolean;
  Company: Company;
}
