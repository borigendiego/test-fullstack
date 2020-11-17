import { ADD_FILES, DELETE_FILE, UPDATE_FILE } from "../actionTypes";

const initialState = {
    filesList: [],
    deletedItems: 0,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_FILES: {
            const { filesList } = action;

            return {
                ...state,
                filesList: filesList,
            };
        }
        case DELETE_FILE: {
            const { id } = action;
            const { filesList, deletedItems } = state;
            const pos = filesList.map(function(e) { return e.id; }).indexOf(id);
            filesList.splice(pos, 1);

            return {
                ...state,
                deletedItems: deletedItems + 1,
            };
        }
        case UPDATE_FILE: {
            const { data } = action;
            const { filesList } = state;


            const pos = filesList.map(function(e) { return e.id; }).indexOf(data.id);
            console.log('>>filesList', filesList);
            console.log('>>data', data);
            console.log('>>pos', pos);
            state.filesList[pos] = data;

            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
