import authorReducer from "./authors/reducers"
import categoryReducer from "./categories/reducers"
import chapterReducer from "./chapters/reducers"
import comicReducer from "./comics/reducers"
import commentReducer from "./comments/reducers"
import companyReducer from "./companies/reducers"
import { configureStore } from "@reduxjs/toolkit"
import reactionReducer from "./reactions/reducers"
import userReducer from "./user/reducers"
import lastReadReducer from "./lastreads/reducers"
import usersReducer from "./users/reducers"

const store = configureStore({
    reducer: {
        author: authorReducer,
        comments: commentReducer,
        company: companyReducer,
        comics: comicReducer,
        chapters: chapterReducer,
        categories: categoryReducer,
        user: userReducer,
        reactions: reactionReducer,
        lastRead: lastReadReducer,
        users: usersReducer,
    },
})

export default store
