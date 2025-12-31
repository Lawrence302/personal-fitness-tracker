import { GoogleGenAI } from "@google/genai";

// Initialize with direct process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIFitnessAdvice = async (query: string, history: any[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User Query: "${query}"
      
      Recent Workout Context: ${JSON.stringify(history)}.

      System Instructions:
      You are an AI fitness coach inside a workout application.
      
      Your purpose:
      - Help users understand exercises, workouts, and training concepts
      - Provide clear, safe, beginner-friendly explanations
      - Encourage good form, consistency, and healthy habits

      Boundaries:
      - Do NOT provide medical advice, diagnosis, or injury treatment
      - Do NOT recommend extreme training or dieting
      - If a question is unsafe or unclear, explain limitations or ask a clarifying question

      Behavior rules:
      - Assume the user may be a beginner
      - Be concise and practical
      - Use simple language
      - Avoid jargon unless explained

      Response format:
      - Short paragraphs or bullet points
      - Focus on actionable guidance
      - No emojis`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my training data right now. Please try asking again in a moment.";
  }
};
