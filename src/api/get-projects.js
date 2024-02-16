async function getProjects() {
    const url = `${import.meta.env.VITE_API_URL}/projects`;
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
        const fallbackError = "could not fetch projects";
        const data = await response.json().catch(() => { throw new Error(fallbackError) });
        const errorMEssage = data?.detail ?? fallbackError;
        throw new Error(errorMEssage);
    }
    return await response.json();
}