import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUpPage = () => {
  const router = useRouter();
  const addMeetUpHandler = async (meetUpData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");

    console.log(meetUpData);
  };
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};

export default NewMeetUpPage;
