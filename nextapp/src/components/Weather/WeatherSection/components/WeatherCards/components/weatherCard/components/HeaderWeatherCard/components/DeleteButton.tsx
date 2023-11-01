import { Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import style from "./style.module.css";

export function DeleteButton({ onDeleteHandler }: { onDeleteHandler: () => {} }) {
  return (
    <Button
      className={style.headerWeatherCardDeleteButton}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onDeleteHandler()
      }}
    >
      <DeleteOutlineIcon />
    </Button>
  )
}