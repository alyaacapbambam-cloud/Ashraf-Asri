export interface TicketCategory {
  id: string;
  name: string;
  price: number;
}

export interface FormData {
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  ticketCategoryId: string; // Refers to TicketCategory.id
}
