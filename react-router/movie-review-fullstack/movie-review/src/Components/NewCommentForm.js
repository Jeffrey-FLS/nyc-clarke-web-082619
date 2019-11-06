import React from 'react';

function NewCommentForm(props) {
  return (
    <div className="new-comment-form">
        <textarea placeholder="Your comment here..."/>
        <button>Submit</button>
    </div>
  );
}

export default NewCommentForm;
