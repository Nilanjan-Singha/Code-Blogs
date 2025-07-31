import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Markdownfetch({file}){

    const [content, setContent] = useState("");

    useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text));
    }, []);

    return <ReactMarkdown>{content}</ReactMarkdown>;

}