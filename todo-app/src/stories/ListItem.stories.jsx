import Item from "@/components/ListItem/Item"

const meta = {
    title: "Components/ListItem",
    component: Item,
}

export default meta

export const High = {
    args: {
        todo: {
            priority: 1,
            text: "Example Todo",
            id: "1",
        },
        handleRemove: (id) => {console.log("Removing", id)}
    }
}

export const Medium = {
    args: {
        todo: {
            priority: 1,
            text: "Example Todo",
            id: "1",
        },
        handleRemove: (id) => {console.log("Removing", id)}
    }
}

export const Low = {
    args: {
        todo: {
            priority: 1,
            text: "Example Todo",
            id: "1",
        },
        handleRemove: (id) => {console.log("Removing", id)}
    }
}

