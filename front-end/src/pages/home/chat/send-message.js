import React, {useState} from 'react';

const SendMessage = ({socket, username, room}) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message !== '') {
      const __createdtime__ = Date.now();

      socket.emit('send_message', {username, room, message, __createdtime__});
      setMessage('');
    }
  };

  return (
    <div>
      <input
        placeholder='Message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default SendMessage;
