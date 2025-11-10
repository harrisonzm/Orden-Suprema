// Tipos compartidos para el backend

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'contractor' | 'assassin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Contract {
  id: string;
  title: string;
  description: string;
  reward: number;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  contractorId: string;
  assassinId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export type UserRole = 'admin' | 'contractor' | 'assassin';
export type ContractStatus = 'open' | 'in_progress' | 'completed' | 'cancelled';
