export const getFilesList = store => {
    return  store && store.files.filesList ? store.files.filesList : [];
};

export const getDeletedFiles = store => {
    return store && store.files.deletedItems ? store.files.deletedItems : 0;
}