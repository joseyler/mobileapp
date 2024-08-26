import clienteAxios from "./axios";

export async function login(body: { email: string; password: string }):Promise<boolean> {
  try {
    const response = await clienteAxios.post("/login", body );
    const token = response.data.accessToken;
   // localStorage.setItem("accessToken", token);
    return true;
  } catch (e) {
    return false;
  }
}