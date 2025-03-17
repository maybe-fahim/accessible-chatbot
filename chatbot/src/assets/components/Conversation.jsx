import React from "react";

const Conversation = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-end bg-[var(--userMessageBackground)] text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[60%]"
      style={{ fontSize: "var(--messageTextSize)"}}
      >
        Can you write me a short poem? Something about nature, maybe? Or possibly including the idea of new beginnings?
      </div>
      <div className="self-start text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[100%]">
        Here's a short poem for you:<br /><br />
        <strong>Whispers of Dawn</strong><br /><br />
        Morning light filters through leaves,<br />
        Painting shadows on dewy grass.<br />
        Birds call to one another,<br />
        Their songs a delicate symphony.<br /><br />
        The world awakens slowly,<br />
        Colors emerging from night's embrace,<br />
        A reminder that beginnings<br />
        Are both constant and fleeting.
      </div>

      <div className="self-end bg-[var(--userMessageBackground)] text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[60%]">
        That was beautiful, thank you. Can you also tell me a random fun fact?
      </div>
      <div className="self-start text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[100%]">
        Absolutely! Did you know that sea otters hold hands when they sleep so they don't drift apart? 🦦
      </div>

      <div className="self-end bg-[var(--userMessageBackground)] text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[60%]">
        That’s adorable. What’s the weather like on Mars?
      </div>
      <div className="self-start text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[100%]">
        Cold! Average temps hover around -60°C, and it can get as cold as -125°C at night. Definitely not t-shirt weather.
      </div>

      <div className="self-end bg-[var(--userMessageBackground)] text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[60%]">
        Fair enough 😂 What’s your favorite programming language?
      </div>
      <div className="self-start text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[100%]">
        I don't pick favorites... but JavaScript does keep me busy! It's the language of the web, after all.
      </div>

      <div className="self-end bg-[var(--userMessageBackground)] text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[60%]">
        Can you remind me what day it is today?
      </div>
      <div className="self-start text-[var(--messageTextColour)] px-4 py-2 rounded-3xl max-w-[100%]">
        Sure thing! It’s a great day to build something cool. 😉 (But seriously, check your system clock just in case.)
      </div>
    </div>
  );
};

export default Conversation;
