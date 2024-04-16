const base = process.env.REACT_APP_BASE;

export const loginUser = async(obj) => {
    const res = await fetch(`${base}/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}

export const createUser = async(obj) => {
    const res = await fetch(`${base}/api/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}

// export const getDetails = async(obj) => {
//     const res = await fetch(`https://api.techspecs.io/v4/all/categories`, {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19Qb1g2cGJRdExwVUpUQyIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcxMTUzNjUzN30.DmMPmVBg6mGNB-FE9NqiIwfH9Oc3NPajCTCAFh1oJqw",
//         },
//     });
//     const ans = await res.json();
//     return ans;
// }