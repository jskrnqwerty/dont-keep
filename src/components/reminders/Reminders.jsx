import EmptyNotesTemplate from "../templates/EmptyNotesTemplate";
// import EmptyReminders from "./EmptyReminders";

const Reminders = () => {
  return (
    <>
      {/* <EmptyReminders /> */}
      <EmptyNotesTemplate destination="reminders" />
    </>
  );
};

export default Reminders;
