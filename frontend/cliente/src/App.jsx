import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import io from 'socket.io-client';
import { Container, Content, Card, MyMessage, OtherMessage } from './styles';

const socket = io('http://127.0.0.1:3333');

const Home = () => {
  const [title] = useState('Chat Web');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function receivedMessage(message) {
      const newMessage = {
        id: uuidv4(),
        name: message.name,
        text: message.text,
      };

      setMessages([...messages, newMessage]);
    }

    socket.on('msgToClient', (message) => {
      receivedMessage(message);
    });
  }, [messages, name, text]);

  function validateInput() {
    return name.length > 0 && text.length > 0;
  }

  function sendMessage() {
    if (validateInput()) {
      const message = {
        name,
        text,
      };

      socket.emit('msgToServer', message);
      setText('');
    }
  }

  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
        />
        <Card>
          <ul>
            {messages.map((message) => {
              if (message.name === name) {
                return (
                  <MyMessage key={message.id}>
                    <span>
                      {message.name}
                      {' diz:'}
                    </span>

                    <p>{message.text}</p>
                  </MyMessage>
                );
              }

              return (
                <OtherMessage key={message.id}>
                  <span>
                    {message.name}
                    {' diz:'}
                  </span>

                  <p>{message.text}</p>
                </OtherMessage>
              );
            })}
          </ul>
        </Card>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter message..."
        />
        <button type="button" onClick={() => sendMessage()}>
          Send
        </button>
      </Content>
    </Container>
  );
};

export default Home;