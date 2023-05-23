import {useEffect} from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import {io} from 'socket.io-client'

const TOOLBAR_OPTIONS = [
    [{header:[1,2,3,4,5,6,false]}],
    [{font:[]}],
    [{list:"ordered"},{list:"bullet"}],
    ["bold","italic","underline"],
    [{color:[]},{background:[]}],
    [{script:"sub"},{script:"super"}],
    [{align:[]}],
    ["image","blockquote","code-block"],
    ["clean"],
]
export default function Texteditor() {
  useEffect(()=>{
    new Quill(".container",{theme:"snow" , modules:{toolbar:TOOLBAR_OPTIONS}})
    const socket = io("http://localhost:3001")
    return ()=>{
      socket.disconnect()
    }
  },[])
  return (
    <div className="container"></div>
  )
}
