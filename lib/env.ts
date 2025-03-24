// Environment variables for client and server
export const env = {
  // Base URL for the application
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",

  // Chapa API keys
  CHAPA_PUBLIC_KEY: process.env.NEXT_PUBLIC_CHAPA_PUBLIC_KEY || "CHAPUBK_TEST-eFrEqYSSistkchULWYTP62ub42SJq3OO",
  CHAPA_SECRET_KEY: process.env.CHAPA_SECRET_KEY || "CHASECK_TEST-VKJ0TDe05xNYaxy3eIpzkSXmQ4omWAPU",
}

