import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyAKlxtwOzGeC1FPaozg-cCqSAaIwtcCpDg" });


const history =[]

async function chatting(userProblem) {


    history.push({
        role:"user",
        parts :[{text:userProblem}]
    })

  const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents :history,
    // contents: "How does AI work?",
    // contents: [
    //   {
    //     role: "user",
    //     parts : [{text: "What is the capital of France?"}],
    //   },
    //   {
    //     role:"model",
    //     parts:[{text: "my name is neetesh"}],
    //   },
    //   {
    //     role: "user",
    //     parts : [{text: "What is my name"}],
    //   },
    // ],
    
  });

  history.push({
        role:"model",
        parts :[{text:response.text}]
    })
  console.log(response.text);
}

async function main(){
    const userProblem = readlineSync.question("ask me anything...")
    await chatting(userProblem)
    main()
}
await main();