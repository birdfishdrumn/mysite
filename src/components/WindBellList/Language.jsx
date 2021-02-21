import React from "react"

   export const Language = ({ lang,language }) => {
    switch (language) {
      case "France":
        return <div>{lang.translatedDescription.fr}</div>
      case "English":
        return <div>{lang.translatedDescription.en}</div>
       case "Chinese":
        return <div>{lang.translatedDescription.zh_TW}</div>
      case "Korean":
        return <div>{lang.translatedDescription.ko}</div>
    }
   return <div>{lang.description}</div>

  }

    export const Name = ({ langName,language }) => {
    switch (language) {
      case "France":
        return <div>{langName.translatedName.fr}</div>
      case "English":
        return <div>{langName.translatedName.en}</div>
      case "Chinese":
        return <div>{langName.translatedName.zh_TW}</div>
       case "Korean":
        return <div>{langName.translatedName.ko}</div>
    }
   return <div>{langName.name}</div>

  }
  // export default Language
