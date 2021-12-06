import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailPage() {
  return (
    <MeetupDetail
      title="A first meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
      address="Some address. Somewhere"
      description="This is a first meeting."
    />
  );
}

export default MeetupDetailPage;
