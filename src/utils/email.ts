export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<null | string> {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) return null;

    return response.json();
  } catch {
    return "error happened";
  }
}
