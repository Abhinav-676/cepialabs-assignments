import Button from "@/components/ListItem/ControlButton"

const meta = {
    title: "Components/ListItem/Button",
    component: Button,
}

export default meta

export const Role = {
    args: {
        role: "role",
        handleRole: () => {console.log("This function hanldes the button role.")}
    }
}