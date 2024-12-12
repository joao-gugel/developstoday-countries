type Method = "GET" | "POST" | "PUT" | "DELETE";

export default async function api(route: string, method: Method) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  return fetch(`${BASE_URL}${route}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
