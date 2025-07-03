import type { User } from "@my-org/shared-types";
import Hello from "micro_app/Hello";

const user: User = {
    id: 2,
    name: "2",
    height: 3,
};

function App() {
    console.log("user", user);
    return (
        <>
            <Hello />
            <h1>hello from shell app with shared types</h1>
        </>
    );
}

export default App;
