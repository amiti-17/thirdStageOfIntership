import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ButtonStyled } from "./styled/ButtonStyled";

export function DeleteButton({ onDeleteHandler }: { onDeleteHandler: () => {} }) {
  return (
    <ButtonStyled
      size="small"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onDeleteHandler()
      }}
    >
      <DeleteOutlineIcon />
    </ButtonStyled>
  )
}