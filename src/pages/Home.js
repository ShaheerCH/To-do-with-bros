import './Home.css';
const Home = () => {
  const tasksList=[];
  const tasks = [{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    status: 'completed'
  },{
    id: 2,
    text: 'Doctors Appointment 1',
    day: 'Feb 5th at 2:30pm',
    status: 'completed'
  },
  {
    id: 3,
    text: 'Doctors Appointment 2',
    day: 'Feb 5th at 2:30pm',
    status: 'completed'
  },
  {
    id: 4,
    text: 'Doctors Appointment 3',
    day: 'Feb 5th at 2:30pm',
    status: 'completed'
  },{
    id: 5,
    text: 'Doctors Appointment 4',
    day: 'Feb 5th at 2:30pm',
    status: 'completed'
  },{
    id: 6,
    text: 'Doctors Appointment 5',
    day: 'Feb 5th at 2:30pm',
    status: 'completed'
  }];
  tasks.map((task) => {
    tasksList.push(<div className='tasks'>
      <h3 className='task-h3'>{task.text}</h3>
      <p>{task.day}</p>
      <p>{task.status}</p>
      </div>)
  })


  return (
    <section className='section'>
      <h2>Tasks Page</h2>
      {tasksList}
    </section>
  );
};
export default Home;
