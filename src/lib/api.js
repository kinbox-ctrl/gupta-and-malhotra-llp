import axios from "axios";

// Origin of the API that serves /api/inquiries (set in .env).
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";
// False when no backend is configured; the contact form then falls back to email.
export const HAS_BACKEND = Boolean(BACKEND_URL);
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
});

export async function submitInquiry(payload) {
  const { data } = await api.post("/inquiries", payload);
  return data;
}

export async function fetchInquiries() {
  const { data } = await api.get("/inquiries");
  return data;
}
