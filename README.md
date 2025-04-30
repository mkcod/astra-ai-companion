# 🤖 Astra AI Companion 
![](https://github.com/mkcod/astra-ai-companion/blob/main/banner.PNG "Astra - The Angel")

## 🤯 Problem Statement
While real-time voice assistants are becoming popular, most lack **domain-specific expertise**, **emotional sensitivity**, and **seamless interaction quality**.
- From a business perspective, this gap limits user engagement, satisfaction, and long-term retention — because generalized conversations fail to meet the evolving expectations of specialized, value-driven assistance.
- For end-users, especially children, young learners, and emotionally sensitive individuals, today's voice technologies often feel transactional rather than transformational.

Users need a voice companion that not only responds instantly but also adapts intelligently to different emotional and cognitive contexts, offering specialized, empathetic, and accurate support across key areas like mental health, personality development, and education.

A solution like Astra, which delivers real-time, domain-focused, and emotionally intelligent experiences, not only fulfills critical user needs but also opens up new possibilities for personalized learning, well-being enhancement, and lifelong engagement — driving both individual growth and broader business impact.

**Astra AI Companion** is powered by **Azure AI Agent Service** and **Semantic Kernel Realtime Agent**. It offers a voice-based support system for various use cases such as **mental health**, **personality development**, and **Grade 2 Maths Olympiad preparation**. Astra blends soulful, empathetic conversation with intelligent function calls to assist users in a variety of domains.



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

![](https://github.com/mkcod/astra-ai-companion/blob/main/challenges.PNG "Challenges")

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

## 🎯 Target Audience for Astra AI Companion
1. **Primary Audience**
  
🔵 **Young Learners (Ages 6–12)**
- Especially students preparing for foundational exams like the Grade 2 Maths Olympiad.
- Need interactive, fun, voice-based educational assistance tailored to their learning pace.

🔵 **Parents of Young Learners**
- Looking for safe, intelligent, and engaging tech tools that aid their children's education and emotional development.
- Want solutions that are trustworthy and offer specialized learning outside traditional classrooms.

🔵 **Individuals Seeking Personal Growth**
- Young adults and working professionals seeking guidance in personality development, communication skills, leadership training, and self-improvement habits.
- Interested in daily, bite-sized personal development coaching via voice interaction.

🔵 **Individuals Seeking Emotional Support**
- Teenagers, college students, and early professionals dealing with mental health challenges like stress, anxiety, and low motivation.
- Need empathetic, non-judgmental, real-time support that feels safe and private.

2. **Secondary Audience**

🟣 **Educators and Coaches**
- Teachers and educational content creators looking to integrate voice-based AI into learning modules for better student engagement.

🟣 **Healthcare and Wellness Coaches**
- Mental health counselors and life coaches who can use Astra as a supplementary tool to promote mindfulness and emotional resilience in their clients.

🟣 **Tech-Savvy Parents and Early Adopters**
- Parents who are familiar with AI technology and are actively seeking innovative, safe, and educational digital solutions for their children.

🟣 **AI Enthusiasts and Developers**
- Innovators interested in how real-time multi-agent systems and emotional AI frameworks can create more human-like, soulful experiences.

🚀 **Key Needs and Motivations**

User | Group | Needs	Motivations |
-- | -- | -- |
Young Learners | Fun, easy math help, confidence building | Joy of learning, winning competitions
Parents | Safe, smart tech for learning and growth | Helping children thrive
Personal Growth Seekers	| Actionable advice, motivational coaching | Becoming a better version of themselves
Emotional Support Seekers | Comfort, mindfulness tools, real-time help | Reducing anxiety, emotional wellness

## 💻 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/astra-ai-companion.git
   cd astra-ai-companion
   ```
2. **Setup Azure AI Agent Service**

   Setup Mental Health Agent, Personality Development Agent, Grade 2 Maths Olympiad Agent as per prompts from file azure_ai_agent_prompts.txt
   
3. **Set Up Backend (FastAPI Server)**:
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

4. **Set Up Frontend**:
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

## Conclusion

**Astra AI Companion** was built with a vision — to create a real-time, empathetic, and specialized voice companion that not only listens, but truly understands and empowers.

By leveraging an agentic framework and combining Azure AI Agent Service with Semantic Kernel, Astra delivers seamless conversations across emotional support, personal growth, and education — tailored for real human needs.

For young learners, for individuals seeking self-betterment, and for those who simply need a voice that truly hears them — Astra offers a future where AI connects at a deeply personal level.

Building Astra has been a journey of innovation, resilience, and heart.

Thank you for the opportunity to share this vision. Together, we can build AI that uplifts, educates, and inspires — one real-time conversation at a time.
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
