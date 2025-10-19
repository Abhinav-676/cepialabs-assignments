import { Button } from "@chakra-ui/react"

function ControlButton({role, handleRole}) {
    return (
        <Button onClick={handleRole} variant="surface" size="2xs">
            {role}
        </Button>
    )
}

export default ControlButton