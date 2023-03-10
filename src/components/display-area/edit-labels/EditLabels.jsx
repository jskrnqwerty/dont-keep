import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import EmptyNotesTemplate from "../../common/templates/EmptyNotesTemplate";

const EditLabels = ({ displayIn }) => {
  const { destinationOptions } = useContext(NotesDataContext);
  return (
    <>
      <EmptyNotesTemplate displayIn={destinationOptions.editLabels} />
    </>
  );
};

export default EditLabels;
