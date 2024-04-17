import BtnForm from '../components/BtnForm'
import Form from '../components/Form'

export default function Signup() {
    return <div className="mx-auto w-4/5 px-6 flex justify-center items-center">
        <Form label="Name" placeholder='Your Name' />
        <Form label="Email" placeholder='Your Email' />
        <Form label="Password" placeholder='Password' />
        <BtnForm content="Signup" />
    </div>
}