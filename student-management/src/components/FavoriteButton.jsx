import { selectIsFavorite } from "@/store/slices/favorites";
import { Button } from "@chakra-ui/react"
import { useSelector } from "react-redux";

function FavoriteButton({ studentId, onToggle }) {
    const isFavorite = useSelector((state) => selectIsFavorite(state, studentId));
    
    return (
        <Button onClick={onToggle} colorScheme={isFavorite ? "red" : "gray"}>
            {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
    )
}
export default FavoriteButton;