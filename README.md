# 🤖 Astra AI Companion 
--
## 🤯 Problem Statement
While real-time voice assistants are becoming popular, most lack **domain-specific expertise**, **emotional sensitivity**, and **seamless interaction quality**.
- From a business perspective, this gap limits user engagement, satisfaction, and long-term retention — because generalized conversations fail to meet the evolving expectations of specialized, value-driven assistance.
- For end-users, especially children, young learners, and emotionally sensitive individuals, today's voice technologies often feel transactional rather than transformational.

Users need a voice companion that not only responds instantly but also adapts intelligently to different emotional and cognitive contexts, offering specialized, empathetic, and accurate support across key areas like mental health, personality development, and education.

A solution like Astra, which delivers real-time, domain-focused, and emotionally intelligent experiences, not only fulfills critical user needs but also opens up new possibilities for personalized learning, well-being enhancement, and lifelong engagement — driving both individual growth and broader business impact.

**Astra AI Companion** is powered by **Azure AI Agent Service** and **Semantic Kernel Realtime Agent**. It offers a voice-based support system for various use cases such as **mental health**, **personality development**, and **Grade 2 Maths Olympiad preparation**. Astra blends soulful, empathetic conversation with intelligent function calls to assist users in a variety of domains.

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

![](https://github.com/mkcod/astra-ai-companion/blob/main/features.PNG "Features")

## 🏋️ Challenges Faced
1. **Real-Time Voice Latency**:
Managing and minimizing delays during live voice interactions to create a smooth, natural conversation flow.

2. **Agent Orchestration Complexity**:
Coordinating multiple specialized agents seamlessly without making conversations feel disjointed or robotic.

3. **Balancing Empathy and Accuracy**:
Designing responses that are both emotionally supportive and factually correct across diverse domains.

4. **Integrating FastAPI with Frontend Realtime Communication**:
Building a backend that could handle quick, reliable voice data exchange with a modern frontend UI.

5. **Domain Specialization Without Overcomplication**:
Creating agents that were deeply knowledgeable yet simple and accessible for users of all ages.

6. **Maintaining Context and Continuity**:
Ensuring Astra could remember user interactions and adapt responses appropriately within a real-time voice session.

## Architecture

Astra AI Companion is designed using a modular, scalable architecture that combines Azure AI Agent Service, Semantic Kernel, FastAPI WebSocket, and a lightweight HTML/JavaScript frontend to enable real-time, intelligent conversations.

**Azure AI Agent Service**
Azure AI Agent Service powers the intelligent agent orchestration, handling dynamic reasoning, tool selection, and multi-step task completion with full plugin and API integration.

**Semantic Kernel**
Semantic Kernel manages AI memory, function execution, and dynamic planning, ensuring context-aware, flexible, and human-like interactions throughout the conversation.

**FastAPI WebSocket**
FastAPI WebSocket enables real-time, low-latency, bi-directional communication between the frontend and backend, allowing seamless audio streaming and instant responses.

**HTML/JavaScript Frontend**
The HTML/JavaScript frontend provides a simple, responsive user interface that captures microphone input, connects via WebSocket, and displays live AI responses smoothly.

![](https://github.com/mkcod/astra-ai-companion/blob/main/architecture.PNG "Architecture")

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
