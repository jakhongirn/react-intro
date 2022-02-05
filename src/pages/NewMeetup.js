import NewMeetupForm from '../components/meetups/NewMeetupForm';


function NewMeetupPage() {
    function AddMeetupHandler(meetupData){

    }
  return (
    <section>
      <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
