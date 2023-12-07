const apiUrl = 'https://school.web.astrosoftware.com.np/api/v1/'
const apiKey = 'p2yrhocea##)+87ob2#=$8&hs+@yh0dtr^nxeoq$tjug%se4fl'
const samanyaGyanUrl = 'samanya-gyan'
const lokSewaUrl = 'categories'

// Getting lock sewa data from api
export async function getLokSewaData() {

    try {
        const response = await fetch(`${apiUrl}${lokSewaUrl}`, {
            headers: {
                'Api-Key': apiKey,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error('Error fetching LokSewa:', error.message);
        throw error;
    }
}

// Getting samanya gyan data from api
export async function getSamanyaGyanData() {
    try {
        const response = await fetch(`${apiUrl}${samanyaGyanUrl}`, {
            headers: {
                'Api-Key': apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error('Error fetching SamanyaGyan:', error.message);
        throw error;
    }
}