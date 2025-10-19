import Edit from "@/components/ListItem/Edit";
import { Stack } from "@chakra-ui/react";

const meta = {
    title: "Components/ListItem/Edit",
    component: Edit,
    decorators: [
        (Story) => {
            return (
                <Stack width="400px" borderWidth="2px" rounded="lg" borderColor="#181C14">
                    <Story />
                </Stack>
            )
        }
    ]
}

export default meta

export const Default = {
    args: {
        prev: {
            text: "Example Todo",
            id: "1",
            priority: "high"
        }
    }
}