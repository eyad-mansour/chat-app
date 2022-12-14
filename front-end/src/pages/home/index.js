import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';
const Home = ({username, setUsername, room, setRoom, socket}) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', {username, room});
    }
  };
  navigate('/chat', {replace: true});
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Chose Room`}</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          placeholder='Username...'
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <button onClick={joinRoom} className='btn btn-secondary'>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
