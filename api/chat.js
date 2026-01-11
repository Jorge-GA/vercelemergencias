const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
    // Vercel maneja los métodos permitidos automáticamente si se configura, 
    // pero lo validamos aquí también.
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { prompt, systemInstruction } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "No prompt provided" });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Usamos gemini-1.5-flash para rapidez y eficiencia en emergencias
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemInstruction || "Eres un asistente experto en primeros auxilios y emergencias sanitarias."
        });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ text });
    } catch (error) {
        console.error("Error in Vercel Function:", error);
        return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};
