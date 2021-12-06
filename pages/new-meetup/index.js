import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
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
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};

export default NewMeetUpPage;
