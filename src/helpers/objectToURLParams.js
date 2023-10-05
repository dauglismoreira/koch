import getURLParameters from "@/helpers/getURLParameters";

export default function objectToURLParams(obj){
    return Object.entries(obj)
        .filter(([key, value]) => value.length)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')
}