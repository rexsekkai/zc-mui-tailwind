import { API_URL } from "../constants";

export const getHome = async () => {
    const data = await fetch(`${API_URL}/landing`);
    return data;
};
