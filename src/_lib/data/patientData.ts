
"use server"
export async function fetchAllPatientData() {
    const userrname = "coalition";
    const password = "skills-test";
    const encodedCredentials = btoa(`${userrname}:${password}`); // Base64 encode credentials

    const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${encodedCredentials}` // Correct way to send credentials
        }
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

