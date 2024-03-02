async function postPledge(newPledge) {
    console.log(newPledge);
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user"); // check this, does it need to be user_id?

    if (!token) {
        throw new Error("Unauthorized request. Please log in.");
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            auth: `Token ${token}`,
        },
        body: JSON.stringify(newPledge),
    });

    if (!response.ok) {
        const fallbackError = `Error submitting pledge with status: ${response.status}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postPledge;