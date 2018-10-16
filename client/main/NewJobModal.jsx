import React from "react";

const NewJobModal = (props) => {
  return(
    <form onSubmit={props.submitJob(props.category)}>
      <label>
        Job Title:
        <input 
          name="jobTitle"
          onChange={props.editJob} 
          />
      </label>
      <label>
        Company:
        <input 
          name="company" 
          onChange={props.editJob} />
      </label>
      <label>
        Location:
        <input 
          name="location" 
          onChange={props.editJob} />
      </label>
      <label>
        Posting URL:
        <input 
          name="url" 
          onChange={props.editJob} />
      </label>
      <label>
        Deadline:
        <input 
          name="deadline" 
          onChange={props.editJob} />
      </label>
      <input type="submit" value="submit"/>
    </form>
  )
}

export default NewJobModal;