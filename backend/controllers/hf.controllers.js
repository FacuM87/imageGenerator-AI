import { HfInference } from "@huggingface/inference";

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "El prompt es requerido" });
        }

        const inference = new HfInference(process.env.HF_TOKEN);

        const imageBlob = await inference.textToImage({
            model: "black-forest-labs/FLUX.1-dev",
            inputs: prompt,
            provider: "fal-ai",
        });

        const arrayBuffer = await imageBlob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const imageBase64 = buffer.toString("base64");

        res.status(200).json({ image: `data:image/png;base64,${imageBase64}` });

    } catch (error) {
        console.error("Error al generar imagen:", error);
        res.status(500).json({ error: "Error al generar la imagen" });
    }
};
