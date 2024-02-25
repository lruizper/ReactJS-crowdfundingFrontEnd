async function postProject(newProj) {
    console.log(newProj);
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Unauthorized request. Please log in.");
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(newProj),
    });

    if (!response.ok) {
        const fallbackError = `Error creating project with status: ${response.status}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postProject;