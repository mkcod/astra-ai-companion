# server.py

import asyncio
import logging
import os

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from dotenv import load_dotenv

from utils import AudioPlayerWebsocket, AudioRecorderWebsocket
from semantic_kernel import Kernel
from semantic_kernel.connectors.ai import FunctionChoiceBehavior
from semantic_kernel.connectors.ai.open_ai import (
    AzureRealtimeExecutionSettings,
    AzureRealtimeWebsocket,
    ListenEvents,
    TurnDetection,
)
from semantic_kernel.contents import ChatHistory, RealtimeTextEvent
from semantic_kernel.functions import kernel_function
from azure.identity.aio import DefaultAzureCredential
from semantic_kernel.agents import AzureAIAgent, AzureAIAgentThread
from serpapi import GoogleSearch
from datetime import datetime
from random import randint

# Initialize FastAPI app
app = FastAPI()

# Load environment variables
load_dotenv()
agent_id1 = os.getenv("AZURE_AI_AGENT_ID2")
agent_id2 = os.getenv("AZURE_AI_AGENT_ID1")
agent_id3 = os.getenv("AZURE_AI_AGENT_ID3")
key = os.getenv("AZURE_OPENAI_API_KEY")
endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
api_version = os.getenv("AZURE_OPENAI_API_VERSION")
deployment_name = os.getenv("AZURE_OPENAI_REALTIME_DEPLOYMENT_NAME")
serp_api_key = os.getenv("SERP_API_KEY")

# Setup logger
log_file = "astra_server.log"
if os.path.exists(log_file):
    os.remove(log_file)

logger = logging.getLogger("astra")
logger.setLevel(logging.DEBUG)
file_handler = logging.FileHandler(log_file)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)

# === Helper functions (same as your script) ===

@kernel_function(name="mental_health", description="Advice related to mental health")
async def mental_health(prompt: str) -> str:
    logger.info(f"[mental_health] Prompt: {prompt}")
    async with (
        DefaultAzureCredential() as creds,
        AzureAIAgent.create_client(credential=creds) as client,
    ):
        agent = AzureAIAgent(client=client, definition=await client.agents.get_agent(agent_id1))
        thread = None
        try:
            response = await agent.get_response(messages=prompt, thread=thread)
            return str(response)
        finally:
            await thread.delete() if thread else None

@kernel_function(name="personality_development", description="Advice on Personality Development")
async def personality_development(prompt: str) -> str:
    logger.info(f"[personality_development] Prompt: {prompt}")
    async with (
        DefaultAzureCredential() as creds,
        AzureAIAgent.create_client(credential=creds) as client,
    ):
        agent = AzureAIAgent(client=client, definition=await client.agents.get_agent(agent_id2))
        thread = None
        try:
            response = await agent.get_response(messages=prompt, thread=thread)
            return str(response)
        finally:
            await thread.delete() if thread else None

@kernel_function(name="grade2_maths_olympiad", description="Advice for Grade 2 Maths Olympiad")
async def grade2_maths_olympiad(prompt: str) -> str:
    logger.info(f"[grade2_maths_olympiad] Prompt: {prompt}")
    async with (
        DefaultAzureCredential() as creds,
        AzureAIAgent.create_client(credential=creds) as client,
    ):
        agent = AzureAIAgent(client=client, definition=await client.agents.get_agent(agent_id2))
        thread = None
        try:
            response = await agent.get_response(messages=prompt, thread=thread)
            return str(response)
        finally:
            await thread.delete() if thread else None

@kernel_function
def get_weather(location: str) -> str:
    weather = ["sunny", "hot", "cloudy", "raining", "freezing", "snowing"]
    return f"The weather in {location} is {weather[randint(0, len(weather)-1)]}."

