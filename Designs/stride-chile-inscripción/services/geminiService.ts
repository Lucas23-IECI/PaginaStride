import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a production app, this key should be handled via backend proxy or securely injected.
// We assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askCoachAI = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest', // Using a fast model for chat-like interactions
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `You are an expert running coach for Stride Chile, a social running community. 
              Your tone is encouraging, energetic, and professional. 
              Answer the following question about running, training, or recovery briefly (under 100 words): ${question}`
            }
          ]
        }
      ],
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple queries
      }
    });

    return response.text || "Lo siento, no pude procesar tu pregunta en este momento.";
  } catch (error) {
    console.error("Error asking Gemini:", error);
    return "Hubo un error al conectar con el entrenador virtual. Por favor intenta más tarde.";
  }
};