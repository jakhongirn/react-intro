import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-intro-c9930-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData), //Convert data into JSON
        headers: {
          "Content-Type": "application/json",
        },
      } //It's api rules of Firebase
    ).then(() => {
        navigate('/'); //when data submits the data it will redirect to the home path 
    }); //Builtin vanilla Javascript function
  }
  
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
