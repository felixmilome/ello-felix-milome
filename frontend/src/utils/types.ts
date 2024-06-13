
import React from "react"

export type BookType = {
    title: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string
  }

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;