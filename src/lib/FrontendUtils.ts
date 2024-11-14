export async function POSTFetch(url: string, body: any, formData?: any) {
    try {
        return await fetch(url, {
            method: "POST",
            body: formData ? formData : JSON.stringify(body),
            headers: formData ? {} : { "Content-Type": "application/json" },
        }).then(r=>r.json());
    } catch (e) {
        console.log("Url: ", url, "\nError: ",e);
        return {status: false, reason: "Internal Server Error"}
    }
}

export async function GETFetch(url: string) {
    try {
        return await fetch(url).then(r=>r.json());
    } catch (e) {
        console.log("Url: ", url, "\nError: ",e);
        return {status: false, reason: "Internal Server Error"}
    }
}