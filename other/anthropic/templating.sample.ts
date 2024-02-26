import Anthropic from '@anthropic-ai/sdk';
import spaceTrim from 'spaceTrim';

const anthropic = new Anthropic({
    apiKey: 'my_api_key', // defaults to process.env["ANTHROPIC_API_KEY"]
});

const msg = await anthropic.messages.create({
    model: 'claude-2.1',
    max_tokens: 1000,
    temperature: 0,
    messages: [
        {
            role: 'user',
            content: spaceTrim(`

                Write a study plan for a 16-year-old student

                ## Example

                <study-plan>

                  <subject name="Math">
                    <schedule day="Monday" time="9:00 AM"/>
                    <topics>
                      <topic>Algebra</topic>
                      <topic>Geometry</topic>
                      <topic>Calculus</topic>
                    </topics>
                  </subject>

                  <subject name="English">
                    <schedule day="Monday" time="10:00 AM"/>
                    <topics>
                      <topic>Grammar</topic>
                      <topic>Literature</topic>
                      <topic>Composition</topic>
                    </topics>
                  </subject>

                </study-plan>

            `),
        },
    ],
});

console.log(msg);
