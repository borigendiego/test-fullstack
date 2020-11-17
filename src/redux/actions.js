import { ADD_FILES, DELETE_FILE, UPDATE_FILE } from "./actionTypes";

export const addFileList = files => {
    return {
        type: ADD_FILES,
        filesList: files,
    }
};

export const deleteFiles = file => {
    return {
        type: DELETE_FILE,
        id: file.id,
    }
};

export const updateFile = (data) => {
    return {
        type: UPDATE_FILE,
        data: data,
    }
};