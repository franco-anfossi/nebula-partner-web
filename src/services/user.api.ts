import { User, UserUpdate } from "@/types/user.types";
import api from "./api";

// Obtener el usuario autenticado
export async function getUser(): Promise<User> {
  const response = await api.get<User>("/api/users/");
  return response.data;
}

// Crear un nuevo usuario
export async function createUser(userData: User): Promise<User> {
  const response = await api.post<User>("/api/users/", userData);
  return response.data;
}

// Actualizar un usuario existente
export async function updateUser(userData: UserUpdate): Promise<User> {
  const response = await api.patch<User>("/api/users/", userData);
  return response.data;
}

// Eliminar el usuario autenticado
export async function deleteUser(): Promise<void> {
  await api.delete("/api/users/");
}