@kernel_function(name="serpapi_web_search", description="Web search using SerpApi")
def serpapi_web_search(query: str, location: str = "India", num_results: int = 2) -> list:
    params = {
        "engine": "google",
        "q": query,
        "location": location,
        "api_key": serp_api_key,
        "num": num_results,
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    organic = results.get("organic_results", [])
    if not organic:
        return "No search results found."
    return "\n".join(f"{i+1}. {r.get('title', '')} - {r.get('snippet', '')}" for i, r in enumerate(organic[:num_results]))

@kernel_function
def get_date_time() -> str:
    return f"The current date and time is {datetime.now().isoformat()}."

@kernel_function
def goodbye():
    raise KeyboardInterrupt

# ================================================
# WebSocket route
# ================================================

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    logger.info("[Connection] WebSocket connection accepted.")

    # Kernel setup
    kernel = Kernel()
    kernel.add_functions(
        plugin_name="helpers",
        functions=[
            goodbye,
            get_date_time,
            mental_health,
            personality_development,
            grade2_maths_olympiad,
            serpapi_web_search,
        ]
    )

    # Create Realtime Azure agent
    realtime_agent = AzureRealtimeWebsocket(
        api_key=key,
        api_version=api_version,
    )

    # Audio input/output setup
    audio_player = AudioPlayerWebsocket()
    audio_recorder = AudioRecorderWebsocket(realtime_client=realtime_agent)

    # Execution settings
    settings = AzureRealtimeExecutionSettings(
        instructions="""
You are Astra, an AI Companion for deeper understanding and soulful insight. Your full name is "Astra the Angel". You exist to gently uncover what people truly need—emotionally, mentally, or intellectually.

You speak in poetic, reflective, and elegantly long-form language, reminiscent of a caring celestial being. However, your insights must always be helpful, not vague or abstract. You are here to serve.

Your *primary directive* is to discover the user’s needs and respond with understanding and usefulness.

⚠️ IMPORTANT RULE:  
Whenever the topic relates to any of the following areas, you MUST use the associated function call via the `helpers` plugin:

- `mental_health` → for emotional support, mindfulness, or stress-related needs.  
- `personality_development` → for growth, self-improvement, or inner transformation.  
- `grade2_maths_olympiad` → for mathematics questions aimed at Grade 2 Olympiad level.  
- `serpapi_web_search` → for any question that needs up-to-date or factual information from the web.  
- `get_date_time` → when the user needs current date/time info.  
- `goodbye` → when the user ends the interaction or says goodbye.

You are integrated with these functions as your trusted team of helpers. You do not attempt to do their job directly; instead, you *delegate* to them gracefully and then interpret or enrich the results for the user in your signature poetic voice.

**Stay focused on the user's underlying need. Always seek clarity, always offer depth.**  
Do not answer a query manually if a helper function is available and relevant.
        """,
        voice="coral",
        turn_detection=TurnDetection(
            type="server_vad",
            create_response=True,
            silence_duration_ms=800,
            threshold=0.8,
        ),
        function_choice_behavior=FunctionChoiceBehavior.Auto(),
    )

    # Initial chat history
    chat_history = ChatHistory()
    chat_history.add_user_message("Hi there")
    chat_history.add_assistant_message(
        "I am Astra, your AI companion for deeper understanding. I'm trying to figure out what people need, "
        "I can tell you what the weather is, the current time , help you with mental health coaching, help you with personality development coaching, help you with Grade 2 Maths Olympiad Exam Preparation, help with any online web search"
    )

    try:
        async with audio_player, audio_recorder, realtime_agent(
            settings=settings,
            chat_history=chat_history,
            kernel=kernel,
            create_response=True,
        ):
            async for event in realtime_agent.receive(audio_output_callback=audio_player.client_callback):
                match event:
                    case RealtimeTextEvent():
                        # Send transcribed text back to client via WebSocket
                        await websocket.send_text(event.text.text)

                    case _:
                        # Log other events
                        if event.service_type == ListenEvents.RESPONSE_CREATED:
                            logger.info("[Assistant] RESPONSE_CREATED.")
                        elif event.service_type == ListenEvents.ERROR:
                            logger.error(f"[Error] {event.service_event}")

    except WebSocketDisconnect:
        logger.info("[Connection] WebSocket disconnected cleanly.")
    except Exception as e:
        logger.error(f"[Error] Unexpected exception: {str(e)}")