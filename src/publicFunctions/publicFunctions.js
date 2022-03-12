/* 
    parameters
    restUrl, method, additionalHeader, tokenName, requestBodyType, requestBody, functionToExecute
 */export default async function fetchData(request)
{
        const lien = request.restUrl;
        // setFunction(dataForChart)
        fetch(lien, {
            method: 'GET',
            header: {
                'Access-Control-Allow-Origin': '*',
                'mode': 'no-cors',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((jsonData) => {
                //functionToCall(jsonData.data)
            });
}

async function verifyRequestMethod(requestMethod){
    ['GET','POST','PUT','DELETE'].forEach(registeredMethod => {
        if (registeredMethod.compareToIgnoreCase(requestMethod))return true;
    });
    return false;
}

async function getRequestBodyType(requestBodyType) {
    const possibleValues = [
        { 'nickname': 'json', 'value': '' },
        { 'nickname': 'text', 'value': '' },
        { 'nickname': 'multipart', 'value': '' },
        // { 'nickname': '', 'value': '' },
        // { 'nickname': '', 'value': '' }
    ]
    possibleValues.forEach(( {nickname, value} ) => {
        if (nickname.compareToIgnoreCase(requestBodyType)) return value;
    });
    throw new Error('requestBodyType not supported or nonexistent');
}

