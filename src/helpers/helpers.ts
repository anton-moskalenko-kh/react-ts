const retrieveLocalStorageData = <T,>(key: string) => {
    const storage = localStorage.getItem(key) || ''
    const data = JSON.parse(storage)
    if (!storage) {
        return {} as T
    }
    return data as T
}

export {
    retrieveLocalStorageData,
}