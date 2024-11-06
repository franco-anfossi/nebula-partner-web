import api from "./api";
import { User } from "@/types/user.types";

export async function getUser(userId: number): Promise<User> {
  const response = await api.get<User>(`/users/${userId}`);
  return response.data;
}

export async function getAllUsers(): Promise<User[]> {
  const response = await api.get<User[]>("/users");
  return response.data;
}

export async function createUser(
  newUser: Omit<User, "id" | "createdAt">,
): Promise<User> {
  const response = await api.post<User>("/users", newUser);
  return response.data;
}

// Puedes añadir otras funciones como actualizar o eliminar usuario si es necesario.
export async function updateUser(
  userId: number,
  updatedData: Partial<Omit<User, "id" | "createdAt">>,
): Promise<User> {
  const response = await api.patch<User>(`/users/${userId}`, updatedData);
  return response.data;
}

export async function deleteUser(userId: number): Promise<void> {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
}
