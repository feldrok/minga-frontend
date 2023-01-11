import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const newChapter = createAsyncThunk("newChapter", async (chapter) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/api/chapters",
            chapter
        )
        return {
            response: { chapter: response.data },
            message: "Chapter created successfully",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error creating chapter",
        }
    }
});

const getChapterDetails = createAsyncThunk("getChapterDetails", async (_id) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/api/chapters/${_id}`
        )
        return {
            response: {chapter: response.data},
            message: "Chapter successfully obtained!"
        }
    } catch (error) {
        return {
            response: {chapter: error.response.data},
            message: "Error: Chapter cannot be obtained."
        }
    }
})

const chapterActions = {
    newChapter,
    getChapterDetails,
}

export default chapterActions

//Para obtener el sig capitulo, vamos a llamar al store, que esta guardado en el estado de chapters, y el capitulo actual se está guardando en chapter
//Para pasar al siguiente, revisamos si estamos en la ultima pagina, y si es asi, despacharemos la accion pasando el ID que sacaremos del estado de chapters