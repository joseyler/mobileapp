import { UserInfo } from "@/app/model/user-info";
import clienteAxios, { updateTokenBackend } from "./axios";
import { almacenarToken } from './secure-store';

export async function login(body: { email: string; password: string }):Promise<boolean> {
  try {
    const response = await clienteAxios.post("/login", body );
    const token = response.data.accessToken;
    await almacenarToken(token);
    updateTokenBackend(token);
    return true;
  } catch (e) {
    return false;
  }
}

export async function getUserInformation():Promise<UserInfo> {
  try {
    const response = await clienteAxios.get("/usuarios/info" );
    return response.data;
  } catch (e) {
    throw e;
  }
}