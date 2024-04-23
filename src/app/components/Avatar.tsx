interface AvatarProps{
    label:string
}
export default function Avatar({ label }: AvatarProps) {
    return <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span>{label}</span>
        </div>
    </div>
}