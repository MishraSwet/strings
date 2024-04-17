interface props{
    content:string
}

export default function BtnForm({content}:props) {
    return <div>
        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{content}</button>
    </div>
}