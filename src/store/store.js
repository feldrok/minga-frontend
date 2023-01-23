import authorReducer from "./authors/reducers"
import categoryReducer from "./categories/reducers"
import chapterReducer from "./chapters/reducers"
import comicReducer from "./comics/reducers"
import commentReducer from "./comments/reducers"
import companyReducer from "./companies/reducers"
import { configureStore } from "@reduxjs/toolkit"
import getIdReducer from "./getId/reducer"
import userReducer from "./user/reducers"

const store = configureStore({
    reducer: {
        author: authorReducer,
        comments: commentReducer,
        company: companyReducer,
        comics: comicReducer,
        chapters: chapterReducer,
        categories: categoryReducer,
        user: userReducer,
        id: getIdReducer
    },
})

export default store
