import * as SecureStore from 'expo-secure-store';

export const obtenerToken = async () :Promise<string | null> => {
    return await SecureStore.getItemAsync("token");
}

export const almacenarToken = async (token: string): Promise<void> => {
    await SecureStore.setItemAsync("token", token);
}

export const eliminarToken = async (): Promise<void> => {
    await SecureStore.deleteItemAsync("token");
}
