import Card from "../ui/Card";
import classes from "./styles/NewMeetupForm.module.css"; //imports al classes from css file. Note that you should write css file as {filename}.module.css
import { useRef } from "react";

function NewMeetupForm() {
  const titleInputRef = useRef(); //useRef gives the value of each input from form
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();


  // function that handles when form submits by user
  function submitHandler(event) {
    event.preventDefault(); //prevent refresh the page
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
    };
    
    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Metup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}>

          </textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
