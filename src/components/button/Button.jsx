export default function Button({ children, className, onClick }) {
    return (
        <div>
            <button type="button" className={className} onClick={onClick}>{children}</button>
        </div>
    )
}