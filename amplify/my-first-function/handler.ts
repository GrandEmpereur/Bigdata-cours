export const handler = async (event: any) => {
    console.log("Received event", event);
    return "Hello from my first function!";
};