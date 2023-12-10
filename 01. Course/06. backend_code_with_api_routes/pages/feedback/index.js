import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch("/api/" + id)
      .then((resp) => resp.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }

  return (
    <>
      <ul>
        {feedbackData && <p>{feedbackData.email}</p>}
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
