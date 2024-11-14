export async function POST(req: Request) {
    // Inputs
    const body = await req.json();

    // Validation checks (user authorization)

    // Your logic here

    // Return a response
    return new Response(JSON.stringify(body));
}