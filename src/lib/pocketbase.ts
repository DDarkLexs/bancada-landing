import PocketBase from "pocketbase";

const pocketBaseUrl = import.meta.env.VITE_POCKETBASE_URL;

export const pb = pocketBaseUrl ? new PocketBase(pocketBaseUrl) : null;
