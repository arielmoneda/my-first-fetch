const catapi = "https://api.thecatapi.com/v1/images/search?limit=10"

export const getcatAPI = async () => {
    const response = await fetch(catapi, {
        method: "GET",
    })

    const res=await response.json();
    
    return res;
};