# Analytics in a React / Redux Single Page App

## Synopsis

Have you implemented Analytics before in a React / Redux app? Did you find it easy or difficult? How was the collaboration between UI and Analytics folks? Was it simple to scale or a headache? Getting analytics right in a scalable way can be harder than expected. We discuss why analytics is important, how it works end to end and what the challenges we might face along the way are.

## Demo app A/C

### UX requirements

[+] app shows a text input for the user to enter some text and a button to the message
[+] when the user sends the message
    + the "Message API" is called with the entered text
    + the time stamp when the user sends the message is captured
    + the user is notified that the message is being sent
    + the user can neither edit the message nor send it again until the Message API call has returned
[+] when the message has been sent
    + the user is notified that the message was sent and how long the message sending has taken (based on the time stamp)
    + the user can edit and send a message again
    + notification disappears after delay showing demo title

### Analytics requirements

The following needs to be tracked:

[+] user sends message

```javascript
// action: MESSAGE_SENT
// result to be pushed to data layer
const transform = (state, action) => ({
    event: 'message_sent',
    message: {
        text: state.message.text,
        timestamp: action.timestamp
    }
})
```

[+] message has been sent and how long the user had to wait for that to finish

```javascript
// action: MESSAGE_DELIVERED
// result to be pushed to data layer
const transform = (state, action) => ({
    event: 'message_sent',
    message: {
        text: state.message.text,
        timestamp: action.timestamp,
        duration: state.message.sentIn
    }
})
```
