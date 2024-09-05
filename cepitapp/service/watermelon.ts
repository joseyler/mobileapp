import { database } from "@/app/database/index.native";




export async function getWatermelon():Promise<boolean> {
    try {
        const usuario = database.get('usuarios')
        console.log(usuario)
      return true;
    } catch (e) {
      return false;
    }
}

