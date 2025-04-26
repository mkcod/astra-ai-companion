# 🤖 Astra AI Companion 

**Astra AI Companion** is a real-time AI companion powered by **Azure AI Agent Service** and **Semantic Kernel Realtime Agent**. It offers a voice-based support system for various use cases such as **mental health**, **personality development**, and **Grade 2 Maths Olympiad preparation**. Astra blends soulful, empathetic conversation with intelligent function calls to assist users in a variety of domains.

This repository provides a **FastAPI backend server** for real-time communication and a **frontend application** built with modern web technologies.

![](https://github.com/mkcod/astra-ai-companion/blob/main/banner.PNG "Astra - The Angel")

## 🚀 Features

- **Real-time Voice Interaction**: Users can engage with Astra through real-time voice-based conversation.
- **Multiple Domains**: Astra provides support for:
  - **Mental Health**: Emotional support and advice.
  - **Personality Development**: Guidance for self-improvement and growth.
  - **Grade 2 Maths Olympiad**: Assistance for preparing for math Olympiad exams.
- **Web Search Integration**: Astra can search the web using SerpAPI for factual information.
- **Date and Time Awareness**: Astra can provide current date and time information.
- **AI-Driven Responses**: Powered by Azure AI Agent Service and Semantic Kernel.

## 🔮 Future Use Cases
1.  **Multi-Agent Emotional Resonance and Adaptive Support System:**
    -   **A Vocal Emotion Analyst Agent** would dissect the user's vocal cues, identifying nuanced emotional states.
    -   **A Biofeedback Integration Agent** would process physiological data from wearables (if available).
    -   **A Therapeutic Dialogue Agent** would then use this combined information to tailor empathetic responses and guide the user through appropriate voice-based exercises or calming techniques, dynamically adapting the interaction based on real-time emotional and physiological feedback.

2.  **Context-Aware Proactive Environmental Intelligence:**
    -   **Acoustic Scene Understanding Agent** would analyze ambient sounds and spoken conversations (with strict privacy protocols).
    -   **Knowledge Retrieval Agents** (specialized by domain) would proactively fetch relevant information based on the detected context.
    -   **A Voice Interface Orchestration Agent** would then present this information through natural voice prompts at opportune moments, offering seamless and contextually relevant assistance without explicit user commands.

3.  **Collaborative Voice-Driven Creative Narrative Generation:**
    -   **A Story Architect Agent** would manage the overall narrative structure and potential plotlines.
    -   **Character Voice Emulation Agents** (potentially with distinct personalities) would embody different characters within the story.
    -   **A User Voice Interaction Agent** would interpret the user's voice commands and emotional input, influencing the story's progression and character interactions in real-time through dynamic dialogue and plot adjustments orchestrated by the other agents.

4.  **Distributed Voice-Based Collaborative Creation Suite:**
    -   **A Voice Input and Interpretation Agent** would transcribe and semantically understand voice input from multiple users.
    -   **Specialized Creation Agents** (e.g., a Melody Generation Agent, a Lyric Suggestion Agent, a Code Snippet Generator) would process these voice inputs collaboratively.
    -   **A Synchronization and Merging Agent** would weave together the contributions from different users and agents into a unified creative output (e.g., a musical piece, a written document, or even code), with voice-based feedback and iteration driving the collaborative process.

## 💻 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/astra-ai-companion.git
   cd astra-ai-companion
   ```

2. **Set Up Backend (FastAPI Server)**:
   - Create a `.env` file by copying the example file:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and add your configuration values such as Azure credentials, API keys, etc.
   - Install required dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the FastAPI server using uvicorn:
     ```bash
     uvicorn server:app --reload
     ```
     This will start the backend server at `http://127.0.0.1:8000`.

3. **Set Up Frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend development server:
     ```bash
     npm run dev
     ```
     After running the above command, you should see the frontend accessible at the provided URL (e.g., `http://localhost:3000`).

## 🏃‍♀️ Running Instructions

**Backend**:
Ensure your backend server is running with `uvicorn` (as described above).

**Frontend**:
Make sure the frontend server is running with `npm run dev`.

**Access**:
Visit the site in your browser using the URL provided by the frontend development server (e.g., `http://localhost:3000`).

## ❤️ Special Thanks

I would like to extend my heartfelt gratitude to my family for their continuous support and encouragement during the development of this project. Your love and belief in me have been my greatest source of strength.

## ⚖️ License

This project is licensed under the MIT License, applicable only during the Microsoft AI Agent Hackathon 2025.

## 📒 Note

This repository is my submission for the **Microsoft AI Agent Hackathon 2025**. The project showcases the integration of Azure AI Agent Service with a voice-enabled assistant built using FastAPI and Semantic Kernel Realtime Agent.
