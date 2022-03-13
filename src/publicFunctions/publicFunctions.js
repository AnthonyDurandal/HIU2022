import { localLink } from "../config/Config"

/* 
    parameters
    restUrl, method, additionalHeader, tokenName, contentTypeName, requestBody, functionToExecute
 */

export default async function fetchData(request)
{
        await verifyRequestMethod(request.method)
        //const contentType = getRequestBodyType(request.contentTypeName)
    const lien = localLink+request.restUrl;
        //createHeader(additionalHeader, token, contentTypeNickName)
        const header = await createHeader(request.additionalHeader, request.tokenName, request.contentTypeName)
        // setFunction(dataForChart)
        const options =await {method:request.method,header:header}
        console.log('options')
        console.log(options)
        fetch(lien, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .then((jsonData) => {
                if (request.functionToExecute){
                    request.functionToExecute(jsonData.data)
                }
                return jsonData.data
            });
}

async function verifyRequestMethod(requestMethod){
    ['GET','POST','PUT','DELETE'].forEach(registeredMethod => {
        if (registeredMethod === requestMethod) return true;
        //if (registeredMethod.compareToIgnoreCase(requestMethod))return true;
    });
    return false;
}
/*
content-type list
text / html
text / plain
application / msword
application / vnd.ms - excel
application / jar
application / pdf
application / octet - stream
application / x - zip
images / jpeg
images / png
images / gif
audio / mp3
video / mp4
*/
async function getRequestBodyType(contentType) {
    const possibleValues = [
        { 'nickname': 'json', 'value': 'application/json' },
        { 'nickname': 'html', 'value': 'text/html' },
        { 'nickname': 'plain', 'value': 'text/plain' },
        { 'nickname': 'urlencoded', 'value': 'application/x-www-form-urlencoded' },
        { 'nickname': 'urlencoded', 'value': 'application/x-www-form-urlencoded' },
        /* add other content types here */
            // { 'nickname': '', 'value': '' },

        /* add other content types here(ends) */
    ]
    // const result = await possibleValues.forEach(( possibleValue ) => {
    //     //if (possibleValue.nickname.compareToIgnoreCase(contentType)) return possibleValue.value;
    //     console.log('personne  ' + (possibleValue.nickname === contentType))
    //     if (possibleValue.nickname === contentType){
    //         return possibleValue.value;
    //     }
    // })
    for(const x = 0;x<possibleValues.length;x++)
    {
        console.log('values')
        console.log(contentType + '   ' + possibleValues[x].nickname + '  ' + (possibleValues[x].nickname === contentType))
        if (possibleValues[x].nickname === contentType)
        {
            return possibleValues[x].value;
        }
    }
    throw new Error('requestBodyType not supported or nonexistent');
}

async function createHeader(additionalHeader, tokenName, contentTypeNickName){
    const defaultHeader = {
        'Access-Control-Allow-Origin': '*',
        'mode': 'no-cors'
    }
    const contentType = await getRequestBodyType(contentTypeNickName)
    defaultHeader.contentType = contentType
    if(tokenName){
        defaultHeader.authorization =await 'Bearer '+ await getToken(tokenName)
    }
    console.log('   ')
    console.log(defaultHeader)
    return defaultHeader
}

async function getToken(tokenName)
{
    return await localStorage.getItem(tokenName)
}

