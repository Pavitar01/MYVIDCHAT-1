// import { message } from "twilio/lib/twiml/MessagingResponse";

const accountSid = "ACacbea2894ae21f4dcd16f60bf4efb0bc";
const authToken = "c55969674969a63e6e7eefe855edc83c";
const client = require("twilio")(accountSid, authToken);

// var code = "+919306352523";
const max = 55555;
const min = 99999;
const result = Math.random() * (max - min) + min;

client.messages
  .create({
    body: `Your MyVidChat One Time Password is : ${Math.floor(result)} `,
    from: "+15077347472",
    to: "+918307434832",
  })

  .then((message) => console.log(message.sid));

// export default Message;
